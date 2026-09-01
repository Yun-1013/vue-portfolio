<script setup>
import { computed, ref } from 'vue';
import { leatherTypes } from '../data/projects';
const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});
const imageFailed = ref(!props.project.cover);
const showFallback = () => {
  imageFailed.value = true;
};
const leatherTypeId = computed(() => leatherTypes.find(type => props.project.tags?.includes(type.tag))?.id);
const getTagClass = tag => ({
  'crystal-category-tag': props.project.category === 'crystal-flower' && tag === '水晶花',
  'crystal-subcategory-tag': props.project.category === 'crystal-flower' && tag !== '水晶花'
});
const detailRoute = computed(() => ({
  path: `/projects/${props.project.id}`,
  query: props.project.type === 'handmade' ? {
    category: props.project.category,
    ...(props.project.category === 'crystal-flower' && props.project.level ? { level: props.project.level } : {}),
    ...(props.project.category === 'leather' && leatherTypeId.value ? { leatherType: leatherTypeId.value } : {})
  } : {}
}));
</script>

<template>
<RouterLink :to="detailRoute" class="card" :class="{ 'handmade-card': project.type === 'handmade', 'web-card': project.type === 'web' }">
  <div class="image-wrap" :data-caption="project.type === 'handmade' ? `HANDMADE · ${project.year}` : null" :data-url="project.type === 'web' ? `portfolio.local / ${project.id}` : null">
    <img v-if="!imageFailed" :src="project.cover" :alt="project.title" @error="showFallback">
    <div v-else class="image-fallback" :class="project.type === 'web' ? 'fallback-web' : project.category === 'leather' ? 'fallback-leather' : 'fallback-flower'" role="img" :aria-label="`${project.title} 預設圖片`">
      <svg v-if="project.type === 'web'" viewBox="0 0 64 64" aria-hidden="true">
        <rect x="10" y="12" width="44" height="31" rx="3"/>
        <path d="M25 52h14M32 43v9"/>
      </svg>
      <svg v-else-if="project.category === 'leather'" viewBox="0 0 64 64" aria-hidden="true">
        <path d="M13 25h38l3 26H10l3-26Z"/>
        <path d="M23 27v-5a9 9 0 0 1 18 0v5"/>
        <path d="M13 32h38"/>
      </svg>
      <div v-else class="flower-fallback-art" aria-hidden="true">
        <span class="flower-main">✿</span>
        <span class="flower-small flower-small-left">✿</span>
        <span class="flower-small flower-small-right">✿</span>
      </div>
    </div>
  </div>
  <div class="card-top">
    <p>
      {{ project.year }} · {{ project.type === 'web' ? '網頁設計' : '手作創作' }}
    </p>
    <span>
      ↗
    </span>
  </div>
  <h3>
    {{ project.title }}
  </h3>
  <p class="description">
    {{ project.description }}
  </p>
  <div class="tags" :class="[
    {
      'leather-tags': project.category === 'leather',
      'fabric-tags': project.category === 'fabric',
      'crystal-tags': project.category === 'crystal-flower'
    },
    project.category === 'crystal-flower' ? `crystal-level-${project.level}` : '',
    project.category === 'leather' && leatherTypeId ? `leather-type-${leatherTypeId}` : ''
  ]">
    <small v-for="tag in project.tags" :key="tag" :class="getTagClass(tag)" :data-level="project.category === 'crystal-flower' && tag !== '水晶花' ? project.level : null">
      {{ tag }}
    </small>
  </div>
</RouterLink>
</template>

<style scoped>
.card {
  color: var(--ink);
  display: block;
}
.image-wrap {
  overflow: hidden;
  background: #d6d0c0;
  aspect-ratio: 1.12;
}
.image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .5s ease;
}
.card:hover img {
  transform: scale(1.05);
}
.image-fallback {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}
.image-fallback svg {
  width: 30%;
  max-width: 92px;
  min-width: 52px;
  fill: none;
  stroke: currentColor;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.fallback-web {
  background: #c7c8ca;
  color: #5c6065;
}
.fallback-flower {
  position: relative;
  overflow: hidden;
  background: #d5cbdc;
  color: #766b80;
}
.flower-fallback-art {
  position: absolute;
  inset: 0;
  font-family: 'Segoe UI Symbol','Noto Sans Symbols',sans-serif;
}
.flower-fallback-art span {
  position: absolute;
  line-height: 1;
  color: currentColor;
}
.flower-main {
  top: 50%;
  left: 50%;
  font-size: clamp(4.75rem,9vw,6.4rem);
  transform: translate(-50%,-55%);
}
.flower-small {
  opacity: .62;
}
.flower-small-left {
  bottom: 17%;
  left: 20%;
  font-size: clamp(1.8rem,3.8vw,2.65rem);
}
.flower-small-right {
  top: 17%;
  right: 17%;
  font-size: clamp(1.55rem,3.2vw,2.2rem);
  opacity: .56;
}
.fallback-leather {
  background: #c9b58a;
  color: #635039;
}
.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
}
.card-top p {
  font-size: .72rem;
  color: var(--muted);
  letter-spacing: .04em;
}
.card-top span {
  font-size: 1.3rem;
  color: var(--terracotta);
}
h3 {
  font-family: var(--serif);
  font-size: 1.45rem;
  font-weight: 500;
  margin: 5px 0 7px;
}
.description {
  font-size: .84rem;
  line-height: 1.7;
  color: var(--muted);
  margin: 0;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;
}
.tags small {
  background: var(--sand);
  padding: 5px 9px;
  font-size: .67rem;
  color: var(--muted);
}

</style>
