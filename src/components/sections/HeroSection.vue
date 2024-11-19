<script setup></script>

<template>
  <section
    id="hero"
    class="container flex flex-col gap-0 md:gap-10 mx-auto w-full max-[1920px]:min-h-screen"
  >
    <aside class="max-w-fit mx-auto text-center my-10">
      <h1 class="">Lubof: love in Bulgarian</h1>
      <h2 class="">The Sanctuary of LUBOF holds as its vision</h2>
      <h2 class="">the creation of a model for a new way of living where</h2>
      <h2 class="">love is our guiding inspiration</h2>
    </aside>

    <div
      class="aside flex flex-col md:flex-row justify-evenly items-center gap-5"
    >
      <aside class="md:max-w-80 flex md:flex-col gap-5 md:gap-0">
        <div
          class="flex justify-center p-9 border rounded-full max-w-fit mx-auto mb-3"
        >
          <font-awesome-icon
            class="text-6xl"
            :icon="['fas', 'hand-holding-heart']"
          />
        </div>
        <div class="">
          <h3 class="text-center">OUR CREED</h3>
          <p>
            As a human being we are a member of a universal and cosmic family of
            whom everyone holds at its core a divine blueprint of beauty,
            harmony and prosperity for all and everyone.
          </p>
        </div>
      </aside>
      <aside class="md:max-w-80 flex md:flex-col gap-5 md:gap-0">
        <div
          class="flex justify-center p-9 border rounded-full max-w-fit mx-auto mb-3 max-h-fit"
        >
          <font-awesome-icon class="text-6xl" :icon="['fas', 'people-group']" />
        </div>
        <div class="">
          <h3 class="text-center">WHO WE ARE</h3>
          <p>
            We are a non-profit organization with a spiritual and educational
            purpose to discover, learn and further the endless possibilities of
            the most powerful force in the universe: LOVE.
          </p>
        </div>
      </aside>
      <aside class="md:max-w-80 flex md:flex-col gap-5 md:gap-0">
        <div
          class="flex justify-center p-9 border rounded-full max-w-fit mx-auto mb-3"
        >
          <font-awesome-icon class="text-6xl" :icon="['fas', 'eye']" />
        </div>
        <div>
          <h3 class="text-center">WE ENVISION</h3>
          <p>
            The awakening of the divine consciousness through fostering
            qualities and virtues, such as love, wisdom, truth, beauty,
            goodness, purity, joy ... to prosper and flourish in all living
            creatures.
          </p>
        </div>
      </aside>
    </div>
  </section>
</template>
