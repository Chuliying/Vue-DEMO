<template>
  <Header />
  <div class="userContainer">
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "User",
  components: {
    Header,
  },
  mounted() {
    this.$nextTick(() => {
      this.$emit("userpage-trigger");
    });
  },
  unmounted() {
    this.$nextTick(() => {
      this.$emit("userpage-trigger");
    });
  },
};
</script>

<style scoped>
    .userContainer{
        padding-top: 60px;
    }
</style>
