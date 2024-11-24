<script setup>
import TheModal from "../TheModal.vue";

const doctrineList = [
  {
    id: 1,
    icon: ["fas", "infinity"],
    title: "Genesis",
    subtitle:
      "The Sanctuary of LUBOF fully acknowledges its allegiance to our Heavenly Father and Divine Mother, our Eternal Parents of love, wisdom and truth, Creators of Heaven and Earth, all life and substance in the universe.",
    content:
      'It fully acknowledges that every human being has been created in love, wisdom and truth by our Heavenly Father and Divine Mother. We are all sons and daughters of our Eternal Parents, and as such we are all eternal beings. In keeping with this divine birth-right, all of humanity is one family.<br> This unique heritage, shared by all of creation, is infused within each and every living creature throughout eternity. The Sanctuary of LUBOF past, present and future lineage is contained in these few words:<br>"We love our Heavenly Father and Divine Mother, Creators of Heaven and Earth, source of all creation forever and ever.<br>We are love and love is everlasting.<br>We are wisdom and wisdom is infinite.<br>We are truth, and truth is eternal."<br>The Sanctuary of LUBOF remains one with our Heavenly Father and Divine Mother, one with all of creation and one with its divine origin, the Eternal Sacred Flame forever burning on the altar of its heart.<br>The Sanctuary of LUBOF is greatly inspired by all the spiritual teachings and traditional cultures of Love, Wisdom and Truth.<br>It recognizes the Eternal Initiator of all Ages known as Melkisedec in the Judaic-Christian tradition, Markande in the Vedic tradition and many other names in other religions and cultures: the Sanctuary of LUBOF is of that Sacred Order.',
  },
  {
    id: 2,
    icon: ["fas", "circle-nodes"],
    title: "Three Principles",
    subtitle:
      "1) All living creatures are divine in origin<br>2) All of creation is sacred<br>3) All of creation is one",
    content:
      "The foundation of our vision is based on<br>1) All living creatures, known or unknown, seen and unseen, are created by our Heavenly Father and Divine Mother, and as such, are divine in origin.<br>2) All of creation is infused with the eternal love, wisdom and life of our Heavenly Father and Divine Mother and as such, is sacred, holy and shared by all life forms.<br>3) All of creation is one. It cannot be divided, taken away or possessed and as such, the diversity of all life forms resides in its undeniable unity.",
  },
  {
    id: 3,
    icon: ["fas", "book-open"],
    title: "Our Credo",
    subtitle:
      "As stated by the Spiritual Master, Hermes Trismegistus:<br>“Everything below is like that which is above and everything above is like that which is below to accomplish the miracle of Oneness!”",
    content:
      "As stated by the Spiritual Master, Peter Deunov:<br>“When man listens, God speaks. When man obeys, God acts. When men change, nations change!”<br>As stated by the Spiritual Master, Omraam Mikhaël Aïvanhov:<br>“If many people were to ask for peace and abundance for the entire world, the Golden Age on Earth would be realized!”",
  },
  {
    id: 4,
    icon: ["far", "compass"],
    title: "Our Purposes",
    subtitle:
      "~ To exist and act in full expression and promotion of the above stated principles: all is divine, all is sacred, all is one;",
    content:
      "~ To help, support and foster the recognition of these principles in the lives of all beings;<br>~ To facilitate in each moment of existence the full and divine expression of our Heavenly Father and Divine Mother, to continually turn to Them for guidance by means of prayer, meditation, contemplation and inner attunement, and to align our lives within their Sacred Alliance;<br>~ To assist in and support the awakening of the divine consciousness through promoting the qualities and virtues of our Eternal Parents, such as love, wisdom, truth, beauty, justice, goodness, purity, compassion, joy ... to prosper and flourish in all living creatures;<br>~ To create and maintain a sacred environment in which the awakening can unfold;<br>~ To foster beauty as a path towards perfection;<br>~ To communicate, by all the internal and external means existing or to come into existence, the divine, the sacredness and the oneness of creation;<br>~ To inspire and propagate, through all forms of arts, the desire to live in Beauty, Harmony and Peace, and create the Golden Age on Earth;<br>~ To offer and share programs that enable the clear understanding of the cycles of Soul life and its manifestation;<br>~ To offer and share programs that educate our different levels of consciousness, their different bodies and how they are nourished;<br>~ To offer and share programs that reintegrate and maintain the innate relationship with Soul and Spirit;<br>~ To foster, educate and promote the communication of unborn souls with their future parents and to enable the souls to be conceived and birthed in sacred alliance with our Heavenly Father and Divine Mother;<br>~ To foster, educate and promote the understanding of the transition of the soul as it passes from the physical body back to spirit, and of the possibility of ascension;<br>~ To foster, educate and promote all aspects of well-being, in all the different bodies that constitute living beings;<br>~ To live in harmony with all of creation and promote, foster and cultivate our sacred alliances with nature;<br>~ To promote, foster and cultivate community living in harmony with the plenitude and abundance that our Heavenly Father and Divine Mother have so graciously offered on this sacred planet in order that all may live in universal beauty as one family, for generations to come;<br>~ To assist and support the transition from an artificial value system to one of service and giving where love is the foundation, intention and motivation of all self-expression;<br>~ To support and assist the freedom and sovereignty of all human beings as they express fully their Soul Essence, and to respect the sovereignty of all Kingdoms in all dimensions of existence;<br>~ To live in gratitude and thankfulness for all which our ancestors have bestowed to us and, in turn, to create, embellish and offer a more beautiful world to live in and share for those who will come and live on this sacred planet.",
  },
  {
    id: 5,
    icon: ["fas", "handshake"],
    title: "Inner Alliance",
    subtitle:
      "~ To walk hand in hand with our Heavenly Father and Divine Mother and to allow a Divine Co-Creation to manifest through our thoughts, feelings and actions,<br>~ To serve and co-create with our Universal Family,",
    content:
      "~ To serve and co-create with our Universal Family,<br>~ To learn and be attentive to the lessons of Nature and uphold its sacredness,<br>~ To integrate fully our divine essence into our human experience in order to become a conscious co-creator with the universe,<br>~ To love and allow to be loved,<br>~ To give 100% to the realization of the Golden Age on Earth,<br>~ To honor the Divinity in all creation,<br>~ To be joyful and innocent as a child,<br>~ To serve all of humanity and live as One Family, with no separation, boundary and borders,<br>~ To live, create and appreciate beauty,<br>~ To walk lightly on Mother Earth and breathe deeply the wisdom of all ages,<br>~ To respect and honor all ancestors,<br>~ To live in peace and harmony,<br>~ To hold holy each moment of existence.",
  },
  {
    id: 6,
    icon: ["fas", "hands-praying"],
    title: "Our Religion",
    subtitle:
      "Religion (from Latin: re-ligare, i.e., re – again + ligare – to bind or to connect) for us means to reconnect with the Oneness of creation.",
    content:
      "We believe we are Star-Beings of Light and our divine essence is Love. As children of our Heavenly Father and Divine Mother we are all unique and sovereign (our Soul Essence), part of a Universal Family and united in the Consciousness of Love. We believe we are multi-dimensional beings and universal citizens. We believe we are the creator of our life’s experiences and we co-create together the ever-unfolding universal life. We believe we come to earth to offer our Soul Gifts in the co-creation of Paradise.",
  },
];
</script>

<template>
  <section
    id="doctrine"
    class="min-h-screen container lg:max-w-6xl mx-auto mt-10 p-10"
  >
    <h1 class="text-center">L.U.B.O.F.</h1>
    <h2 class="text-center">A Pyramid of Light</h2>
    <h2 class="text-center">A Living School of Love</h2>
    <aside
      v-for="{ id, title, subtitle, content, icon } in doctrineList"
      class="inline-flex w-1/3 justify-evenly"
    >
      <TheModal
        :title="title"
        :subtitle="subtitle"
        :content="content"
        :icon="icon"
        :key="id"
      />
    </aside>
  </section>
</template>
