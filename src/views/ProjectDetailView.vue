<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { findProject } from '../data/projects';
const props = defineProps({
  id: String
});
const project = computed(() => findProject(props.id));
</script>
<template>
<section v-if="project" class="detail">
  <RouterLink :to="project.type === 'web' ? '/web-projects' : '/handmade'" class="back">
    ← 回到作品列表
  </RouterLink>
  <div class="title">
    <div>
      <p class="eyebrow">
        {{ project.year }} · {{ project.type === 'web' ? 'FRONTEND PROJECT' : 'HANDMADE WORK' }}
      </p>
      <h1>
        {{ project.title }}
      </h1>
    </div>
    <div class="tags">
      <span v-for="tag in project.tags" :key="tag">
        {{ tag }}
      </span>
    </div>
  </div>
  <div class="detail-gallery">
    <img
      v-for="(image, index) in project.images"
      :key="image"
      class="cover"
      :src="image"
      :alt="`${project.title}－作品圖 ${index + 1}`"
    >
  </div>
  <div class="info">
    <h2>
      作品介紹
    </h2>
    <p>
      {{ project.description }}
    </p>
    <p v-if="project.materials">
      <b>
        使用材料
      </b>
      <br>
      {{ project.materials }}
    </p>
    <p v-else>
      <b>
        學習重點
      </b>
      <br>
      從版面規劃、元件切分到響應式設計，練習讓網站同時兼顧美感與使用體驗。
    </p>
    <div v-if="project.type === 'web'" class="links">
      <a :href="project.demoUrl" target="_blank">
        查看網站 ↗
      </a>
      <a :href="project.githubUrl" target="_blank">
        GitHub ↗
      </a>
    </div>
  </div>
</section>
<section v-else class="not-found">
  <h1>
    找不到這件作品。
  </h1>
  <RouterLink to="/">
    回到首頁
  </RouterLink>
</section>
</template>
<style scoped>
.detail,.not-found {
  width: min(1040px,calc(100% - 48px));
  margin: 0 auto;
  padding: 55px 0 120px;
}
.back {
  color: var(--muted);
  font-size: .82rem;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin: 70px 0 36px;
}
.eyebrow {
  font-size: .69rem;
  letter-spacing: .16em;
  color: var(--terracotta);
  font-weight: 700;
  margin: 0 0 16px;
}
h1 {
  font-family: var(--serif);
  font-size: clamp(3rem,6vw,5rem);
  font-weight: 500;
  letter-spacing: -.07em;
  margin: 0;
}
.tags {
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
}
.tags span {
  font-size: .72rem;
  background: var(--sand);
  padding: 7px 10px;
  color: var(--muted);
}
.detail-gallery {
  display: grid;
  gap: clamp(14px,2vw,24px);
}
.cover {
  display: block;
  width: 100%;
  height: auto;
}
.info {
  max-width: 600px;
  margin: 70px auto 0;
}
.info h2 {
  font-family: var(--serif);
  font-size: 2rem;
  font-weight: 500;
}
.info p {
  color: var(--muted);
  line-height: 1.9;
  margin: 20px 0;
}
.info b {
  color: var(--ink);
  font-size: .8rem;
}
.links {
  display: flex;
  gap: 12px;
  margin-top: 32px;
}
.links a {
  background: var(--ink);
  color: #fff;
  padding: 13px 18px;
  font-size: .8rem;
}
.not-found h1 {
  margin-bottom: 25px;
}
.not-found a {
  color: var(--terracotta);
}
@media (max-width:640px) {
  .detail,.not-found {
    width: calc(100% - 40px);
    padding: 35px 0 80px;
  }
  .title {
    display: block;
    margin: 50px 0 30px;
  }
  .tags {
    margin-top: 20px;
  }
  .info {
    margin-top: 45px;
  }
}

</style>
