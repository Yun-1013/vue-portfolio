<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="about-page">
    <div class="about-hero page-width">
      <div class="intro-copy">
        <p class="eyebrow">ABOUT ME · PORTFOLIO</p>
        <h1>
          你好，我是<br>
          <em>朱芸。</em>
        </h1>
        <p class="lead">
          我有服飾設計與服裝產業實務背景，並於 2026 年完成 UI/UX 與前端（Vue）培訓；正將對細節與美感的重視，轉化為清楚、有溫度的數位體驗。
        </p>
        <div class="intro-links" aria-label="作品分類">
          <RouterLink to="/web-projects">看網頁作品 <span>↗</span></RouterLink>
          <RouterLink to="/handmade">看手作作品 <span>↗</span></RouterLink>
        </div>
      </div>

      <aside class="profile-card" aria-label="個人資料卡">
        <div class="photo-placeholder" role="img" aria-label="個人照片位置">
          <span>YOUR<br>PHOTO</span>
          <small>PERSONAL PORTRAIT</small>
        </div>
        <div class="profile-card-heading">
          <span>朱芸 · 留光 LUMEN</span>
          <span>CREATIVE PORTFOLIO</span>
        </div>
        <dl class="profile-facts">
          <div>
            <dt>關於我</dt>
            <dd>1997 年生 · 天秤座女生</dd>
          </div>
          <div>
            <dt>學歷</dt>
            <dd>2016.09 — 2020.06<br>實踐大學高雄校區<br>服飾設計與經營學系</dd>
          </div>
          <div>
            <dt>近期培訓</dt>
            <dd>2026.04 — 08<br>UI/UX 與前端（Vue）</dd>
          </div>
        </dl>
      </aside>
    </div>

    <section class="story page-width">
      <p class="eyebrow">MY APPROACH</p>
      <div>
        <h2>從服裝產業走向<br>數位產品設計。</h2>
        <p>
          我於 2016 年 9 月進入實踐大學高雄校區服飾設計與經營學系，並於 2020 年 6 月畢業。自 2019 年 12 月至 2023 年 2 月，我在至誼實業有限公司擔任打版人員；接著於 2023 年 3 月至 2026 年 3 月，在台北主富服裝股份有限公司快單部擔任業務助理，累積服裝產業的工作經驗。
        </p>
        <p>
          2026 年 4 月至 8 月，我參與逢甲大學產業新尖兵計畫的 UI/UX 與前端（Vue）培訓，學習 HTML、CSS、JavaScript、Vue 與 Figma，將學習範圍延伸至數位介面設計與前端實作。
        </p>
      </div>
    </section>

    <section class="strengths page-width" aria-labelledby="strengths-title">
      <div class="section-heading">
        <p class="eyebrow">MY JOURNEY</p>
        <h2 id="strengths-title">學習與工作歷程</h2>
      </div>
      <div class="strength-grid">
        <article>
          <span>2016.09 — 2020.06</span>
          <h3>實踐大學高雄校區</h3>
          <p>服飾設計與經營學系畢業</p>
        </article>
        <article>
          <span>2019.12 — 2023.02</span>
          <h3>至誼實業有限公司</h3>
          <p>打版人員</p>
        </article>
        <article>
          <span>2023.03 — 2026.03</span>
          <h3>主富服裝股份有限公司</h3>
          <p>台北 · 快單部業務助理</p>
        </article>
        <article>
          <span>2026.04 — 08</span>
          <h3>逢甲大學產業新尖兵計畫</h3>
          <p>UI/UX 與前端（Vue）培訓</p>
        </article>
      </div>
    </section>

    <section class="toolkit page-width">
      <div class="toolkit-copy">
        <p class="eyebrow">TOOLKIT</p>
        <h2>我正在使用的工具</h2>
      </div>
      <ul>
        <li>HTML / CSS</li>
        <li>JavaScript</li>
        <li>Vue</li>
        <li>Figma</li>
        <li>服裝打版</li>
        <li>快單部業務支援</li>
        <li>布包製作</li>
        <li>皮件製作</li>
        <li>水晶花創作</li>
      </ul>
    </section>

    <section class="handmade-note page-width">
      <div>
        <p class="eyebrow">HANDMADE NOTE</p>
        <h2>從服裝開始，<br>延伸成日常手作。</h2>
      </div>
      <div>
        <p>
          「日常手作」收錄布包與皮件作品，目前展示內容多為就學期間的實習作品。水晶花作品則是向日本 MADOKA 花藝學院學習後完成的創作。
        </p>
        <RouterLink to="/handmade">探索手作作品 <span>↗</span></RouterLink>
      </div>
    </section>

    <section class="closing page-width">
      <p>期待把對細節的在意，投入下一個值得被好好完成的專案。</p>
      <RouterLink to="/web-projects">瀏覽網頁作品 <span>→</span></RouterLink>
    </section>
  </section>
</template>

<style scoped>
.page-width {
  width: min(1180px,calc(100% - 48px));
  margin-right: auto;
  margin-left: auto;
}
.about-page {
  padding: 42px 0 120px;
  overflow: hidden;
}
.about-hero {
  display: grid;
  grid-template-columns: minmax(0,1fr) minmax(340px,.78fr);
  align-items: center;
  gap: clamp(44px,9vw,136px);
  min-height: 590px;
}
.eyebrow {
  margin: 0 0 20px;
  color: var(--terracotta);
  font-size: .69rem;
  font-weight: 700;
  letter-spacing: .16em;
}
h1,h2,h3 {
  margin-top: 0;
}
h1 {
  margin-bottom: 28px;
  font-size: clamp(3.5rem,7vw,6.35rem);
  font-weight: 500 !important;
  letter-spacing: -.08em;
  line-height: .94;
}
h1 em {
  color: var(--terracotta);
  font-weight: 400;
}
.lead {
  max-width: 540px;
  margin: 0;
  color: var(--muted);
  font-size: 1.04rem;
  line-height: 2;
}
.intro-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
}
.intro-links a,.closing a {
  display: inline-flex;
  align-items: center;
  gap: 22px;
  padding: 13px 17px;
  background: var(--ink);
  color: #fff;
  font-size: .81rem;
  transition: background .2s ease,transform .2s ease;
}
.intro-links a:nth-child(2) {
  background: var(--peach);
  color: var(--ink);
}
.intro-links a:hover,.closing a:hover {
  background: var(--terracotta);
  color: #fff;
  transform: translateY(-3px);
}
.intro-links span,.closing span {
  color: inherit;
  font-size: 1rem;
}
.profile-card {
  position: relative;
  padding: 24px 28px 31px;
  background: #efe8da;
  box-shadow: 14px 17px 0 rgba(191,101,76,.13);
  transform: rotate(2deg);
}
.profile-card::after {
  position: absolute;
  inset: 10px;
  border: 1px solid rgba(112,109,99,.24);
  content: '';
  pointer-events: none;
}
.photo-placeholder {
  position: relative;
  z-index: 1;
  display: grid;
  min-height: 288px;
  overflow: hidden;
  place-items: center;
  color: #fffaf0;
  background:
    radial-gradient(circle at 22% 17%,rgba(255,249,210,.24),transparent 27%),
    linear-gradient(145deg,rgba(191,101,76,.2),transparent 57%),
    repeating-linear-gradient(45deg,rgba(255,255,255,.10) 0 1px,transparent 1px 10px),
    #a4937c;
  text-align: center;
}
.photo-placeholder span {
  font-size: 2.25rem;
  font-style: italic;
  letter-spacing: .04em;
  line-height: .88;
}
.photo-placeholder small {
  position: absolute;
  right: 13px;
  bottom: 11px;
  font-size: .57rem;
  letter-spacing: .12em;
}
.profile-card-heading,.profile-facts div {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  gap: 18px;
}
.profile-card-heading {
  padding: 19px 0 14px;
  border-bottom: 1px dashed var(--line);
  color: var(--terracotta);
  font-size: .6rem;
  letter-spacing: .1em;
}
.profile-facts {
  position: relative;
  z-index: 1;
  margin: 0;
}
.profile-facts div {
  padding: 14px 0;
  border-bottom: 1px dashed var(--line);
  align-items: baseline;
}
.profile-facts dt {
  color: var(--terracotta);
  font-size: .62rem;
  letter-spacing: .1em;
}
.profile-facts dd {
  margin: 0;
  font-size: .78rem;
  font-weight: 600;
  text-align: right;
}
.story {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 36px;
  padding: 112px 0;
  border-top: 1px solid var(--line);
}
.story h2,.section-heading h2,.toolkit h2 {
  margin-bottom: 20px;
  font-size: clamp(2.2rem,4vw,3.75rem);
  font-weight: 500 !important;
  letter-spacing: -.06em;
  line-height: 1.08;
}
.story div p {
  max-width: 580px;
  margin: 0 0 18px;
  color: var(--muted);
  line-height: 2;
}
.strengths {
  padding: 0 0 115px;
}
.section-heading {
  margin-bottom: 36px;
}
.section-heading .eyebrow {
  margin-bottom: 13px;
}
.section-heading h2 {
  margin-bottom: 0;
}
.strength-grid {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  border-top: 1px solid var(--line);
}
.strength-grid article {
  min-height: 260px;
  padding: 27px 27px 30px;
  border-right: 1px solid var(--line);
  background: #f4f1e8;
}
.strength-grid article:nth-child(2) {
  background: #e2ebdf;
}
.strength-grid article:nth-child(3) {
  background: #f0dfcb;
}
.strength-grid article:nth-child(4) {
  background: #f0dfcb;
}
.strength-grid article:nth-child(odd) {
  border-left: 0;
}
.strength-grid article:nth-child(even) {
  border-right: 0;
}
.strength-grid span {
  display: block;
  color: var(--terracotta);
  font-size: .69rem;
  letter-spacing: .14em;
}
.strength-grid h3 {
  margin: 57px 0 14px;
  font-size: 1.5rem;
  font-weight: 500 !important;
  letter-spacing: -.045em;
}
.strength-grid p {
  margin: 0;
  color: var(--muted);
  font-size: .9rem;
  line-height: 1.85;
}
.toolkit {
  display: grid;
  grid-template-columns: .9fr 1.2fr;
  gap: 46px;
  padding: 70px 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
.toolkit h2 {
  margin-bottom: 0;
  font-size: clamp(2rem,3vw,3rem);
}
.toolkit-copy .eyebrow {
  margin-bottom: 13px;
}
.toolkit ul {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 10px;
  margin: 0;
  padding: 7px 0 0;
  list-style: none;
}
.toolkit li {
  padding: 10px 13px;
  border: 1px solid var(--line);
  background: #fffdf8;
  color: var(--muted);
  font-size: .78rem;
}
.handmade-note {
  display: grid;
  grid-template-columns: .9fr 1.2fr;
  gap: 46px;
  padding: 100px 0;
}
.handmade-note .eyebrow {
  margin-bottom: 13px;
}
.handmade-note h2 {
  margin: 0;
  font-size: clamp(2rem,3vw,3rem);
  font-weight: 500 !important;
  letter-spacing: -.06em;
  line-height: 1.1;
}
.handmade-note>div:last-child {
  max-width: 590px;
}
.handmade-note p:not(.eyebrow) {
  margin: 0;
  color: var(--muted);
  line-height: 2;
}
.handmade-note a {
  display: inline-flex;
  gap: 14px;
  margin-top: 25px;
  padding-bottom: 4px;
  border-bottom: 1px solid var(--ink);
  color: var(--ink);
  font-size: .82rem;
  transition: color .2s ease,transform .2s ease;
}
.handmade-note a:hover {
  color: var(--terracotta);
  transform: translateX(4px);
}
.closing {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 35px;
  padding-top: 105px;
}
.closing p {
  max-width: 565px;
  margin: 0;
  font-size: clamp(1.5rem,2.7vw,2.4rem);
  letter-spacing: -.04em;
  line-height: 1.35;
}
@media (max-width:760px) {
  .page-width {
    width: calc(100% - 40px);
  }
  .about-page {
    padding: 30px 0 80px;
  }
  .about-hero,.story,.toolkit,.handmade-note {
    grid-template-columns: 1fr;
  }
  .about-hero {
    gap: 56px;
    min-height: 0;
  }
  .profile-card {
    width: min(100%,430px);
    justify-self: center;
  }
  .story {
    gap: 9px;
    padding: 80px 0;
  }
  .strengths {
    padding-bottom: 80px;
  }
  .strength-grid {
    grid-template-columns: 1fr;
  }
  .strength-grid article,.strength-grid article:last-child {
    min-height: auto;
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }
  .strength-grid article:last-child {
    border-bottom: 0;
  }
  .strength-grid h3 {
    margin-top: 28px;
  }
  .toolkit {
    gap: 25px;
    padding: 55px 0;
  }
  .handmade-note {
    gap: 25px;
    padding: 80px 0;
  }
  .closing {
    display: block;
    padding-top: 76px;
  }
  .closing a {
    margin-top: 28px;
  }
}
@media (max-width:430px) {
  .profile-card {
    padding: 20px;
  }
  .photo-placeholder {
    min-height: 240px;
  }
  .profile-card-heading {
    display: block;
    line-height: 1.9;
  }
  .profile-facts div {
    display: block;
  }
  .profile-facts dd {
    margin-top: 5px;
    text-align: left;
  }
}
</style>
