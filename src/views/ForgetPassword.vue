<template>
  <Logo :fullLogo="false" />
  <h1>{{ $t("settingPassword") }}</h1>
  <form action="">
    <div class="alignLeft">
      <label for="username"> {{ $t("account") }}</label>
      <input
        id="username"
        type="username"
        v-model="username"
        autocomplete="username"
        :placeholder="$t('forgetPasswordPlaceholder')"
      />
    </div>
    <div>
      <router-link to="/resetpassword">
        <BaseButton
          @click="restPassword"
          theme="yellow"
          :text="$t('sendCheckMail')"
        />
      </router-link>
    </div>
  </form>
</template>

<script>
import Logo from "../components/Logo.vue";
import BaseButton from "../components/BaseButton.vue";

export default {
  name: "ForgetPassword",
  components: {
    Logo,
    BaseButton,
  },
  data() {
    return {
      username: "",
    };
  },
  methods: {
    restPassword() {
      console.log(this.username);
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 45px;
}
div {
  margin-bottom: 35px;
}
input::placeholder {
  font-size: 14px;
}
</style>
