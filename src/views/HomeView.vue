<script setup>
import FeaturedCarousel from '../components/FeaturedCarousel.vue';
import { projects } from '../data/projects';
const webFeatured = projects.filter(project => project.type === 'web').slice(0, 6);
const handmadeFeatured = projects.filter(project => project.type === 'handmade').slice(0, 6);
</script>
<template>
<section class="hero page-width">
  <div class="hero-copy">
    <p class="eyebrow">
      留光 · LUMEN
    </p>
    <h1>
      把喜歡的事，
      <br>
      <em>
        慢慢做成作品。
      </em>
    </h1>
    <p class="intro">
      留光·LUMEN 是我的創作角落，收藏水晶花、皮件，以及前端網頁設計的學習足跡。願每一件作品，都留下一點溫柔的光。
    </p>
    <a href="#work" class="button">
      看看我的作品
      <span>
        ↓
      </span>
    </a>
  </div>
  <div class="hero-image">
    <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1100&q=85" alt="創作工作桌">
    <span class="scribble">
      make
      <br>
      with light
    </span>
  </div>
</section>
<section class="about page-width">
  <p class="eyebrow">
    ABOUT LIUGUANG
  </p>
  <div>
    <h2>
      以網頁記錄想法，
      <br>
      以手作留住光景。
    </h2>
    <p>
      我喜歡觀察生活中細微而美好的事物，並透過設計把它們轉化成可以被看見、被使用的作品。目前持續探索 Vue、互動設計、水晶花與皮件創作。
    </p>
  </div>
</section>
<section id="work" class="categories page-width">
  <RouterLink to="/web-projects" class="category web">
    <span>
      01 / FRONTEND
    </span>
    <h2>
      網頁
      <br>
      <em>
        作品集
      </em>
    </h2>
    <b>
      探索作品 ↗
    </b>
  </RouterLink>
  <RouterLink to="/handmade" class="category hand">
    <span>
      02 / HANDMADE
    </span>
    <h2>
      手作
      <br>
      <em>
        日常
      </em>
    </h2>
    <b>
      探索作品 ↗
    </b>
  </RouterLink>
</section>
<section class="featured page-width">
  <FeaturedCarousel :projects="webFeatured" eyebrow="SELECTED WEB WORKS" title="網頁精選" to="/web-projects" />
  <FeaturedCarousel :projects="handmadeFeatured" eyebrow="SELECTED HANDMADE" title="手作精選" to="/handmade" />
</section>
<section id="contact" class="contact">
  <div class="contact-frame page-width">
    <p class="contact-page-label">
      A PAGE FROM THE NOTEBOOK
    </p>
    <div class="contact-inner">
      <div class="contact-copy-block">
        <p class="eyebrow">
          A SMALL NOTE FROM LUMEN
        </p>
        <h2>
          一起聊聊創作吧。
        </h2>
        <p class="contact-copy">
          這張小收據，記下留光正在做的作品，也留了一點位置給新的想法與合作邀約。
        </p>
      </div>
      <div class="contact-receipt" aria-label="留光聯絡方式">
        <div class="receipt-head">
          <span>留光 · LUMEN</span>
          <span>CREATIVE NOTES</span>
        </div>
        <p class="receipt-title">
          今日的創作清單
        </p>
        <p class="receipt-date">
          WEB · HANDMADE · EVERYDAY LIGHT
        </p>
        <div class="receipt-links">
          <a href="mailto:hello@example.com">
            <span>EMAIL</span>
            <b>hello@example.com ↗</b>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61573156125211" target="_blank" rel="noopener noreferrer">
            <span>FACEBOOK</span>
            <b>Facebook ↗</b>
          </a>
          <a href="https://www.instagram.com/chus_lumen/" target="_blank" rel="noopener noreferrer">
            <span>INSTAGRAM</span>
            <b>@chus_lumen ↗</b>
          </a>
        </div>
        <p class="receipt-signoff">
          願每一個想法，<br>都留下一點溫柔的光。
        </p>
      </div>
    </div>
  </div>
</section>
</template>
<style scoped>
.page-width {
  width: min(1180px,calc(100% - 48px));
  margin-left: auto;
  margin-right: auto;
}
.hero {
  min-height: 620px;
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  align-items: center;
  gap: 72px;
  padding: 50px 0 100px;
  position: relative;
  overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute;
  z-index: 0;
  inset: -24% -16% -18% 10%;
  background: linear-gradient(109deg,transparent 0 23%,rgba(255,248,210,.18) 24% 34%,transparent 35% 41%,rgba(255,248,210,.28) 42% 55%,transparent 56% 63%,rgba(255,248,210,.16) 64% 75%,transparent 76%);
  filter: blur(2px);
  transform: translateX(1%) skewX(-8deg);
  animation: drift-light 15s ease-in-out infinite alternate;
  pointer-events: none;
}
.hero::after {
  content: '';
  position: absolute;
  z-index: 0;
  top: -120px;
  right: 19%;
  width: 46%;
  height: 740px;
  background: repeating-linear-gradient(90deg,transparent 0 24%,rgba(112,94,58,.055) 24.2% 25.8%,transparent 26% 49%),linear-gradient(113deg,transparent 0 45%,rgba(112,94,58,.055) 45.2% 46%,transparent 46.3%);
  transform: skewX(-8deg);
  pointer-events: none;
}
.hero-copy,.hero-image {
  position: relative;
  z-index: 1;
}
.eyebrow {
  font-size: .69rem;
  letter-spacing: .16em;
  color: var(--terracotta);
  font-weight: 700;
  margin: 0 0 20px;
}
.hero h1 {
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(3.25rem,6vw,5.7rem);
  line-height: .98;
  letter-spacing: -.07em;
  margin: 0;
}
.hero h1 em,h2 em {
  font-weight: 400;
  color: var(--terracotta);
}
.intro {
  max-width: 400px;
  line-height: 1.85;
  color: var(--muted);
  margin: 28px 0;
}
.button {
  display: inline-flex;
  gap: 28px;
  align-items: center;
  padding: 13px 17px;
  background: var(--ink);
  color: white;
  font-size: .8rem;
}
.button span {
  color: var(--peach);
  font-size: 1.1rem;
}
.hero-image {
  height: 485px;
  position: relative;
}
.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.scribble {
  position: absolute;
  bottom: -20px;
  left: -36px;
  background: var(--peach);
  border-radius: 50%;
  width: 112px;
  height: 112px;
  display: grid;
  place-items: center;
  text-align: center;
  font-family: var(--serif);
  font-style: italic;
  line-height: 1.1;
  transform: rotate(-12deg);
}
.about {
  padding: 104px 0;
  border-top: 1px solid var(--line);
  display: grid;
  grid-template-columns: 1fr 1.5fr;
}
.about h2,.featured h2 {
  font-family: var(--serif);
  font-weight: 500;
  letter-spacing: -.045em;
  font-size: clamp(2rem,3vw,3.1rem);
  line-height: 1.1;
  margin: 0 0 20px;
}
.about div p:last-child {
  color: var(--muted);
  line-height: 1.9;
  max-width: 510px;
}
.categories {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}
.category {
  min-height: 335px;
  padding: 34px;
  display: flex;
  flex-direction: column;
  color: var(--ink);
  transition: transform .25s;
}
.category:hover {
  transform: translateY(-5px);
}
.category span {
  font-size: .67rem;
  letter-spacing: .12em;
}
.category h2 {
  font-family: var(--serif);
  font-size: 3.5rem;
  font-weight: 500;
  letter-spacing: -.06em;
  line-height: .88;
  margin: auto 0;
}
.category b {
  font-size: .8rem;
  font-weight: 500;
}
.web {
  background: #c8d5c5;
}
.hand {
  background: #e6c29d;
}
.featured {
  padding: 120px 0;
}
.section-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 38px;
}
.section-head .eyebrow {
  margin-bottom: 12px;
}
.section-head>a {
  color: var(--ink);
  border-bottom: 1px solid var(--ink);
  padding-bottom: 4px;
  font-size: .8rem;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 22px;
}
.contact {
  padding: 124px 0;
  overflow: hidden;
  position: relative;
}
.contact::before {
  content: '';
  position: absolute;
  width: 390px;
  height: 390px;
  right: -90px;
  top: -85px;
  border-radius: 50%;
  background: radial-gradient(circle,rgba(255,249,210,.72) 0,rgba(255,249,210,.32) 37%,transparent 70%);
  pointer-events: none;
}
.contact-frame {
  position: relative;
  padding: 76px clamp(42px,7vw,96px) 64px;
}
.contact-frame::before,
.contact-frame::after {
  content: '';
  position: absolute;
  pointer-events: none;
}
.contact-frame::before {
  inset: 0;
  border: 1px solid #c8d5c5;
  border-radius: 47% 53% 44% 56% / 12% 16% 15% 13%;
  transform: rotate(-1.1deg);
}
.contact-frame::after {
  inset: 15px;
  border: 1px dashed var(--line);
  border-radius: 45% 55% 52% 48% / 13% 11% 18% 16%;
  transform: rotate(.6deg);
}
.contact-inner {
  display: grid;
  grid-template-columns: minmax(0,.9fr) minmax(320px,.7fr);
  align-items: center;
  gap: clamp(35px,9vw,140px);
  position: relative;
}
.contact-page-label {
  position: absolute;
  z-index: 3;
  top: -14px;
  left: 50%;
  margin: 0;
  padding: 9px 18px;
  color: var(--terracotta);
  background: var(--cream);
  font-size: .6rem;
  letter-spacing: .14em;
  transform: translateX(-50%) rotate(-2deg);
}
.contact-copy-block {
  position: relative;
  z-index: 1;
}
.contact h2 {
  font-family: var(--serif);
  font-weight: 500;
  letter-spacing: -.05em;
  font-size: clamp(2.6rem,5vw,4.55rem);
  margin: 0;
}
.contact-copy {
  color: var(--muted);
  max-width: 395px;
  margin: 20px 0 0;
  line-height: 1.8;
}
.contact-receipt {
  position: relative;
  z-index: 1;
  width: min(100%,390px);
  justify-self: end;
  padding: 31px 34px 42px;
  color: var(--ink);
  background: var(--cream);
  box-shadow: 13px 18px 0 rgba(191,101,76,.13);
  clip-path: polygon(0 0,100% 0,100% 97%,96% 100%,92% 97%,88% 100%,84% 97%,80% 100%,76% 97%,72% 100%,68% 97%,64% 100%,60% 97%,56% 100%,52% 97%,48% 100%,44% 97%,40% 100%,36% 97%,32% 100%,28% 97%,24% 100%,20% 97%,16% 100%,12% 97%,8% 100%,4% 97%,0 100%);
  transform: rotate(3deg);
}
.contact-receipt::before {
  content: '';
  position: absolute;
  inset: 12px;
  border: 1px solid var(--line);
  opacity: .72;
  pointer-events: none;
}
.receipt-head,.receipt-links a {
  display: flex;
  justify-content: space-between;
  gap: 18px;
}
.receipt-head {
  position: relative;
  z-index: 1;
  padding-bottom: 14px;
  border-bottom: 1px dashed var(--line);
  color: var(--terracotta);
  font-size: .62rem;
  letter-spacing: .12em;
}
.receipt-title {
  position: relative;
  z-index: 1;
  margin: 27px 0 7px;
  font-size: 1.45rem;
  font-weight: 500;
}
.receipt-date {
  position: relative;
  z-index: 1;
  margin: 0 0 23px;
  color: var(--muted);
  font-size: .6rem;
  letter-spacing: .08em;
}
.receipt-links {
  position: relative;
  z-index: 1;
  border-top: 1px dashed var(--line);
}
.receipt-links a {
  padding: 15px 0;
  border-bottom: 1px dashed var(--line);
  align-items: baseline;
  transition: color .2s,transform .2s;
}
.receipt-links a:hover {
  color: var(--terracotta);
  transform: translateX(4px);
}
.receipt-links span {
  color: var(--terracotta);
  font-size: .62rem;
  letter-spacing: .12em;
}
.receipt-links b {
  font-size: .81rem;
  font-weight: 500;
  text-align: right;
  word-break: break-all;
}
.receipt-signoff {
  position: relative;
  z-index: 1;
  margin: 25px 0 0;
  color: var(--muted);
  font-size: .88rem;
  line-height: 1.7;
}
@keyframes drift-light {
  from {
    transform: translateX(-2%) skewX(-8deg);
    opacity: .72;
  }
  to {
    transform: translateX(3%) skewX(-8deg);
    opacity: 1;
  }
}
@media (prefers-reduced-motion:reduce) {
  .hero::before {
    animation: none;
  }
}
@media (max-width:760px) {
  .page-width {
    width: calc(100% - 40px);
  }
  .hero {
    grid-template-columns: 1fr;
    gap: 45px;
    padding: 42px 0 80px;
  }
  .hero::after {
    right: -3%;
    width: 85%;
    opacity: .65;
  }
  .hero-image {
    height: auto;
    aspect-ratio: 4 / 5;
  }
  .hero-image img {
    object-position: 42% 72%;
  }
  .scribble {
    bottom: -46px;
    left: 18px;
  }
  .about {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 75px 0;
  }
  .categories {
    grid-template-columns: 1fr;
  }
  .category {
    min-height: 260px;
  }
  .featured {
    padding: 80px 0;
  }
  .grid {
    grid-template-columns: repeat(2,1fr);
    gap: 30px 15px;
  }
  .contact {
    padding: 90px 0;
  }
  .contact-frame {
    padding: 62px 28px 42px;
  }
  .contact-inner {
    grid-template-columns: 1fr;
    gap: 46px;
  }
  .contact-frame::before {
    border-radius: 44% 56% 46% 54% / 8% 10% 9% 11%;
  }
  .contact-frame::after {
    inset: 10px;
    border-radius: 44% 56% 46% 54% / 8% 10% 9% 11%;
  }
  .contact-page-label {
    top: -13px;
    white-space: nowrap;
  }
  .contact-receipt {
    justify-self: center;
    transform: rotate(1.5deg);
  }
}
@media (max-width:430px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .section-head {
    align-items: center;
  }
  .section-head h2 {
    font-size: 2rem;
  }
}
.hero::before,.hero::after {
  display: none;
}

</style>
