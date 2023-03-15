<template>
  <div class="iframeContainer">
    <iframe
      width="100%"
      src="https://www.youtube.com/embed/fvp3FEZPh_c"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>

  <div :key="show.id" v-for="show in nowShows">
    <router-link :to="show.url">
      <UserButton theme="" :text="show.name" />
    </router-link>
  </div>
  <ul>
    <li
      @click="sliceCurrentPage(n - 1)"
      :class="{ active: n - 1 == currentPage }"
      :key="n"
      v-for="n in allPages"
    >
      {{ n }}
    </li>
  </ul>
  <BaseButton theme="yellow full" :text="$t('qa')" />
</template>

<script>
import UserButton from "../components/UserButton.vue";
import BaseButton from "../components/BaseButton.vue";

export default {
  name: "UserLanding",
  components: {
    UserButton,
    BaseButton,
  },
  data() {
    return {
      shows: [
        {
          name: "ファシリティ＆サービスエリア",
          url: "/user/exhibition_list",
        },
        {
          name: "フード＆ドリンク",
          url: "/user/exhibition_list",
        },
        {
          name: "ファシリティ＆サービスエリア",
          url: "/user/exhibition_list",
        },
        {
          name: "フード＆ドリンク",
          url: "/user/exhibition_list",
        },
        {
          name: "ファシリティ＆サービスエリア",
          url: "/user/exhibition_list",
        },
        {
          name: "フード＆ドリンク",
          url: "/user/exhibition_list",
        },
        {
          name: "ファシリティ＆サービスエリア",
          url: "/user/exhibition_list",
        },
        {
          name: "フード＆ドリンク",
          url: "/user/exhibition_list",
        },
        {
          name: "ファシリティ＆サービスエリア",
          url: "/user/exhibition_list",
        },
        {
          name: "フード＆ドリンク",
          url: "/user/exhibition_list",
        },
        {
          name: "ファシリティ＆サービスエリア",
          url: "/user/exhibition_list",
        },
        {
          name: "フード＆ドリンク",
          url: "/user/exhibition_list",
        },
        {
          name: "ファシリティ＆サービスエリア",
          url: "/user/exhibition_list",
        },
        {
          name: "フード＆ドリンク",
          url: "/user/exhibition_list",
        },
        {
          name: "ファシリティ＆サービスエリア",
          url: "/user/exhibition_list",
        },
        {
          name: "フード＆ドリンク",
          url: "/user/exhibition_list",
        },
      ],
      nowShows: [],
      arrayLength: 0,
      currentPage: 0,
      limitShow: 5,
      allPages: 0,
    };
  },
  mounted() {
    const length = this.shows.length;
    this.arrayLength = length;
    this.allPages = Math.ceil(length / this.limitShow);
    this.sliceCurrentPage(this.currentPage);
    console.log(this.arrayLength, this.allPages, this.currentPage);
  },
  methods: {
    sliceCurrentPage(n) {
      this.currentPage = n;
      this.nowShows = this.shows.slice(n * 5, (n + 1) * 5);
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  margin-top: 35px;
  list-style: none;
  padding: 0;
  li {
    display: inline-block;
    padding: 8px;
    color: #aaa;
    font-size: 17px;
    &.active {
      color: #000;
    }
  }
}
</style>
