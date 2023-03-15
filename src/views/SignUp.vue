<template>
  <Logo :fullLogo="false" />
  <BaseButton @click="submit()" theme="yellow" :text="$t('login')" />
</template>

<script>
import Logo from "../components/Logo.vue";
import BaseButton from "../components/BaseButton.vue";
export default {
    name: "",
  components: {
    Logo,
    BaseButton,
  },
}
</script>

<style>

</style>