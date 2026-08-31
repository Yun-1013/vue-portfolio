<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import '../assets/handmade-buttons.css';
import ProjectCard from '../components/ProjectCard.vue';
import { crystalFlowerLevels, projects } from '../data/projects';
const props = defineProps({
  type: String
});
const isWeb = computed(() => props.type === 'web');
const handmadeCategory = ref('crystal-flower');
const crystalFlowerLevel = ref('all');
const displayedProjects = computed(() => {
  if (isWeb.value) return projects.filter(project => project.type === 'web');
  return projects.filter(project => project.type === 'handmade' && project.category === handmadeCategory.value && (handmadeCategory.value === 'leather' || crystalFlowerLevel.value === 'all' || project.level === crystalFlowerLevel.value));
});
const selectCategory = category => {
  handmadeCategory.value = category;
  crystalFlowerLevel.value = 'all';
};
watch(() => props.type, () => selectCategory('crystal-flower'));
watch(handmadeCategory, category => {
  window.dispatchEvent(new CustomEvent('handmade-category-change', {
    detail: category
  }));
});
onMounted(() => {
  window.dispatchEvent(new CustomEvent('handmade-category-change', {
    detail: handmadeCategory.value
  }));
});
</script>
<template>
<section class="page">
  <p class="eyebrow">
    {{ isWeb ? 'FRONTEND PRACTICE' : 'MADE BY HAND' }}
  </p>
  <h1>
    {{ isWeb ? '網頁作品' : '手作日常' }}
  </h1>
  <p class="lead">
    {{ isWeb ? '每一次練習，都是把想法變成畫面的過程。' : '在慢慢製作的時間裡，收藏生活的溫度。' }}
  </p>
  <div v-if="!isWeb" class="filters">
    <div class="memory-jar" aria-hidden="true">
      <span class="jar-lid">
      </span>
      <span class="jar-body">
        <i class="jar-spark spark-blue">
        </i>
        <i class="jar-spark spark-lilac">
        </i>
        <i class="jar-spark spark-gold">
        </i>
        <i class="jar-spark spark-white">
        </i>
      </span>
      <i class="incoming-spark incoming-one">
      </i>
      <i class="incoming-spark incoming-two">
      </i>
      <i class="incoming-spark incoming-three">
      </i>
    </div>
    <div class="category-tabs">
      <button class="crystal-button" :class="{ active: handmadeCategory === 'crystal-flower' }" @click="selectCategory('crystal-flower')">
        水晶花
      </button>
      <button class="leather-button" :class="{ active: handmadeCategory === 'leather' }" @click="selectCategory('leather')">
        皮件
      </button>
    </div>
    <div v-if="handmadeCategory === 'crystal-flower'" class="level-tabs" aria-label="水晶花分類">
      <button v-for="level in crystalFlowerLevels" :key="level.id" :class="{ active: crystalFlowerLevel === level.id }" @click="crystalFlowerLevel = level.id">
        {{ level.label }}
      </button>
    </div>
  </div>
  <p v-if="!displayedProjects.length" class="empty">
    這個分類的作品正在整理中，敬請期待。
  </p>
  <div v-else class="project-grid">
    <ProjectCard v-for="project in displayedProjects" :key="project.id" :project="project" />
  </div>
</section>
</template>
<style scoped>
.page {
  width: min(1180px,calc(100% - 48px));
  margin: 0 auto;
  padding: 72px 0 130px;
  position: relative;
}
.eyebrow {
  font-size: .69rem;
  letter-spacing: .16em;
  color: var(--terracotta);
  font-weight: 700;
  margin: 0 0 18px;
}
h1 {
  font-family: var(--serif);
  font-size: clamp(3rem,6vw,5rem);
  font-weight: 500;
  letter-spacing: -.07em;
  margin: 0;
}
.lead {
  color: var(--muted);
  margin: 18px 0 45px;
}
.title-garden {
  position: absolute;
  top: 35px;
  right: 2%;
  width: 270px;
  height: 154px;
  pointer-events: none;
}
.stem {
  position: absolute;
  bottom: 4px;
  width: 2px;
  border-radius: 4px;
  background: linear-gradient(#718b69,#3f604c);
  transform-origin: bottom;
}
.stem-one {
  height: 97px;
  left: 126px;
  transform: rotate(-14deg);
}
.stem-two {
  height: 74px;
  left: 172px;
  transform: rotate(19deg);
}
.stem-three {
  height: 61px;
  left: 78px;
  transform: rotate(-30deg);
}
.leaf {
  position: absolute;
  width: 30px;
  height: 15px;
  border-radius: 100% 0 100% 0;
  background: linear-gradient(135deg,#b2cda7,#668761);
  box-shadow: inset 1px 1px 0 #e2eed9;
}
.leaf-one {
  bottom: 51px;
  left: 94px;
  transform: rotate(-25deg);
}
.leaf-two {
  bottom: 38px;
  left: 143px;
  transform: rotate(28deg);
}
.leaf-three {
  bottom: 27px;
  left: 55px;
  transform: rotate(-47deg);
}
.crystal-bloom {
  position: absolute;
  width: 43px;
  height: 43px;
  clip-path: polygon(50% 0,69% 25%,100% 30%,78% 56%,85% 90%,53% 75%,25% 100%,26% 62%,0 41%,31% 28%);
  background: linear-gradient(135deg,rgba(255,255,255,.98),rgba(232,186,206,.92) 42%,rgba(154,188,204,.92) 74%,rgba(244,210,151,.86));
  filter: drop-shadow(0 4px 3px rgba(93,105,108,.17));
  animation: bloom-glow 5s ease-in-out infinite;
}
.crystal-bloom::after {
  content: '';
  position: absolute;
  inset: 18%;
  background: linear-gradient(140deg,rgba(255,255,255,.9),transparent 56%);
  clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%);
}
.bloom-one {
  bottom: 80px;
  left: 92px;
  transform: rotate(-7deg);
}
.bloom-two {
  bottom: 56px;
  left: 157px;
  width: 32px;
  height: 32px;
  animation-delay: -1.8s;
}
.bloom-three {
  bottom: 43px;
  left: 36px;
  width: 28px;
  height: 28px;
  animation-delay: -3.2s;
}
.pollen {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #e9b955;
  box-shadow: 0 0 8px #f3d184;
  animation: pollen-float 4.5s ease-in-out infinite;
}
.pollen-one {
  top: 16px;
  left: 121px;
}
.pollen-two {
  top: 52px;
  left: 224px;
  animation-delay: -1.4s;
}
.pollen-three {
  top: 5px;
  left: 191px;
  width: 3px;
  height: 3px;
  animation-delay: -3s;
}
@keyframes bloom-glow {
  0%,100% {
    filter: drop-shadow(0 4px 3px rgba(93,105,108,.17));
    transform: translateY(0) rotate(-7deg);
  }
  50% {
    filter: drop-shadow(0 5px 8px rgba(161,193,209,.45));
    transform: translateY(-3px) rotate(-3deg);
  }
}
@keyframes pollen-float {
  0%,100% {
    opacity: .3;
    transform: translateY(4px);
  }
  50% {
    opacity: 1;
    transform: translateY(-8px);
  }
}
.filters {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 20px 0;
  margin-bottom: 55px;
}
.category-tabs,.level-tabs {
  display: flex;
  gap: 9px;
  flex-wrap: wrap;
}
.category-tabs {
  margin-bottom: 15px;
}
.filters button {
  border: 1px solid var(--line);
  background: transparent;
  padding: 9px 14px;
  color: var(--muted);
  font-family: inherit;
  font-size: .78rem;
  transition: .2s;
}
.filters button.active,.filters button:hover {
  background: var(--ink);
  border-color: var(--ink);
  color: #fff;
}
.category-tabs button {
  font-family: var(--serif);
  font-size: 1.1rem;
  padding: 9px 18px;
}
.project-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 55px 24px;
}
.empty {
  color: var(--muted);
  padding: 35px 0;
  line-height: 1.8;
}
@media (prefers-reduced-motion:reduce) {
  .crystal-bloom,.pollen {
    animation: none;
  }
}
@media (max-width:760px) {
  .page {
    width: calc(100% - 40px);
    padding: 45px 0 85px;
  }
  .title-garden {
    top: 119px;
    right: -11px;
    transform: scale(.72);
    transform-origin: top right;
  }
  .lead {
    max-width: 55%;
    min-height: 65px;
  }
  .project-grid {
    grid-template-columns: repeat(2,1fr);
    gap: 35px 16px;
  }
}
@media (max-width:430px) {
  .title-garden {
    opacity: .72;
    right: -42px;
    top: 120px;
    transform: scale(.58);
  }
  .lead {
    max-width: 65%;
  }
  .project-grid {
    grid-template-columns: 1fr;
  }
  .filters {
    margin-bottom: 38px;
  }
}
.filters {
  position: relative;
  margin-top: 118px;
}
.title-garden {
  position: absolute;
  z-index: 1;
  right: 2%;
  top: -154px;
  width: 270px;
  height: 160px;
  pointer-events: none;
}
.category-tabs,.level-tabs {
  position: relative;
  z-index: 2;
}
@media (max-width:760px) {
  .filters {
    margin-top: 96px;
  }
  .title-garden {
    width: 210px;
    height: 125px;
    top: -120px;
    right: -5px;
    transform: none;
  }
  .lead {
    max-width: 62%;
    min-height: 58px;
  }
}
@media (max-width:430px) {
  .filters {
    margin-top: 78px;
  }
  .title-garden {
    width: 175px;
    height: 105px;
    top: -101px;
    right: -20px;
    transform: none;
    opacity: 1;
  }
  .lead {
    max-width: 64%;
    min-height: 58px;
  }
}
.filters {
  border-top: 0;
  overflow: visible;
}
.filters::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: repeating-linear-gradient(90deg,#9b8066 0 5px,transparent 5px 11px);
  transform: scaleX(0);
  transform-origin: left;
  animation: stitch-reveal 1.25s cubic-bezier(.2,.75,.3,1) forwards;
}
.filters::after {
  content: none;
}
.crystal-sparkles {
  position: absolute;
  top: -15px;
  right: 5%;
  width: 104px;
  height: 46px;
  pointer-events: none;
}
.crystal-shard {
  position: absolute;
  display: block;
  overflow: hidden;
  clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%);
  filter: drop-shadow(0 2px 3px rgba(91,107,121,.36));
  animation: shard-drift 4.8s ease-in-out infinite;
}
.crystal-shard::after {
  content: "";
  position: absolute;
  inset: -35% -12%;
  background: linear-gradient(112deg,transparent 38%,rgba(255,255,255,.92) 49%,transparent 59%);
  transform: translateX(-70%);
  animation: shard-shine 5.6s ease-in-out infinite;
}
.shard-one {
  top: 1px;
  left: 58px;
  width: 22px;
  height: 30px;
  background: linear-gradient(135deg,#fffef9 7%,#c8e6ec 38%,#86b5c8 70%,#efcfae);
  animation-delay: -1.2s;
}
.shard-two {
  top: 6px;
  left: 22px;
  width: 15px;
  height: 20px;
  background: linear-gradient(135deg,#fffdf9 8%,#d8cdea 43%,#a99acb 75%,#f0d3ad);
  animation-delay: -2.8s;
}
.shard-three {
  top: 7px;
  left: 88px;
  width: 13px;
  height: 17px;
  background: linear-gradient(135deg,#fffef9 8%,#f1ddb1 45%,#d4a96d 76%,#b8d9dc);
  animation-delay: -4s;
}
.shard-two::after {
  animation-delay: -2.2s;
}
.shard-three::after {
  animation-delay: -3.6s;
}
.filters .category-tabs {
  padding-top: 1px;
}
@keyframes stitch-reveal {
  to {
    transform: scaleX(1);
  }
}
@keyframes crystal-twinkle {
  0%,100% {
    opacity: .48;
    transform: rotate(0deg) scale(.82);
  }
  50% {
    opacity: 1;
    transform: rotate(45deg) scale(1.12);
  }
}
@media (prefers-reduced-motion:reduce) {
  .filters::before,.filters::after {
    animation: none;
  }
  .filters::before {
    transform: scaleX(1);
  }
}
@media (max-width:760px) {
  .filters::after {
    right: 5%;
    transform: scale(.8);
  }
}
@media (max-width:430px) {
  .filters::after {
    right: 3%;
    transform: scale(.68);
  }
}
.filters {
  margin-top: 0;
}
.filters .category-tabs {
  padding-top: 9px;
}
@keyframes shard-drift {
  0%,100% {
    opacity: .72;
    transform: translateY(2px) rotate(-7deg) scale(.92);
  }
  50% {
    opacity: 1;
    transform: translateY(-4px) rotate(8deg) scale(1.08);
  }
}
@keyframes shard-shine {
  0%,56%,100% {
    opacity: 0;
    transform: translateX(-72%);
  }
  68% {
    opacity: 1;
    transform: translateX(72%);
  }
}
@media (prefers-reduced-motion:reduce) {
  .crystal-shard,.crystal-shard::after {
    animation: none;
  }
}
@media (max-width:760px) {
  .filters {
    margin-top: 0;
  }
  .crystal-sparkles {
    right: 2%;
    transform: scale(.85);
    transform-origin: top right;
  }
}
@media (max-width:430px) {
  .filters {
    margin-top: 0;
  }
  .crystal-sparkles {
    right: -2%;
    transform: scale(.72);
    transform-origin: top right;
  }
}
.memory-jar {
  position: absolute;
  z-index: 3;
  right: 6%;
  top: -76px;
  width: 62px;
  height: 76px;
  pointer-events: none;
}
.jar-lid {
  position: absolute;
  z-index: 2;
  top: 3px;
  left: 8px;
  width: 46px;
  height: 10px;
  border: 1px solid rgba(137,119,96,.58);
  border-radius: 4px 4px 3px 3px;
  background: linear-gradient(180deg,#f5e8ca,#b99a78 48%,#e7d2af);
  box-shadow: 0 2px 2px rgba(74,60,47,.2);
}
.jar-lid::before {
  content: "";
  position: absolute;
  top: -4px;
  left: 5px;
  width: 34px;
  height: 5px;
  border-radius: 3px 3px 0 0;
  background: linear-gradient(180deg,#e9d5b2,#a98561);
}
.jar-body {
  position: absolute;
  bottom: 0;
  left: 3px;
  width: 56px;
  height: 65px;
  overflow: hidden;
  border: 1.5px solid rgba(202,222,224,.9);
  border-radius: 13px 13px 17px 17px / 11px 11px 15px 15px;
  background: linear-gradient(112deg,rgba(255,255,255,.78),rgba(205,229,232,.27) 38%,rgba(189,178,212,.22) 74%,rgba(255,255,255,.56));
  box-shadow: inset 5px 0 8px rgba(255,255,255,.56),inset -5px 0 9px rgba(129,164,176,.16),0 2px 4px rgba(79,100,106,.24);
}
.jar-body::before {
  content: "";
  position: absolute;
  inset: 8px auto 9px 6px;
  width: 7px;
  border-radius: 8px;
  background: rgba(255,255,255,.66);
  filter: blur(.3px);
}
.jar-body::after {
  content: "";
  position: absolute;
  left: 4px;
  right: 4px;
  bottom: 4px;
  height: 18px;
  border-radius: 50%;
  background: radial-gradient(ellipse,rgba(235,219,174,.34),rgba(162,205,216,.2) 48%,transparent 73%);
  filter: blur(2px);
}
.jar-spark {
  position: absolute;
  z-index: 1;
  display: block;
  clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%);
  filter: drop-shadow(0 0 3px currentColor);
  animation: jar-twinkle 4.4s ease-in-out infinite;
}
.spark-blue {
  top: 27px;
  left: 15px;
  width: 10px;
  height: 14px;
  color: #82c7d7;
  background: linear-gradient(135deg,#fff,#a7dfe8 45%,#5ca5bf);
  animation-delay: -.8s;
}
.spark-lilac {
  top: 17px;
  left: 31px;
  width: 8px;
  height: 11px;
  color: #b8a0d1;
  background: linear-gradient(135deg,#fff,#d9cced 47%,#9a80b9);
  animation-delay: -2.2s;
}
.spark-gold {
  top: 38px;
  left: 32px;
  width: 9px;
  height: 12px;
  color: #d9ae68;
  background: linear-gradient(135deg,#fffdf5,#f0d297 48%,#c59148);
  animation-delay: -3.4s;
}
.spark-white {
  top: 33px;
  left: 43px;
  width: 5px;
  height: 7px;
  color: #fff8db;
  background: #fffdf4;
  animation-delay: -1.6s;
}
@keyframes jar-twinkle {
  0%,100% {
    opacity: .55;
    transform: translateY(2px) rotate(0deg) scale(.82);
  }
  48% {
    opacity: 1;
    transform: translateY(-3px) rotate(45deg) scale(1.13);
  }
  66% {
    opacity: .78;
    transform: translateY(-1px) rotate(78deg) scale(.96);
  }
}
@media (prefers-reduced-motion:reduce) {
  .jar-spark {
    animation: none;
  }
}
@media (max-width:760px) {
  .memory-jar {
    right: 3%;
    transform: scale(.88);
    transform-origin: bottom right;
  }
}
@media (max-width:430px) {
  .memory-jar {
    right: -1%;
    transform: scale(.76);
    transform-origin: bottom right;
  }
}
.memory-jar {
  width: 76px;
  height: 88px;
  top: -88px;
}
.jar-body {
  left: 7px;
  bottom: 0;
  transform: rotate(-7deg);
  transform-origin: 50% 100%;
  border-color: rgba(213,233,235,.96);
  background: linear-gradient(112deg,rgba(255,255,255,.84),rgba(205,229,232,.3) 38%,rgba(189,178,212,.25) 74%,rgba(255,255,255,.62));
  box-shadow: inset 5px 0 8px rgba(255,255,255,.65),inset -5px 0 9px rgba(129,164,176,.19),0 4px 6px rgba(79,100,106,.25);
}
.jar-lid {
  top: 0;
  left: 18px;
  transform: rotate(-22deg);
  transform-origin: 12% 100%;
  box-shadow: 0 3px 3px rgba(74,60,47,.24);
}
.incoming-spark {
  position: absolute;
  z-index: 4;
  display: block;
  clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%);
  filter: drop-shadow(0 0 4px currentColor);
  animation: drift-into-jar 5.8s cubic-bezier(.35,.05,.28,1) infinite;
}
.incoming-one {
  top: 4px;
  left: 58px;
  width: 9px;
  height: 12px;
  color: #9bd7e3;
  background: linear-gradient(135deg,#fff,#b9e8ef 46%,#6eafc1);
  animation-delay: -.7s;
}
.incoming-two {
  top: 17px;
  left: 67px;
  width: 7px;
  height: 10px;
  color: #d0b9e4;
  background: linear-gradient(135deg,#fff,#e4d8f0 48%,#aa8ec4);
  animation-delay: -2.7s;
}
.incoming-three {
  top: -5px;
  left: 49px;
  width: 6px;
  height: 8px;
  color: #ecd087;
  background: linear-gradient(135deg,#fffdf5,#f5dda0 47%,#ce9d54);
  animation-delay: -4.4s;
}
@keyframes drift-into-jar {
  0% {
    opacity: 0;
    transform: translate(19px,-18px) rotate(0deg) scale(.55);
  }
  18% {
    opacity: 1;
  }
  72% {
    opacity: 1;
    transform: translate(-23px,29px) rotate(132deg) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-28px,35px) rotate(180deg) scale(.5);
  }
}
@media (prefers-reduced-motion:reduce) {
  .incoming-spark {
    animation: none;
    opacity: .7;
  }
}
.memory-jar {
  width: 98px;
  height: 112px;
  top: -112px;
  right: 5%;
}
.jar-body {
  left: 9px;
  width: 76px;
  height: 92px;
  transform: rotate(-4deg);
  transform-origin: 50% 100%;
  border-radius: 17px 17px 22px 22px / 15px 15px 20px 20px;
}
.jar-neck {
  position: absolute;
  z-index: 1;
  top: 15px;
  left: 30px;
  width: 40px;
  height: 18px;
  border: 1.5px solid rgba(207,230,233,.94);
  border-bottom: 0;
  border-radius: 7px 7px 0 0;
  background: linear-gradient(90deg,rgba(255,255,255,.7),rgba(193,221,226,.25),rgba(255,255,255,.54));
  box-shadow: inset 4px 0 5px rgba(255,255,255,.48);
  transform: rotate(-4deg);
  transform-origin: 50% 100%;
}
.jar-lid {
  top: 4px;
  left: 21px;
  width: 56px;
  height: 11px;
  transform: rotate(-14deg);
  transform-origin: 12% 100%;
  border-color: rgba(137,119,96,.62);
}
.jar-lid::before {
  left: 6px;
  width: 42px;
}
.incoming-one {
  top: 2px;
  left: -10px;
}
.incoming-two {
  top: 22px;
  left: -2px;
}
.incoming-three {
  top: -8px;
  left: 10px;
}
.incoming-spark {
  animation-name: drift-into-larger-jar;
}
@keyframes drift-into-larger-jar {
  0% {
    opacity: 0;
    transform: translate(-14px,-14px) rotate(0deg) scale(.56);
  }
  18% {
    opacity: 1;
  }
  72% {
    opacity: 1;
    transform: translate(46px,37px) rotate(132deg) scale(1.1);
  }
  100% {
    opacity: 0;
    transform: translate(51px,45px) rotate(180deg) scale(.5);
  }
}
@media (max-width:760px) {
  .memory-jar {
    right: 1%;
    transform: scale(.76);
    transform-origin: bottom right;
  }
}
@media (max-width:430px) {
  .memory-jar {
    right: -6%;
    transform: scale(.64);
    transform-origin: bottom right;
  }
}
.memory-jar {
  top: -128px;
}
.jar-body {
  transform: rotate(6deg);
  transform-origin: 50% 100%;
}
.jar-lid {
  top: 15px;
  left: 25px;
  transform: rotate(-22deg);
  transform-origin: 9% 100%;
  width: 58px;
  height: 12px;
}
.jar-lid::before {
  width: 44px;
}
.spark-blue {
  top: 31px;
  left: 16px;
  width: 14px;
  height: 18px;
}
.spark-lilac {
  top: 17px;
  left: 37px;
  width: 12px;
  height: 16px;
}
.spark-gold {
  top: 46px;
  left: 39px;
  width: 13px;
  height: 17px;
}
.spark-white {
  top: 35px;
  left: 57px;
  width: 8px;
  height: 11px;
}
.incoming-one {
  width: 11px;
  height: 15px;
}
.incoming-two {
  width: 9px;
  height: 13px;
}
.incoming-three {
  width: 8px;
  height: 11px;
}
.jar-body {
  transform: rotate(-5deg);
}
.jar-lid {
  top: 2px;
  left: 19px;
  transform: rotate(20deg);
  transform-origin: 100% 50%;
  box-shadow: 0 4px 5px rgba(74,60,47,.22);
}
.jar-lid::before {
  left: 7px;
}

</style>
