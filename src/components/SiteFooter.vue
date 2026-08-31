<template>
<footer>
  <span>
    © 2026 留光·LUMEN
  </span>
  <span>
    chus_lumen · Made with curiosity &amp; care.
  </span>
</footer>
</template>
<style scoped>
footer {
  width: min(1180px,calc(100% - 48px));
  margin: 0 auto;
  padding: 32px 0 42px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: .78rem;
}
@media (max-width:640px) {
  footer {
    width: calc(100% - 40px);
    flex-direction: column;
    gap: 8px;
  }
}

</style>
