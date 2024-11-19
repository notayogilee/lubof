<script setup>
import { RouterLink, RouterView } from "vue-router";

function scrollToSection(id) {
  console.log(id);
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <header class="p-5">
    <nav class="container flex gap-5 justify-end">
      <ul class="flex gap-5">
        <li>
          <button @click="scrollToSection('inspiration')">Inspiration</button>
        </li>
        <li>
          <button @click="scrollToSection('about')">About</button>
        </li>
      </ul>

      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
