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
        class="w-full absolute bottom-0 left-0 z-40 transition-all ease-in-out duration-500 img-gradient"
        :class="isHovering ? 'px-3 pb-3 pt-20' : 'px-5 pb-5 pt-16'"
      >
        <h2
          class="absolute bottom-5 left-5 text-white transition-all ease-in-out duration-500"
          :class="isHovering ? 'text-3xl text-bold' : 'text-2xl'"
        >
          {{ title }}
        </h2>
      </div>
      <img
        class="transition-all ease-in-out duration-500"
        :class="{ 'scale-110': isHovering }"
        :src="imgPath"
        alt="Our Story"
      />
    </div>
    <div class="">
      <p class="p-1">
        {{ content }}
      </p>
    </div>
  </a>
</template>

<style scoped>
.img-gradient {
  background: linear-gradient(transparent, #333);
}
</style>
