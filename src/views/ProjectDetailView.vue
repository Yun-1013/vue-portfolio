<script setup>
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import DetailImageCarousel from '../components/DetailImageCarousel.vue';
import { findProject, leatherTypes, projects } from '../data/projects';
const props = defineProps({
  id: String
});
const route = useRoute();
const project = computed(() => findProject(props.id));
const relatedProjects = computed(() => {
  if (!project.value) return [];

  return projects.filter(candidate => candidate.type === project.value.type && (
    candidate.type === 'web' || (
      candidate.category === project.value.category &&
      (candidate.category !== 'crystal-flower' || !route.query.level || candidate.level === route.query.level) &&
      (candidate.category !== 'leather' || !route.query.leatherType || candidate.tags.includes(leatherTypes.find(type => type.id === route.query.leatherType)?.tag))
    )
  ));
});
const nextProject = computed(() => {
  const currentIndex = relatedProjects.value.findIndex(candidate => candidate.id === project.value?.id);

  if (currentIndex < 0 || relatedProjects.value.length < 2) return null;

  return relatedProjects.value[(currentIndex + 1) % relatedProjects.value.length];
});
const previousProject = computed(() => {
  const currentIndex = relatedProjects.value.findIndex(candidate => candidate.id === project.value?.id);

  if (currentIndex < 0 || relatedProjects.value.length < 2) return null;

  return relatedProjects.value[(currentIndex - 1 + relatedProjects.value.length) % relatedProjects.value.length];
});
const getProjectRoute = targetProject => targetProject ? {
  path: `/projects/${targetProject.id}`,
  query: route.query
} : null;
const nextProjectRoute = computed(() => {
  return getProjectRoute(nextProject.value);
});
const previousProjectRoute = computed(() => getProjectRoute(previousProject.value));
const workNavigationTheme = computed(() => {
  if (project.value?.type === 'web') return 'work-navigation--web';

  return ({
    fabric: 'work-navigation--fabric',
    leather: 'work-navigation--leather',
    'crystal-flower': 'work-navigation--crystal'
  })[project.value?.category] ?? 'work-navigation--default';
});
const backToListRoute = computed(() => {
  if (project.value?.type === 'web') return '/web-projects';

  return {
    path: '/handmade',
    query: {
      category: project.value?.category,
      ...(project.value?.category === 'crystal-flower' && project.value.level ? { level: project.value.level } : {}),
      ...(project.value?.category === 'leather' && leatherTypes.find(type => project.value.tags.includes(type.tag))?.id ? { leatherType: leatherTypes.find(type => project.value.tags.includes(type.tag)).id } : {})
    }
  };
});
</script>
<template>
<section v-if="project" class="detail">
  <RouterLink :to="backToListRoute" class="back">
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
  <DetailImageCarousel :images="project.images" :title="project.title" />
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
    <nav v-if="previousProjectRoute || nextProjectRoute" :class="['work-navigation', workNavigationTheme]" aria-label="作品導覽">
      <RouterLink v-if="previousProjectRoute" :to="previousProjectRoute" class="work-navigation-button previous-work">
        <span aria-hidden="true">←</span>
        上一件作品
      </RouterLink>
      <RouterLink v-if="nextProjectRoute" :to="nextProjectRoute" class="work-navigation-button next-work">
        下一件作品
        <span aria-hidden="true">→</span>
      </RouterLink>
    </nav>
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
.info {
  max-width: 600px;
  margin: clamp(36px,5vw,56px) auto 0;
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
.work-navigation {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 42px;
}
.work-navigation-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  min-width: 144px;
  padding: 14px 19px;
  background: var(--ink);
  border: 1px solid var(--ink);
  color: #fff;
  font-size: .82rem;
  font-weight: 600;
  letter-spacing: .04em;
  box-shadow: 0 3px 7px rgba(60,53,45,.18);
  transition: background .2s ease,border-color .2s ease,transform .2s ease,box-shadow .2s ease;
}
.work-navigation-button span {
  font-size: 1.15rem;
  transition: transform .2s ease;
}
.work-navigation-button:hover {
  background: var(--terracotta);
  border-color: var(--terracotta);
  color: #fff;
  box-shadow: 0 5px 12px rgba(161,91,71,.28);
}
.previous-work:hover span {
  transform: translateX(-3px);
}
.next-work:hover span {
  transform: translateX(3px);
}
.work-navigation--web .work-navigation-button {
  border-color: #648fa0;
  background: #648fa0;
  color: #fff;
  box-shadow: 0 3px 7px rgba(80,123,140,.22);
}
.work-navigation--web .work-navigation-button:hover {
  border-color: #537b90;
  background: #537b90;
  color: #fff;
  box-shadow: 0 5px 11px rgba(80,123,140,.3);
}
.work-navigation--fabric .work-navigation-button {
  border-color: #beb9ae;
  background: #eeeae1;
  color: #4f4c45;
  box-shadow: 0 3px 7px rgba(81,76,69,.12);
}
.work-navigation--fabric .work-navigation-button:hover {
  border-color: #aaa49a;
  background: #e3ded4;
  color: #3f3c36;
  box-shadow: 0 5px 11px rgba(81,76,69,.17);
}
.work-navigation--leather .work-navigation-button {
  border-color: #b8c5ad;
  background: #e1e8da;
  color: #52624c;
  box-shadow: 0 3px 7px rgba(82,98,76,.12);
}
.work-navigation--leather .work-navigation-button:hover {
  border-color: #9eaf92;
  background: #d4deca;
  color: #42503e;
  box-shadow: 0 5px 11px rgba(82,98,76,.17);
}
.work-navigation--crystal .work-navigation-button {
  border-color: #b9c9d1;
  background: #e1ebee;
  color: #4d606a;
  box-shadow: 0 3px 7px rgba(77,96,106,.12);
}
.work-navigation--crystal .work-navigation-button:hover {
  border-color: #9fb4bf;
  background: #d5e1e6;
  color: #3e515b;
  box-shadow: 0 5px 11px rgba(77,96,106,.17);
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
  .work-navigation {
    display: grid;
    grid-template-columns: 1fr;
  }
  .work-navigation-button {
    width: 100%;
  }
}

</style>
