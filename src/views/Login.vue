<template>
  <Logo :fullLogo="false" />
  <h1>
    {{ $t("loginPage") }}
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
    <div class="alignLeft">
      <router-link to="/forgetpassword">
        <span> <i>?</i> {{ $t("forgetPassword") }} </span>
      </router-link>
    </div>
    <div>
      <router-link to="/user/landing">
        <BaseButton @click="submit()" theme="yellow" :text="$t('login')" />
      </router-link>
    </div>
    <div>
      <router-link to="/signup_policy">
        <span class="signup">
          <img src="@/assets/newaccount.svg" /> {{ $t("signUp") }}
        </span>
      </router-link>
    </div>
  </form>
</template>

<script>
import Logo from "../components/Logo.vue";
import BaseButton from "../components/BaseButton.vue";

export default {
  name: "Login",
  components: {
    Logo,
    BaseButton,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submit() {
      console.log(this.account, this.password);
    },
  },
};
</script>

<style lang="scss" scoped>

span {
  font-size: 12px;
  margin-bottom: 15px;
  i {
    display: inline-block;
    background-color: #c4c4c4;
    border-radius: 100%;
    height: 20px;
    width: 20px;
    line-height: 20px;
    text-align: center;
    margin-right: 10px;
    font-style: normal;
  }
}


.signup {
  img {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
  }

  color: #00a2d6;
}
</style>
