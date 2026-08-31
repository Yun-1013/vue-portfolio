<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import ProjectCard from './ProjectCard.vue';
const props = defineProps({
  projects: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  eyebrow: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  }
});
const current = ref(0);
const visible = ref(3);
let touchStartX = 0;
const updateVisible = () => {
  visible.value = window.innerWidth <= 540 ? 1 : window.innerWidth <= 860 ? 2 : 3;
  current.value = Math.min(current.value, Math.max(0, props.projects.length - visible.value));
};
const maxIndex = computed(() => Math.max(0, props.projects.length - visible.value));
const canMove = computed(() => props.projects.length > visible.value);
const previous = () => {
  current.value = Math.max(0, current.value - 1);
};
const next = () => {
  current.value = Math.min(maxIndex.value, current.value + 1);
};
const onTouchEnd = event => {
  const distance = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(distance) < 40) return;
  distance < 0 ? next() : previous();
};
const onTouchStart = event => {
  touchStartX = event.touches[0].clientX;
};
onMounted(() => {
  updateVisible();
  window.addEventListener('resize', updateVisible);
});
onBeforeUnmount(() => window.removeEventListener('resize', updateVisible));
</script>

<template>
<section class="featured-carousel" :aria-label="title">
  <div class="section-head">
    <div>
      <p class="eyebrow">
        {{ eyebrow }}
      </p>
      <h2>
        {{ title }}
      </h2>
    </div>
    <div class="head-actions">
      <div v-if="canMove" class="carousel-controls" aria-label="輪播控制">
        <button type="button" aria-label="上一件作品" :disabled="current === 0" @click="previous">
          ←
        </button>
        <span>
          {{ current + 1 }} / {{ maxIndex + 1 }}
        </span>
        <button type="button" aria-label="下一件作品" :disabled="current === maxIndex" @click="next">
          →
        </button>
      </div>
      <RouterLink :to="to">
        瀏覽全部 ↗
      </RouterLink>
    </div>
  </div>
  <div class="carousel-viewport" @touchstart.passive="onTouchStart" @touchend="onTouchEnd">
    <div class="carousel-track" :style="{ transform: `translateX(-${current * (100 / visible)}%)`, '--visible': visible }">
      <div v-for="project in projects" :key="project.id" class="carousel-slide">
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
.featured-carousel {
  padding: 56px 0;
}
.section-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 32px;
}
.eyebrow {
  font-size: .69rem;
  letter-spacing: .16em;
  color: var(--terracotta);
  font-weight: 700;
  margin: 0 0 12px;
}
.section-head h2 {
  font-family: var(--serif);
  font-weight: 500;
  letter-spacing: -.045em;
  font-size: clamp(2rem,3vw,3.1rem);
  line-height: 1.1;
  margin: 0;
}
.head-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}
.head-actions>a {
  color: var(--ink);
  border-bottom: 1px solid var(--ink);
  padding-bottom: 4px;
  font-size: .8rem;
  white-space: nowrap;
}
.carousel-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  font-size: .75rem;
}
.carousel-controls button {
  width: 32px;
  height: 32px;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--ink);
  font-size: 1rem;
}
.carousel-controls button:disabled {
  opacity: .35;
  cursor: default;
}
.carousel-viewport {
  overflow: hidden;
  /* Reserve room for the handmade Polaroid pin that sits above each card. */
  margin: -20px -8px -8px;
  padding: 20px 8px 8px;
}
.carousel-track {
  display: flex;
  transition: transform .4s cubic-bezier(.2,.75,.3,1);
}
.carousel-slide {
  flex: 0 0 calc(100% / var(--visible));
  min-width: 0;
  padding: 0 11px;
}
@media (prefers-reduced-motion:reduce) {
  .carousel-track {
    transition: none;
  }
}
@media (max-width:760px) {
  .featured-carousel {
    padding: 42px 0;
  }
  .section-head {
    align-items: center;
  }
  .head-actions {
    gap: 12px;
  }
  .carousel-controls span {
    display: none;
  }
  .carousel-slide {
    padding: 0 8px;
  }
}
@media (max-width:540px) {
  .section-head h2 {
    font-size: 2rem;
  }
  .head-actions>a {
    font-size: .75rem;
  }
  .carousel-controls button {
    width: 28px;
    height: 28px;
  }
}

</style>
