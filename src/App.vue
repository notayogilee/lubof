<script setup>
import { RouterLink, RouterView } from "vue-router";

function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <header class="p-5">
    <nav class="container flex gap-5 justify-end">
      <ul>
        <li>
          <button @click="scrollToSection('methodology')">Methodology</button>
        </li>
      </ul>

      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
