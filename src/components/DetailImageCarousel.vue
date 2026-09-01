<script setup>
import { computed, ref, watch } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    default: () => []
  },
  title: {
    type: String,
    required: true
  }
});

const currentIndex = ref(0);
const pointerStartX = ref(null);
const hasMultipleImages = computed(() => props.images.length > 1);

watch(() => props.images, () => {
  currentIndex.value = 0;
}, { deep: true });

const previous = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
};

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const selectImage = index => {
  currentIndex.value = index;
};

const startSwipe = event => {
  pointerStartX.value = event.clientX;
};

const endSwipe = event => {
  if (pointerStartX.value === null || !hasMultipleImages.value) return;

  const distance = event.clientX - pointerStartX.value;
  pointerStartX.value = null;

  if (Math.abs(distance) < 45) return;
  if (distance > 0) previous();
  else next();
};
</script>

<template>
  <section class="gallery" :aria-label="`${title} 圖片集`">
    <div
      class="image-stage"
      @pointerdown="startSwipe"
      @pointerup="endSwipe"
      @pointercancel="pointerStartX = null"
    >
      <div class="image-frame">
        <img
          v-if="images.length"
          :key="images[currentIndex]"
          class="image"
          :src="images[currentIndex]"
          :alt="`${title}－作品圖 ${currentIndex + 1}`"
        >
      </div>

      <button
        v-if="hasMultipleImages"
        type="button"
        class="arrow arrow-previous"
        aria-label="上一張作品圖片"
        @click="previous"
      >
        ←
      </button>
      <button
        v-if="hasMultipleImages"
        type="button"
        class="arrow arrow-next"
        aria-label="下一張作品圖片"
        @click="next"
      >
        →
      </button>
    </div>

    <div v-if="hasMultipleImages" class="controls">
      <div class="dots" aria-label="選擇作品圖片">
        <button
          v-for="(_, index) in images"
          :key="index"
          type="button"
          :class="['dot', { active: index === currentIndex }]"
          :aria-label="`顯示第 ${index + 1} 張圖片`"
          :aria-current="index === currentIndex ? 'true' : undefined"
          @click="selectImage(index)"
        />
      </div>
      <p class="counter" aria-live="polite">
        {{ currentIndex + 1 }} / {{ images.length }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.gallery {
  display: grid;
  gap: 14px;
}
.image-stage {
  --arrow-column: 72px;
  display: grid;
  grid-template-columns: var(--arrow-column) minmax(0,1fr) var(--arrow-column);
  align-items: center;
  height: clamp(280px,55svh,560px);
  touch-action: pan-y;
}
.image-frame {
  grid-column: 2;
  grid-row: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
}
.image {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  animation: image-in .22s ease-out;
}
.arrow {
  position: static;
  grid-row: 1;
  z-index: 1;
  justify-self: center;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(41,40,32,.25);
  border-radius: 50%;
  background: rgba(248,246,240,.88);
  color: var(--ink);
  font: inherit;
  font-size: 1.25rem;
  line-height: 1;
  transform: none;
  transition: background .2s ease,transform .2s ease;
}
.arrow:hover {
  background: var(--cream);
  transform: scale(1.06);
}
.arrow:focus-visible,.dot:focus-visible {
  outline: 2px solid var(--terracotta);
  outline-offset: 3px;
}
.arrow-previous {
  grid-column: 1;
}
.arrow-next {
  grid-column: 3;
}
.controls {
  display: grid;
  width: 100%;
  justify-items: center;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.dots {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 8px;
}
.dot {
  width: 7px;
  height: 7px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: var(--line);
}
.dot.active {
  background: var(--terracotta);
  transform: scale(1.3);
}
.counter {
  width: 100%;
  min-width: 0;
  margin: 0;
  text-align: center;
  color: var(--muted);
  font-size: .72rem;
  letter-spacing: .08em;
}
@keyframes image-in {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
@media (max-width:640px) {
  .image-stage {
    --arrow-column: 48px;
    height: clamp(240px,55svh,420px);
  }
  .arrow {
    width: 36px;
    height: 36px;
  }
}
@media (prefers-reduced-motion:reduce) {
  .image {
    animation: none;
  }
}
</style>
