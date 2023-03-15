<template>
  <Logo :fullLogo="false" />
  <h1>
    {{ $t("online_exhi") }}
  </h1>

  <h2>開催2022年3月20日まで、あと</h2>
  <div class="dayAlert">
    {{remainDays}} 日
  </div>
   <div>
      <router-link to="/signup_policy">
        <span class="signup">
          <img src="@/assets/newaccount.svg" /> {{ $t("signUp") }}
        </span>
      </router-link>
    </div>
</template>

<script>
import Logo from "../components/Logo.vue";

export default {
  name: "Starting",
  components: {
    Logo,
  },
  data() {
    return {
      remainDays: null,
    };
  },
  methods: {},
  mounted() {
    const endDate = new Date("Mar 20, 2022 10:00:00").getTime();
    const now = new Date().getTime();
    const t = endDate - now;
    console.log(endDate,now,t);
    if (t >= 0) {
      let days = Math.floor(t / (1000 * 60 * 60 * 24));
      console.log(days);
      this.remainDays = days;
    }
  },
};
</script>

<style lang="scss" scoped>
.dayAlert{
  font-size: 60px;
  font-weight: bold;
  margin: 45px auto 100px;
}
.signup {
  img {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
  }
  font-size: 14px;
  color: #00a2d6;
}
</style>
