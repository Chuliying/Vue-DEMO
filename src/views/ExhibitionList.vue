<template>
  <div class="listContainer">
    <h2>ファシリティ＆サービスエリア</h2>
    <div
      class="companyContainer"
      :key="company.id"
      v-for="company in companies"
    >
      <img :src="company.img" :alt="company.name" />
      <router-link to="/user/exhibition">
        <UserButton theme="plain" :text="company.name" />
      </router-link>
    </div>
    <ListNav />
  </div>
</template>

<script>
import UserButton from "../components/UserButton.vue";
import ListNav from "../components/ListNav.vue";
export default {
  name: "ExhibitionList",
  components: {
    UserButton,
    ListNav,
  },
  data() {
    return {
      companies: [
        {
          img: require("@/assets/logo.jpg"),
          name: "グロ株式会社",
        },
        {
          img: require("@/assets/logo.jpg"),
          name: "株式会社ダイヤテクニカ",
        },
        {
          img: require("@/assets/logo.jpg"),
          name: "グロ株式会社",
        },
        {
          img: require("@/assets/logo.jpg"),
          name: "株式会社ダイヤテクニカ",
        },
        {
          img: require("@/assets/logo.jpg"),
          name: "グロ株式会社",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 45px;
}
.listContainer {
  padding-bottom: 100px;
}
.companyContainer {
  text-align: left;
  margin: 25px auto;
  img {
    width: 60px;
    margin-bottom: -10px;
  }
}
</style>
