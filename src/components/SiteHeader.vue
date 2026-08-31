<script setup>
import { ref } from 'vue';
const open = ref(false);
const closeMenu = () => {
  open.value = false;
};
</script>
<template>
<header class="header">
  <RouterLink class="logo" to="/" @click="closeMenu">
    留光
    <span>
      ·
    </span>
    LUMEN
  </RouterLink>
  <button class="menu-button" type="button" aria-label="切換選單" @click="open = !open">
    <i>
    </i>
    <i>
    </i>
  </button>
  <nav :class="{ open }" aria-label="主要導覽">
    <RouterLink to="/" @click="closeMenu">
      關於留光
    </RouterLink>
    <RouterLink to="/web-projects" @click="closeMenu">
      網頁作品
    </RouterLink>
    <RouterLink to="/handmade" @click="closeMenu">
      手作日常
    </RouterLink>
    <a href="/#contact" @click="closeMenu">
      聯絡我
    </a>
  </nav>
</header>
</template>
<style scoped>
.header {
  width: min(1180px,calc(100% - 48px));
  height: 82px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 5;
}
.logo {
  font-family: var(--serif);
  font-size: 1.65rem;
  font-weight: 700;
  letter-spacing: -.07em;
  color: var(--ink);
}
.logo span {
  color: var(--terracotta);
}
nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}
nav a {
  font-size: .9rem;
  color: var(--muted);
  transition: .2s;
}
nav a:hover,nav a.router-link-active {
  color: var(--ink);
}
.menu-button {
  display: none;
  border: 0;
  background: none;
  width: 35px;
  padding: 7px 0;
}
.menu-button i {
  display: block;
  height: 1.5px;
  background: var(--ink);
  margin: 6px 0;
}
@media (max-width:640px) {
  .header {
    width: calc(100% - 40px);
    height: 70px;
  }
  .menu-button {
    display: block;
  }
  nav {
    display: none;
    position: absolute;
    top: 62px;
    right: 0;
    padding: 20px 24px;
    background: var(--cream);
    box-shadow: 0 12px 30px #3d35231a;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  nav.open {
    display: flex;
  }
}

</style>
