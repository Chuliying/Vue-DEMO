<template>
  <Logo :fullLogo="false" />

  <p>
    {{ $t("resetPasswordText") }}
  </p>
  <router-link to="/login">
    <BaseButton theme="" :text="$t('back')" />
  </router-link>
</template>

<script>
import Logo from "../components/Logo.vue";
import BaseButton from "../components/BaseButton.vue";
export default {
  name: "ResetPassword",
  components: {
    Logo,
    BaseButton,
  },
};
</script>

<style scoped>
p{
    font-size: 18px;
    line-height: 1.65em;
    letter-spacing: 0.5px;
    text-align: left;
    margin: 60px auto;
}
</style>
