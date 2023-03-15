<template>
  <Logo :fullLogo="false" />
  <h1>
    {{ $t("newAccount") }}
  </h1>
  <form action="">
    <div class="alignLeft">
      <label for="email"> {{ $t("yourEmailAddress") }}</label>
      <input
        id="email"
        type="email"
        v-model="email"
        :placeholder="$t('yourEmailAddressPlaceholder') + '@gmail.com'"
      />
    </div>
    <div class="alignLeft">
      <label for="password"> {{ $t("password") }}</label>
      <input
        id="password"
        type="password"
        v-model="password"
      />
      <p>
        {{ $t("passwordRules") }}
      </p>
    </div>
    <div class="alignLeft">
      <label for="checkPassword"> {{ $t("passwordCheck") }}</label>
      <input
        id="checkPassword"
        type="password"
        v-model="checkPassword"
      />
      <p>
        {{ $t("passwordCheckText") }}
      </p>
    </div>
    <router-link to="/signup_policy">
      <BaseButton theme="" :text="$t('back')" />
    </router-link>
    <BaseButton
      @click="isPasswordTheSame()"
      theme="yellow"
      :text="$t('next')"
    />
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
  data() {
    return {
      email: "",
      password: "",
      checkPassword: ""
    };
  },
  methods: {
    isPasswordTheSame(){
      this.password !== this.checkPassword ? console.log("fail") : this.$router.push('/signup_personal')
    },
  }
};
</script>

<style scoped>
.alignLeft p {
  padding-top: 0;
  text-align: left;
  font-size: 14px;
  margin-top: -10px;
  margin-bottom: 25px;
}
</style>
