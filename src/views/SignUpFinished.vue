<template>
  <Logo :fullLogo="false" />
   <h1>
    {{ $t("signUpFinished") }}
  </h1>
  <form action="">
    <div class="alignLeft">
      <label for="username"> {{ $t("account") }}</label>
      <input
        id="username"
        type="username"
        v-model="username"
        autocomplete="username"
      />
    </div>
    <div class="alignLeft">
      <label for="password"> {{ $t("password") }}</label>
      <input
        id="password"
        autocomplete="current-password"
        type="password"
        v-model="password"
      />
    </div>
    <div>
      <router-link to="/user">
        <BaseButton @click="submit()" theme="yellow" :text="$t('login')" />
      </router-link>
    </div>
  </form>
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
};
</script>

<style></style>
