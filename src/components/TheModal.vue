<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const props = defineProps({
  title: String,
  subtitle: String,
  content: String,
  icon: Array,
});
</script>

<template>
  <div class="flex flex-col gap-1 items-center">
    <h2 v-html="title"></h2>
    <font-awesome-icon class="text-6xl" :icon="icon" />
  </div>
</template>
