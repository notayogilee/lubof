<script setup>
import { ref } from "vue";
const isHovering = ref(false);

const props = defineProps({
  id: Number,
  title: String,
  imgPath: String,
  slug: String,
});

const onMouseOver = () => {
  isHovering.value = true;
};

const onMouseOut = () => {
  isHovering.value = false;
};
</script>

<template>
  <router-link
    :to="{ name: 'ArticleDetail', params: { slug: slug } }"
    @mouseover="onMouseOver"
    @mouseout="onMouseOut"
  >
    <div class="relative overflow-hidden">
      <div
        class="px-5 pb-5 pt-16 w-full absolute flex flex-col h-auto bottom-0 z-40 img-gradient transition-all ease-in-out duration-500"
      >
        <h2 v-html="title" id="articleTitle" class="text-white z-50"></h2>
      </div>
      <img
        class="transition-all ease-in-out duration-500 max-h-72 w-full"
        :class="{ 'scale-110': isHovering }"
        :src="imgPath"
        alt="Our Story"
      />
    </div>
  </router-link>
</template>

<style scoped>
.img-gradient {
  background: linear-gradient(transparent, #333);
}
</style>
