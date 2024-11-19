<script setup>
import { ref } from "vue";
const isHovering = ref(false);

const props = defineProps({
  title: String,
  content: String,
  imgPath: String,
  href: String,
});

const onMouseOver = () => {
  isHovering.value = true;
};

const onMouseOut = () => {
  isHovering.value = false;
};
</script>

<template>
  <a :href="href" @mouseover="onMouseOver" @mouseout="onMouseOut">
    <div class="relative overflow-hidden">
      <div
        class="px-5 pb-5 pt-16 w-full absolute flex flex-col h-auto bottom-0 z-40 img-gradient transition-all ease-in-out duration-500"
      >
        <h2 v-html="title" id="articleTitle" class="text-white z-50"></h2>

        <!-- <p
          class="px-1 mt-5 text-white transition-all ease-in-out duration-500"
          v-html="content"
        ></p> -->
      </div>
      <img
        class="transition-all ease-in-out duration-500"
        :class="{ 'scale-110': isHovering }"
        :src="imgPath"
        alt="Our Story"
      />
    </div>
  </a>
</template>

<style scoped>
.img-gradient {
  background: linear-gradient(transparent, #333);
}
</style>
