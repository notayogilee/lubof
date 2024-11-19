<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const props = defineProps({
  title: String,
  content: String,
  imgPath: String,
  href: String,
});
</script>

<template></template>
