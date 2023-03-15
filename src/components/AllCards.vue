<template>
  <div class="menuPage">
    <h2>
      {{ $t("allCards") }}
    </h2>
    <div @click="togglePage" class="closeButton"></div>
    <div class="">
      <div v-for="(card, index) in cards" :key="index">
        <div class="img">
          <img :src="card.logo" :alt="card.company" />
        </div>
        <div class="info">
          <p class="companyName">{{ card.company }}</p>
          <p class="title">{{ card.title }}</p>
          <p class="name">{{ card.name }}</p>
          <p class="phone">{{ card.phone }}</p>
        </div>
      </div>
    </div>
    <div class="alignCenter">
      <BaseButton theme="yellow" :text="$t('sentMailWithExcel')" />
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
  name: "AllCards",
  components: {
    BaseButton,
  },
  methods: {
    togglePage() {
      this.$emit("toggle-all-cards");
    },
  },
  data() {
    return {
      cards: [
        {
          company: "Company",
          title: "Person",
          name: "Peter",
          phone: "091234567",
          logo: require("@/assets/logo.jpg"),
        },
        {
          company: "Company",
          title: "Person",
          name: "Peter",
          phone: "091234567",
          logo: require("@/assets/logo.jpg"),
        },
        {
          company: "Company",
          title: "Person",
          name: "Peter",
          phone: "091234567",
          logo: require("@/assets/logo.jpg"),
        },
      ],
    };
  },
};
</script>

