<script setup>
import ArticleThumbnail from "@/components/ArticleThumbnail.vue";
import { articles } from "@/assets/articles.js";
</script>

<template>
  <main class="container mx-auto p-10">
    <h1 class="text-center mb-20">Articles</h1>
    <div
      class="flex flex-col flex-wrap md:flex-row justify-evenly items-center md:items-start gap-10"
    >
      <aside
        class="w-full md:w-1/2 max-w-lg"
        v-for="{ title, imgPath, slug, id } in articles"
      >
        <ArticleThumbnail
          :title="title"
          :imgPath="imgPath"
          :slug="slug"
          :key="id"
        />
      </aside>
    </div>
  </main>
</template>
