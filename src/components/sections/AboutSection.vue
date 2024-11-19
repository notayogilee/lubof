<script setup>
import ArticleThumbnail from "../ArticleThumbnail.vue";
import rainbowKauai from "../../assets/images/rainbow2-on-kauai.jpg";
import prevSOL from "../../assets/images/Post-our-previous-SoL.jpg";
import weEnvision from "../../assets/images/we-envision.png";
import weManifest from "../../assets/images/we-manifest.jpg";
import founders from "../../assets/images/founders.png";

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

const projects = [
  {
    title: "We envision . . .<br> our Promissol Sanctuary",
    imgPath: weEnvision,
    content:
      "The world, now, more than ever, needs living centers of awakened consciousness that will offer an example and can serve as a model of caring for our dear planet earth for generations to come …",
    href: "we-envision-our-promissol-sanctuary",
  },
  {
    title: "We manifest<br> our Promissol Sanctuary",
    imgPath: weManifest,
    content:
      "Fostering our multidimensional connection with Universal Life, we uphold the inherent sacredness of all life, and pass on this responsibility of caring for our dear planet earth with its different kingdoms for future generations. Our lives become a Living School of Love where everyone opens up to the multi-dimensions of oneself, nature and the universe.",
    href: "we-manifest-our-promissol-sanctuary",
  },
];
</script>

<template>
  <section id="about" class="container lg:max-w-6xl mx-auto mt-10 p-10">
    <h1 class="text-5xl text-balance text-center mb-10">
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
    <div
      class="flex flex-col md:flex-row justify-evenly items-center md:items-start gap-10"
    >
      <aside
        class="w-full md:w-1/2 max-w-lg"
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
    <aside>
      <div class="inline-block xl:inline-flex my-7">
        <img
          :src="founders"
          alt="Richard and Greta"
          width="300"
          height="235"
          class="float-start xl:float-none me-5"
        />
        <p>
          In 2003, the Deva of Lubof called us to Kauai with the specific vision
          of creating a school within a community for Living in Universal Beauty
          as One Family. Inspired by the power of this vision and embraced by
          the Aloha Spirit of Kauai, we embarked on a wondrous journey of
          co-creation with the seen and unseen. We consciously put love as the
          foundation for everything we do in our life. This approach defines the
          journey we are on, it explains the path we took and take, and allows
          the magic of this vision to be incarnated into our daily life and into
          the third dimension. Within this approach we are calling forth our
          next home base, Space of Love, on a land consecrated to this vision.
        </p>
      </div>

      <div
        class="flex flex-col md:flex-row justify-evenly items-center md:items-start gap-10"
      >
        <aside
          class="w-full md:w-1/2 max-w-lg"
          v-for="{ title, content, imgPath, href } in projects"
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
      <p class="my-5">
        Inspired by the magnificence of this path and enthused by its magic, we
        invite you on this journey of incarnating the divinity of all life on
        earth. We invite you to explore the divine principles with which
        universal beauty creates itself in life and in us. We invite you into a
        discovery journey of living, loving and learning together the Life of
        Universal Beauty as One Family. Richard and Greta
      </p>
    </aside>
  </section>
</template>
