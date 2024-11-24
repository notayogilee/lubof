<script setup>
import { RouterLink, RouterView } from "vue-router";

function scrollToSection(id) {
  const section = document.getElementById(id);
  const offset = -80;
  const sectionTop = section.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: sectionTop + offset,
    behavior: "smooth",
  });
}
</script>

<template>
  <header class="p-5 sticky top-0">
    <nav class="container flex gap-5 justify-end">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/articles">Articles</RouterLink>
      <ul class="flex gap-5">
        <li>
          <button @click="scrollToSection('about')">About</button>
        </li>
        <li>
          <button @click="scrollToSection('inspiration')">Inspiration</button>
        </li>
        <li>
          <button @click="scrollToSection('doctrine')">Doctrine</button>
        </li>
      </ul>

      <RouterLink to="/contact">Contact</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
