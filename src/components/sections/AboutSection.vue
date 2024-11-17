<script setup>
import ArticleThumbnail from "../ArticleThumbnail.vue";
import rainbowKauai from "../../assets/images/rainbow2-on-kauai.jpg";
import prevSOL from "../../assets/images/Post-our-previous-SoL.jpg";

const articles = [
  {
    title: "Our Story",
    imgPath: rainbowKauai,
    content:
      "We, Richard and Greta, feel very blessed to have encountered at a young age a remarkable man, spiritual teacher, who inspired us with an astounding ideal: to re-create paradise on earth. Read more...",
    href: "our-story",
  },
  {
    title: "Our Previous Space of Love",
    imgPath: prevSOL,
    content:
      "In sharing our vision and mission it became clear how much our understanding, approach and methodology differ from the normal way of operating. We understood the importance of presenting a physical example, so people can feel and experience what we are talking about. Read more...",
    href: "out-previous-space-of-love",
  },
];
</script>

<template>
  <section id="about" class="container max-w-7xl mx-auto mt-10">
    <h1 class="text-5xl text-balance text-center my-10 pt-10">
      Our lives are our meditation, our breath is our prayer and our acts are
      our song!
    </h1>
    <div class="max-w-6xl mx-auto mb-10">
      <h3>The Sanctuary of LUBOF (Living in Universal Beauty as One Family)</h3>
      <p class="mb-3">
        Established in 2006 as an unincorporated Church Assembly. The office of
        the Sanctuary of LUBOF was incorporated in the state of Hawaii as a
        non-profit Corporation Sole. ‘LUBOF’ means ‘LOVE’ in Bulgarian. The
        Sanctuary of LUBOF considers Love as the greatest power in the universe.
      </p>
      <h3>We are all one!</h3>
      <p class="mb-3">
        The Sanctuary of LUBOF recognizes all forms of worship, devotion,
        adoration and communion with the Divine. It honors the sacredness of
        each moment and the fullness of life.<br />

        The Sanctuary of LUBOF recognizes the miracle of each day and puts
        special attention upon the sunrise as a means of awakening and
        maintaining the Divine, and upon the sunset as a means of recognition
        and gratitude towards Life.
      </p>
    </div>
    <div class="flex justify-evenly gap-10">
      <aside
        class="w-1/2 max-w-lg"
        v-for="{ title, content, imgPath, href } in articles"
      >
        <ArticleThumbnail
          :title="title"
          :content="content"
          :imgPath="imgPath"
          :href="href"
          :id="href"
        />
      </aside>
    </div>
  </section>
</template>
