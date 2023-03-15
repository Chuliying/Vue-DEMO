<template>
  <div class="menuPage">
    <h2>
      {{ $t("personalCard") }}
    </h2>
    <p>
      {{ $t("myCardText") }}
    </p>
    <hr>
    <div @click="togglePage" class="closeButton"></div>
    <div class="card">
      <div class="img">
        <img src="@/assets/profile_img.jpg" alt="" />
        <img class="companyLogo" src="@/assets/logo.jpg" alt="" />
      </div>
      <div class="info">
        <p class="companyName">OSENSE Technology</p>
        <p class="title">Technical Leader</p>
        <p class="name">Edwin</p>
        <p class="email">ray@vbipjapan.com</p>
        <p class="phone">080-095-7957</p>
      </div>
    </div>
    <div class="alignCenter">
      <BaseButton @click="togglePage" theme="" :text="$t('back')" />
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
  name: "MyPage",
  components: {
    BaseButton,
  },
  methods: {
    togglePage() {
      this.$emit("toggle-my-card");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
