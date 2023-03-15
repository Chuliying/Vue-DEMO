<template>
  <div class="">
    <div class="container">
      <router-view @userpage-trigger="userPageTrigger"></router-view>
      <Copyright v-if="!isUserPage" />
    </div>
    <div class="bg" :class="{ userPage: isUserPage }"></div>
  </div>
</template>

<script>
import Copyright from "./components/Copyright.vue";
export default {
  name: "App",
  data() {
    return {
      isUserPage: false,
    };
  },
  components: {
    Copyright,
  },
  methods: {
    userPageTrigger() {
      this.isUserPage = !this.isUserPage;
    },
  },
};
</script>
<style lang="scss" scoped>
.blackTheme:deep {
  h1,
  p,
  label,
  input {
    color: #fff;
  }
  .policyText p {
    color: #000;
  }
  .alertText {
    color: red;
  }
  .bg {
    background: #000;
  }
}
</style>
