<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import SiteHeader from './components/SiteHeader.vue';
import SiteFooter from './components/SiteFooter.vue';
import { findProject } from './data/projects';
const lightFragments = ref([]);
const showNotebookIntro = ref(true);
const showVineTop = ref(false);
const vineProgress = ref(0);
const isAtPageBottom = ref(false);
const handmadeCategory = ref('crystal-flower');
const route = useRoute();
const isHome = computed(() => route.path === '/');
const isWebProjects = computed(() => route.path === '/web-projects');
const detailProject = computed(() => route.path.startsWith('/projects/') ? findProject(route.params.id) : null);
const isHandmadeProjects = computed(() => route.path === '/handmade' || detailProject.value?.type === 'handmade');
const activeHandmadeCategory = computed(() => detailProject.value?.category ?? handmadeCategory.value);
const isLeatherHandmade = computed(() => activeHandmadeCategory.value === 'leather');
const isFabricHandmade = computed(() => activeHandmadeCategory.value === 'fabric');
let fragmentId = 0;
let lastFragmentAt = 0;
let reduceMotion = false;
let introTimer;
const createLightFragment = event => {
  if (reduceMotion || event.pointerType === 'touch') return;
  const now = performance.now();
  if (now - lastFragmentAt < 65) return;
  lastFragmentAt = now;
  const id = fragmentId++;
  const fragmentType = isHome.value ? 'petal' : 'crystal';
  lightFragments.value.push({
    id,
    type: fragmentType,
    x: event.clientX,
    y: event.clientY,
    size: fragmentType === 'petal' ? 9 + Math.random() * 12 : 7 + Math.random() * 14,
    driftX: -38 + Math.random() * 76,
    driftY: fragmentType === 'petal' ? 44 + Math.random() * 68 : -20 + Math.random() * 94,
    rotate: Math.round(Math.random() * 180)
  });
  window.setTimeout(() => {
    lightFragments.value = lightFragments.value.filter(fragment => fragment.id !== id);
  }, 1250);
};
const updateVineProgress = () => {
  const startAt = 360;
  const scrollableDistance = Math.max(document.documentElement.scrollHeight - window.innerHeight - startAt, 1);
  const distancePastStart = Math.max(window.scrollY - startAt, 0);
  showVineTop.value = distancePastStart > 0;
  vineProgress.value = Math.min(distancePastStart / scrollableDistance, 1);
  isAtPageBottom.value = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
};
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: reduceMotion ? 'auto' : 'smooth'
  });
};
const updateHandmadeCategory = event => {
  handmadeCategory.value = ['leather', 'fabric'].includes(event.detail) ? event.detail : 'crystal-flower';
};
const leafStyle = threshold => {
  const visibility = Math.min(Math.max((vineProgress.value - threshold) * 3.2, 0), 1);
  return {
    opacity: visibility,
    transform: `scale(${0.3 + visibility * 0.7})`
  };
};
onMounted(() => {
  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.addEventListener('pointermove', createLightFragment, {
    passive: true
  });
  window.addEventListener('scroll', updateVineProgress, {
    passive: true
  });
  window.addEventListener('resize', updateVineProgress, {
    passive: true
  });
  window.addEventListener('handmade-category-change', updateHandmadeCategory);
  updateVineProgress();
  introTimer = window.setTimeout(() => {
    showNotebookIntro.value = false;
  }, reduceMotion ? 80 : 3000);
});
onBeforeUnmount(() => {
  window.removeEventListener('pointermove', createLightFragment);
  window.removeEventListener('scroll', updateVineProgress);
  window.removeEventListener('resize', updateVineProgress);
  window.removeEventListener('handmade-category-change', updateHandmadeCategory);
  window.clearTimeout(introTimer);
});
const skipNotebookIntro = () => {
  window.clearTimeout(introTimer);
  showNotebookIntro.value = false;
};
</script>

<template>
<Transition name="notebook-intro">
  <section v-if="showNotebookIntro" class="notebook-intro" aria-label="打開留光作品筆記本">
    <div class="paper-grain" aria-hidden="true">
    </div>
    <div class="notebook-wrap" aria-hidden="true">
      <div class="notebook-pages">
        <span class="page-title">
          <span>
            留光
          </span>
          <span>
            LUMEN
          </span>
        </span>
        <span class="page-caption">
          作品收藏冊
        </span>
      </div>
      <div class="notebook-cover">
        <div class="lace-border lace-top">
        </div>
        <div class="lace-border lace-bottom">
        </div>
        <div class="cover-label">
          <span>
            HANDMADE PORTFOLIO
          </span>
          <strong>
            留光
            <br>
            作品集
          </strong>
          <i>
            open gently
          </i>
        </div>
      </div>
      <span class="bookmark">
      </span>
    </div>
    <button class="skip-intro" type="button" @click="skipNotebookIntro">
      略過動畫
    </button>
  </section>
</Transition>
<div class="ambient-light" aria-hidden="true">
  <span
      v-for="fragment in lightFragments"
      :key="fragment.id"
      :class="['light-fragment', fragment.type]"
      :style="{
        '--x': `${fragment.x}px`,
        '--y': `${fragment.y}px`,
        '--size': `${fragment.size}px`,
        '--drift-x': `${fragment.driftX}px`,
        '--drift-y': `${fragment.driftY}px`,
        '--rotation': `${fragment.rotate}deg`,
      }"
    />
</div>
<div class="site-content">
  <SiteHeader />
  <main>
    <RouterView />
  </main>
  <SiteFooter />
</div>
<Transition name="vine-top">
  <button
      v-if="showVineTop && isWebProjects"
      class="pixel-top-button"
      type="button"
      aria-label="回到頁面頂端"
      title="回到頂端"
      @click="scrollToTop"
    >
    <svg viewBox="0 0 68 190" aria-hidden="true">
      <rect class="pixel pixel-one" x="28" y="151" width="14" height="14" rx="2" />
      <rect class="pixel pixel-two" x="12" y="125" width="14" height="14" rx="2" />
      <rect class="pixel pixel-three" x="28" y="99" width="14" height="14" rx="2" />
      <rect class="pixel pixel-four" x="44" y="73" width="14" height="14" rx="2" />
      <rect class="pixel pixel-five" x="28" y="47" width="14" height="14" rx="2" />
      <rect class="pixel pixel-six" x="12" y="21" width="14" height="14" rx="2" />
    </svg>
    <span>
      回到頂端
    </span>
  </button>
  <button
      v-else-if="showVineTop && isHandmadeProjects"
      :class="['material-dot-top-button', { 'leather-dots': isLeatherHandmade, 'fabric-dots': isFabricHandmade }]"
      type="button"
      aria-label="回到頁面頂端"
      title="回到頂端"
      @click="scrollToTop"
    >
    <svg viewBox="0 0 62 190" aria-hidden="true">
      <circle class="material-dot dot-one" cx="31" cy="164" r="13" />
      <circle class="material-dot dot-two" cx="18" cy="132" r="11" />
      <circle class="material-dot dot-three" cx="37" cy="101" r="12" />
      <circle class="material-dot dot-four" cx="19" cy="68" r="10" />
      <circle class="material-dot dot-five" cx="36" cy="38" r="11" />
    </svg>
    <span>
      回到頂端
    </span>
  </button>
  <button
      v-else-if="showVineTop"
      :class="['vine-top-button', { 'home-vine-at-bottom': isHome && isAtPageBottom }]"
      type="button"
      aria-label="回到頁面頂端"
      title="回到頂端"
      :style="{ '--vine-progress': vineProgress }"
      @click="scrollToTop"
    >
    <svg viewBox="0 0 82 290" aria-hidden="true">
      <path class="vine-stem" d="M48 280C18 246 67 220 40 187S16 134 47 105 68 53 34 8" />
      <path class="vine-tendril" d="M40 187c-25-5-20-31-3-27 12 3 7 20-5 16M47 105c26 2 27-28 8-29-13 0-12 17 0 17" />
      <g class="vine-leaves">
        <path class="leaf leaf-one" :style="leafStyle(.08)" d="M42 229C29 224 18 210 19 198c15 2 25 13 23 31Z" />
        <path class="leaf leaf-two" :style="leafStyle(.24)" d="M41 187c13-11 29-12 38 0-11 11-27 11-38 0Z" />
        <path class="leaf leaf-three" :style="leafStyle(.4)" d="M35 151c-13-8-20-23-14-36 14 7 20 20 14 36Z" />
        <path class="leaf leaf-four" :style="leafStyle(.57)" d="M46 105c13-10 29-9 37 3-11 10-27 10-37-3Z" />
        <path class="leaf leaf-five" :style="leafStyle(.73)" d="M51 62C37 56 28 42 31 29c16 5 24 18 20 33Z" />
        <path class="leaf leaf-six" :style="leafStyle(.89)" d="M35 24c12-10 27-10 34 1-10 11-25 12-34-1Z" />
        <path class="leaf leaf-action" :style="leafStyle(0)" d="M47 260c-18-4-30-19-28-37 19 5 29 19 28 37Z" />
      </g>
    </svg>
    <span>
      回到頂端
    </span>
  </button>
</Transition>
</template>

<style scoped>
.ambient-light {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}
.site-content {
  position: relative;
  z-index: 1;
}
.pixel-top-button,.material-dot-top-button {
  position: fixed;
  z-index: 8;
  right: clamp(10px,2.5vw,34px);
  bottom: clamp(18px,4vh,42px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  border: 0;
  background: transparent;
  transition: transform .22s ease,filter .22s ease;
}
.pixel-top-button {
  width: 68px;
  color: #648fa0;
  filter: drop-shadow(0 3px 4px rgba(50,87,101,.16));
}
.pixel-top-button svg {
  width: 68px;
  height: 170px;
  overflow: visible;
}
.pixel-top-button .pixel {
  fill: currentColor;
  opacity: 0;
  transform-box: fill-box;
  transform-origin: center;
  animation: pixel-step 3.6s steps(1,end) infinite;
}
.pixel-top-button .pixel-one {
  fill: #537b90;
}
.pixel-top-button .pixel-two,.pixel-top-button .pixel-four {
  fill: #759eac;
  animation-delay: .22s;
}
.pixel-top-button .pixel-three,.pixel-top-button .pixel-five {
  fill: #90b5bd;
  animation-delay: .44s;
}
.pixel-top-button .pixel-four {
  animation-delay: .66s;
}
.pixel-top-button .pixel-five {
  animation-delay: .88s;
}
.pixel-top-button .pixel-six {
  animation-delay: 1.1s;
}
.material-dot-top-button {
  width: 62px;
  color: #7d9ba2;
  filter: drop-shadow(0 3px 4px rgba(78,105,112,.16));
}
.material-dot-top-button svg {
  width: 62px;
  height: 175px;
  overflow: visible;
}
.material-dot {
  stroke: rgba(121,151,162,.55);
  stroke-width: 1.2;
  fill: url(#none);
  transform-box: fill-box;
  transform-origin: center;
  animation: material-dot-pop 3.8s cubic-bezier(.2,.85,.25,1) infinite;
}
.dot-one {
  fill: #b5e1e6;
}
.dot-two {
  fill: #d5c4e4;
  animation-delay: .26s;
}
.dot-three {
  fill: #f1d393;
  animation-delay: .52s;
}
.dot-four {
  fill: #f7f4e7;
  animation-delay: .78s;
}
.dot-five {
  fill: #a9d4de;
  animation-delay: 1.04s;
}
.leather-dots {
  color: #76503a;
  filter: drop-shadow(0 3px 4px rgba(77,46,27,.18));
}
.leather-dots .material-dot {
  fill: #b27a4e;
  stroke: #704329;
  stroke-width: 1.6;
  filter: drop-shadow(1px 2px 1px rgba(69,38,20,.25));
}
.leather-dots .dot-one,.leather-dots .dot-three,.leather-dots .dot-five {
  fill: #c38d5a;
}
.leather-dots .dot-two,.leather-dots .dot-four {
  fill: #9b633e;
}
.fabric-dots {
  color: #bb8279;
  filter: drop-shadow(0 3px 4px rgba(133,83,77,.16));
}
.fabric-dots .material-dot {
  fill: #e6bbb2;
  stroke: #bb8279;
  stroke-width: 1.45;
  filter: drop-shadow(1px 2px 1px rgba(125,73,69,.16));
}
.fabric-dots .dot-one,.fabric-dots .dot-three,.fabric-dots .dot-five {
  fill: #e6bbb2;
}
.fabric-dots .dot-two,.fabric-dots .dot-four {
  fill: #f2d8d1;
}
.pixel-top-button span,.material-dot-top-button span {
  margin-top: -13px;
  padding: 4px 7px;
  border-radius: 999px;
  background: rgba(248,246,240,.86);
  font-size: .65rem;
  letter-spacing: .08em;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(-3px);
  transition: opacity .2s ease,transform .2s ease;
}
.pixel-top-button:hover,.material-dot-top-button:hover {
  transform: translateY(-6px) scale(1.04);
}
.pixel-top-button:hover span,.pixel-top-button:focus-visible span,.material-dot-top-button:hover span,.material-dot-top-button:focus-visible span {
  opacity: 1;
  transform: translateY(0);
}
.pixel-top-button:focus-visible,.material-dot-top-button:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 5px;
  border-radius: 16px;
}
@keyframes pixel-step {
  0%,14% {
    opacity: 0;
    transform: scale(.25);
  }
  15%,78% {
    opacity: 1;
    transform: scale(1);
  }
  79%,100% {
    opacity: 0;
    transform: scale(.25);
  }
}
@keyframes material-dot-pop {
  0%,15% {
    opacity: 0;
    transform: scale(.25);
  }
  30%,79% {
    opacity: 1;
    transform: scale(1);
  }
  95%,100% {
    opacity: 0;
    transform: scale(.6);
  }
}
.vine-top-button {
  position: fixed;
  z-index: 8;
  right: clamp(10px,2.5vw,34px);
  bottom: clamp(18px,4vh,42px);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 82px;
  padding: 0;
  border: 0;
  background: transparent;
  color: #3e6948;
  filter: drop-shadow(0 3px 4px rgba(50,76,40,.16));
  transition: transform .22s ease,filter .22s ease;
}
.vine-top-button svg {
  width: 82px;
  height: 235px;
  overflow: visible;
}
.vine-top-button span {
  margin-top: -17px;
  padding: 4px 7px;
  border-radius: 999px;
  background: rgba(248,246,240,.86);
  font-size: .65rem;
  letter-spacing: .08em;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(-3px);
  transition: opacity .2s ease,transform .2s ease;
}
.vine-stem,.vine-tendril {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.vine-stem {
  stroke-width: 3.5;
  stroke-dasharray: 350;
  stroke-dashoffset: calc(350 - (350 * var(--vine-progress)));
  transition: stroke-dashoffset .14s linear;
}
.vine-tendril {
  stroke-width: 2;
  stroke-dasharray: 95;
  stroke-dashoffset: calc(95 - (95 * var(--vine-progress)));
  transition: stroke-dashoffset .14s linear;
}
.vine-leaves {
  fill: #6f9d5e;
  stroke: #3e6948;
  stroke-width: 1.3;
  stroke-linejoin: round;
}
.leaf {
  transform-box: fill-box;
  transform-origin: center;
  opacity: 0;
  transform: scale(.3);
  transition: opacity .22s ease,transform .28s cubic-bezier(.2,.8,.2,1);
}
.leaf-one {
  transition-delay: 0ms;
}
.leaf-two {
  transition-delay: 45ms;
}
.leaf-three {
  transition-delay: 80ms;
}
.leaf-four {
  transition-delay: 115ms;
}
.leaf-five {
  transition-delay: 150ms;
}
.leaf-six {
  transition-delay: 180ms;
}
.leaf-action {
  fill: #86a96e;
  stroke-width: 1.6;
}
.home-vine-at-bottom .vine-stem {
  animation: home-vine-stem-grow .95s cubic-bezier(.18,.8,.2,1) both;
}
.home-vine-at-bottom .vine-tendril {
  animation: home-vine-tendril-grow .45s .46s ease-out both;
}
.home-vine-at-bottom .leaf {
  animation: home-vine-leaf-grow .42s cubic-bezier(.2,.85,.24,1) both;
}
.home-vine-at-bottom .leaf-one,.home-vine-at-bottom .leaf-action { animation-delay: .32s; }
.home-vine-at-bottom .leaf-two { animation-delay: .42s; }
.home-vine-at-bottom .leaf-three { animation-delay: .52s; }
.home-vine-at-bottom .leaf-four { animation-delay: .62s; }
.home-vine-at-bottom .leaf-five { animation-delay: .72s; }
.home-vine-at-bottom .leaf-six { animation-delay: .82s; }
@keyframes home-vine-stem-grow { from { stroke-dashoffset: 350; } to { stroke-dashoffset: 0; } }
@keyframes home-vine-tendril-grow { from { stroke-dashoffset: 95; opacity: 0; } to { stroke-dashoffset: 0; opacity: 1; } }
@keyframes home-vine-leaf-grow { from { opacity: 0; transform: scale(.18) rotate(-12deg); } to { opacity: 1; transform: scale(1) rotate(0); } }
.vine-top-button:hover {
  transform: translateY(-6px) scale(1.03);
  filter: drop-shadow(0 7px 7px rgba(50,76,40,.22));
}
.vine-top-button:hover span,.vine-top-button:focus-visible span {
  opacity: 1;
  transform: translateY(0);
}
.vine-top-button:focus-visible {
  outline: 2px solid #3e6948;
  outline-offset: 5px;
  border-radius: 18px;
}
.vine-top-enter-active,.vine-top-leave-active {
  transition: opacity .28s ease,transform .28s ease;
}
.vine-top-enter-from,.vine-top-leave-to {
  opacity: 0;
  transform: translateX(26px);
}
.notebook-intro {
  position: fixed;
  inset: 0;
  z-index: 20;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: radial-gradient(circle at 70% 13%,rgba(255,221,151,.34),transparent 28%),#e7dcc8;
  color: #362d20;
}
.paper-grain {
  position: absolute;
  inset: 0;
  opacity: .52;
  background: repeating-linear-gradient(12deg,transparent 0 5px,rgba(103,74,33,.045) 6px 7px),repeating-linear-gradient(102deg,transparent 0 13px,rgba(255,255,255,.2) 14px 15px);
}
.notebook-wrap {
  position: relative;
  width: min(640px,82vw);
  height: min(410px,54vw);
  max-height: 58vh;
  perspective: 1500px;
  filter: drop-shadow(0 25px 25px rgba(69,45,18,.25));
}
.notebook-pages {
  position: absolute;
  inset: 8px 0 8px 9px;
  background: #f6f0df;
  border-radius: 3px 9px 9px 3px;
  box-shadow: inset 0 0 0 1px rgba(88,61,28,.15);
  background-image: repeating-linear-gradient(0deg,transparent 0 28px,rgba(107,84,55,.1) 29px 30px);
  overflow: hidden;
}
.notebook-pages::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(90deg,rgba(83,56,25,.22),rgba(255,255,255,.55),rgba(83,56,25,.17));
}
.page-title {
  position: absolute;
  left: 58%;
  right: 8%;
  top: 28%;
  font-family: var(--serif);
  font-size: clamp(2.05rem,5vw,3.4rem);
  font-weight: 700;
  line-height: .95;
  letter-spacing: -.11em;
  white-space: nowrap;
  color: #4d3924;
}
.page-caption {
  position: absolute;
  left: 58%;
  right: 8%;
  top: 69%;
  font-size: .72rem;
  letter-spacing: .26em;
  color: #876648;
}
.notebook-cover {
  position: absolute;
  inset: 0;
  z-index: 2;
  transform-origin: left center;
  border-radius: 3px 9px 9px 3px;
  background: linear-gradient(115deg,#e4d6ba 0%,#decfb1 30%,#d6c4a4 55%,#eadcc2 100%);
  box-shadow: inset 8px 0 12px rgba(91,57,22,.18),inset -9px 0 14px rgba(255,250,232,.3),3px 5px 6px rgba(65,41,18,.2);
  animation: open-cover 2.75s cubic-bezier(.2,.78,.18,1) forwards;
}
.notebook-cover::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: .32;
  background: repeating-linear-gradient(77deg,transparent 0 3px,rgba(76,45,17,.12) 4px 5px,transparent 6px 10px),radial-gradient(ellipse at 30% 18%,rgba(255,250,222,.65),transparent 36%);
}
.notebook-cover::after {
  content: '';
  position: absolute;
  inset: 18px;
  border: 1px solid rgba(85,50,18,.4);
  border-radius: 3px 6px 6px 3px;
}
.cover-label {
  position: absolute;
  z-index: 1;
  inset: 30% 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #5c4226;
}
.cover-label span {
  font-size: .52rem;
  letter-spacing: .2em;
}
.cover-label strong {
  font-family: var(--serif);
  font-size: clamp(2.2rem,6vw,4.4rem);
  font-weight: 700;
  line-height: .88;
  letter-spacing: -.14em;
  margin: 17px 0;
}
.cover-label i {
  font-family: var(--serif);
  font-size: .9rem;
  letter-spacing: .08em;
}
.lace-border {
  position: absolute;
  z-index: 2;
  left: 31px;
  right: 31px;
  height: 19px;
  opacity: .8;
  background: radial-gradient(circle at 10px 0,transparent 9px,#f4e5c8 9.5px 12px,transparent 12.5px) 0 0/20px 20px repeat-x,radial-gradient(circle at 10px 19px,transparent 9px,#94704a 9.5px 10.5px,transparent 11px) 0 0/20px 20px repeat-x;
  border-top: 1px solid rgba(81,43,16,.35);
}
.lace-top {
  top: 32px;
}
.lace-bottom {
  bottom: 32px;
  transform: rotate(180deg);
}
.bookmark {
  position: absolute;
  z-index: 3;
  width: 22px;
  height: 104px;
  left: 72%;
  top: calc(100% - 3px);
  background: #9a4f3e;
  clip-path: polygon(0 0,100% 0,100% 100%,50% 84%,0 100%);
  animation: bookmark-settle 2.75s ease-out forwards;
}
.skip-intro {
  position: absolute;
  z-index: 4;
  top: 24px;
  right: 24px;
  bottom: auto;
  border: 1px solid rgba(101,69,43,.45);
  background: rgba(248,241,224,.78);
  padding: 10px 14px;
  color: #65452b;
  font-size: .75rem;
  letter-spacing: .1em;
  box-shadow: 0 2px 8px rgba(73,47,22,.1);
}
.notebook-intro-leave-active {
  transition: opacity .45s ease;
}
.notebook-intro-leave-to {
  opacity: 0;
}
@keyframes open-cover {
  0%,30% {
    transform: rotateY(0);
  }
  82%,100% {
    transform: rotateY(-158deg);
  }
}
@keyframes bookmark-settle {
  0%,62% {
    transform: translateY(-35px);
    opacity: 0;
  }
  82%,100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@media (max-width:520px) {
  .notebook-wrap {
    height: 250px;
    width: 88vw;
  }
  .cover-label {
    inset: 28% 15%;
  }
  .lace-border {
    left: 22px;
    right: 22px;
  }
  .page-caption {
    display: none;
  }
  .skip-intro {
    top: 16px;
    right: 16px;
  }
}
@media (prefers-reduced-motion:reduce) {
  .notebook-cover,.bookmark {
    animation: none;
  }
  .notebook-cover {
    transform: rotateY(-158deg);
  }
  .notebook-intro {
    display: none;
  }
}
.ambient-light::before {
  content: '';
  position: absolute;
  width: 150vw;
  height: 145vh;
  top: -28vh;
  right: -42vw;
  opacity: .96;
  background: linear-gradient(112deg,transparent 0 18%,rgba(255,247,195,.22) 18.2% 30%,transparent 30.4% 38%,rgba(255,219,112,.34) 38.2% 53%,transparent 53.4% 62%,rgba(255,241,182,.26) 62.2% 76%,transparent 76.4%),repeating-linear-gradient(90deg,transparent 0 20%,rgba(96,69,28,.17) 20.15% 20.8%,transparent 21.1% 40%);
  filter: blur(.35px);
  transform: skewX(-8deg);
  -webkit-mask-image: linear-gradient(90deg,transparent 0 30%,rgba(0,0,0,.22) 44%,#000 63%);
  mask-image: linear-gradient(90deg,transparent 0 30%,rgba(0,0,0,.22) 44%,#000 63%);
  animation: ambient-drift 20s ease-in-out infinite alternate;
}
.ambient-light::after {
  content: '';
  position: absolute;
  width: 75vw;
  height: 90vh;
  bottom: -30vh;
  left: -23vw;
  opacity: .7;
  background: radial-gradient(ellipse,rgba(255,187,79,.28),rgba(255,218,144,.14) 38%,transparent 70%);
  filter: blur(18px);
  animation: ambient-drift 25s ease-in-out infinite alternate-reverse;
}
.light-fragment {
  position: absolute;
  left: var(--x);
  top: var(--y);
  transform: translate(-50%,-50%) rotate(var(--rotation));
}
.petal {
  width: var(--size);
  height: calc(var(--size) * 1.1);
  clip-path: polygon(50% 100%,18% 71%,4% 39%,12% 15%,32% 10%,50% 23%,68% 10%,88% 15%,96% 39%,82% 71%);
  background: linear-gradient(140deg,rgba(255,253,248,.98),rgba(255,202,211,.95) 50%,rgba(228,142,169,.82));
  box-shadow: 0 3px 8px rgba(171,90,116,.2);
  animation: petal-fall 1.8s cubic-bezier(.16,.63,.34,1) forwards;
}
.petal::after {
  content: '';
  position: absolute;
  width: 66%;
  height: 1px;
  top: 51%;
  left: 17%;
  background: rgba(184,105,128,.28);
  transform: rotate(-20deg);
  transform-origin: left;
}
.crystal {
  width: var(--size);
  height: calc(var(--size) * 1.5);
  clip-path: polygon(50% 0,100% 34%,78% 100%,23% 88%,0 39%);
  background: linear-gradient(135deg,rgba(255,255,255,.96) 0 18%,rgba(186,225,233,.95) 34%,rgba(161,179,220,.9) 67%,rgba(243,190,205,.88));
  box-shadow: 0 0 8px rgba(130,193,221,.65),0 0 17px rgba(221,176,219,.42);
  animation: crystal-drift 1.45s ease-out forwards;
}
.crystal::after {
  content: '';
  position: absolute;
  inset: 14% 26% 18% 29%;
  background: linear-gradient(130deg,rgba(255,255,255,.86),transparent 62%);
  clip-path: polygon(20% 0,100% 20%,54% 100%,0 45%);
}
@keyframes ambient-drift {
  from {
    transform: translate3d(-2%,0,0) skewX(-8deg);
    opacity: .64;
  }
  to {
    transform: translate3d(3%,3%,0) skewX(-8deg);
    opacity: .94;
  }
}
@keyframes petal-fall {
  0% {
    opacity: 0;
    transform: translate(-50%,-50%) rotate(var(--rotation)) scale(.28);
  }
  15% {
    opacity: .96;
  }
  65% {
    opacity: .8;
  }
  100% {
    opacity: 0;
    transform: translate(calc(-50% + var(--drift-x)),calc(-50% + var(--drift-y))) rotate(calc(var(--rotation) + 210deg)) scale(.82);
  }
}
@keyframes crystal-drift {
  0% {
    opacity: 0;
    transform: translate(-50%,-50%) rotate(var(--rotation)) scale(.3);
  }
  18% {
    opacity: .94;
  }
  100% {
    opacity: 0;
    transform: translate(calc(-50% + var(--drift-x)),calc(-50% + var(--drift-y))) rotate(calc(var(--rotation) + 125deg)) scale(.72);
  }
}
@media (prefers-reduced-motion:reduce) {
  .ambient-light::before,.ambient-light::after {
    animation: none;
  }
}
/* 入場筆記本的細節覆寫 */
.skip-intro {
  isolation: isolate;
  overflow: hidden;
  border: 1px solid #6d4426;
  border-radius: 7px 9px 8px 7px;
  background: linear-gradient(135deg,#a96f43,#8d5733);
  padding: 11px 16px;
  color: #fff7e9;
  font-family: var(--serif);
  letter-spacing: .12em;
  box-shadow: inset 0 1px 0 rgba(255,241,211,.28),inset 0 -4px 6px rgba(69,35,16,.2),0 3px 9px rgba(73,47,22,.2);
  text-shadow: 0 1px 1px rgba(54,28,12,.38);
}
.skip-intro::before {
  content: '';
  position: absolute;
  z-index: -1;
  inset: 0;
  opacity: .3;
  background: repeating-linear-gradient(78deg,transparent 0 3px,rgba(67,32,14,.36) 4px 5px,transparent 6px 10px);
}
.skip-intro::after {
  content: '';
  position: absolute;
  z-index: -1;
  inset: 4px;
  border: 1px dashed rgba(255,239,209,.72);
  border-radius: 4px 6px 5px 4px;
}
.skip-intro:hover {
  background: linear-gradient(135deg,#b77b4d,#98603a);
}
.skip-intro:focus-visible {
  outline: 2px solid #fff7e9;
  outline-offset: 3px;
}
@media (max-width:520px) {
  .notebook-wrap {
    width: min(310px,78vw);
    height: min(450px,calc(100vh - 110px));
    max-height: none;
  }
  .notebook-pages {
    inset: 6px 0 6px 6px;
  }
  .page-title {
    left: 58%;
    right: 6%;
    top: 30%;
    font-size: clamp(1.75rem,9vw,2.4rem);
  }
  .page-caption {
    left: 58%;
    right: 6%;
    top: 57%;
    font-size: .62rem;
    letter-spacing: .18em;
  }
  .cover-label {
    inset: 31% 12%;
  }
  .lace-border {
    left: 20px;
    right: 20px;
  }
  .lace-top {
    top: 26px;
  }
  .lace-bottom {
    bottom: 26px;
  }
  .bookmark {
    height: 78px;
    left: 73%;
  }
  .skip-intro {
    top: 16px;
    right: 16px;
    padding: 10px 13px;
  }
}
@media (max-width:520px) {
  .page-title {
    left: 62%;
    right: 11%;
    font-size: clamp(1.65rem,7.5vw,2rem);
    letter-spacing: -.13em;
  }
  .page-caption {
    left: 62%;
    right: 11%;
  }
}
.page-caption {
  top: calc(270px - .8em);
  line-height: 1;
}
@media (max-width:520px) {
  .page-caption {
    display: block;
    top: calc(270px - .8em);
  }
}
@media (max-width:520px) {
  .page-title {
    left: 60%;
    right: auto;
    top: calc(150px - .78em);
    width: calc(40% - 24px);
    font-size: clamp(1.4rem,7vw,1.65rem);
    line-height: 30px;
    letter-spacing: -.1em;
  }
  .page-caption {
    left: 60%;
    right: auto;
    top: calc(240px - .8em);
    width: calc(40% - 24px);
    font-size: .62rem;
    line-height: 30px;
    letter-spacing: .1em;
    white-space: nowrap;
  }
}
@media (max-width:520px) {
  .page-title {
    display: grid;
    grid-template-rows: 30px 30px;
  }
  .page-title>span {
    display: block;
    height: 30px;
  }
  .page-title>span:first-child {
    transform: translateY(5px);
  }
  .page-title>span:last-child {
    transform: translateY(10px);
  }
  .page-caption {
    transform: translateY(9px);
  }
}
@media (max-width:520px) {
  .page-title {
    left: 50%;
    width: calc(50% - 24px);
  }
  .page-caption {
    left: 50%;
    top: calc(210px - .8em);
    width: calc(50% - 24px);
  }
}
/* 桌面版內頁保留右側邊距，並將中英文標題分行，避免英文文字溢出紙張。 */
@media (min-width:521px) {
  .page-title {
    left: 58%;
    right: 10%;
    display: grid;
    gap: .08em;
    font-size: clamp(2rem,4vw,3.05rem);
    line-height: .9;
    white-space: normal;
  }
  .page-title>span {
    display: block;
  }
  .page-caption {
    left: 58%;
    right: 10%;
  }
}
@media (max-width:620px) {
  .vine-top-button,.pixel-top-button,.material-dot-top-button {
    right: 7px;
    bottom: 18px;
  }
  .vine-top-button {
    width: 61px;
  }
  .vine-top-button svg {
    width: 61px;
    height: 170px;
  }
  .pixel-top-button {
    width: 54px;
  }
  .pixel-top-button svg {
    width: 54px;
    height: 132px;
  }
  .material-dot-top-button {
    width: 52px;
  }
  .material-dot-top-button svg {
    width: 52px;
    height: 142px;
  }
  .vine-top-button span,.pixel-top-button span,.material-dot-top-button span {
    display: none;
  }
}
@media (prefers-reduced-motion:reduce) {
  .vine-top-button,.vine-top-button span,.vine-stem,.vine-tendril,.leaf,.pixel-top-button,.pixel-top-button .pixel,.material-dot-top-button,.material-dot-top-button span,.material-dot-top-button .material-dot {
    transition: none;
    animation: none;
  }
}

</style>
