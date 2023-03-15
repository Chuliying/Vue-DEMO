<template>
  <Logo :fullLogo="true" />
  <p>{{ $t("welcome") }}</p>
  <h1>{{ $t("online_exhi") }}</h1>
  <router-link to="/login">
    <BaseButton theme="yellow" :text="$t('entry')" />
  </router-link>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";
import Logo from "../components/Logo.vue";

export default {
  name: "Home",
  components: {
    BaseButton,
    Logo,
  },
};
</script>

<style lang="scss" scpoe>
p,
h1 {
  text-align: center;
}
</style>
