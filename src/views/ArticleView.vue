<script setup>
import { articles } from "@/assets/articles";
import { computed } from "vue";
const props = defineProps({ slug: String });

const article = computed(() => {
  return articles.find((article) => article.slug === props.slug);
});
</script>

<template>
  <main class="container mx-auto mt-10 p-10">
    <div class="inline-block">
      <img
        class="lg:w-1/2 lg:float-start pb-5 lg:pb-0 lg:pe-7"
        :src="article.imgPath"
        alt="article.title"
      />
      <h1
        v-html="article.title"
        id="articleTitle"
        class="text-dark text-center text-balance pb-5"
      ></h1>
      <h2
        v-if="article.subtitle"
        v-html="article.subtitle"
        class="text-balance text-center mb-5"
      ></h2>

      <div v-html="article.content" class="text-xl"></div>
    </div>
    <div
      class="text-3xl flex justify-center items-center my-5 px-5 py-3 border rounded-2xl w-fit mx-auto"
    >
      <router-link to="/articles">Back to articles</router-link>
    </div>
  </main>
</template>
