<script setup lang="ts">
import Form from './components/Form/Form.vue'
</script>

<template>
  <section class="layout">
    <main class="layout__content">
      <Form msg="Vite + Vue" />
    </main>

    <footer class="footer">This web is a code challenge, developed by Hans Felix, more info
      <a href="https://github.com/aimo/challenges/tree/main">here</a>
    </footer>
  </section>
</template>

<style lang="scss">
@import "@/assets/global.scss";


.layout {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  background-image: url('/imgs/background.jpg');
  background-position: center;
  background-size: cover;

  &__content {
    height: 100%;
    align-self: center;
    justify-self: stretch;
    overflow: hidden;
  }
}

.footer {
  background-color: rgb(0 0 0 / 75%);
  z-index: 200;
  padding: 0.75rem 2rem;
}
</style>