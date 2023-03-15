<template>
  <Logo :fullLogo="false" />
  <h1>{{ $t("policy") }}</h1>
  <div class="policyText" v-html="$t('policyText')"></div>
  <form action="">
    <div class="acceptBox">
      <input type="checkbox" id="checkbox" v-model="isAccept" />
      <label for="checkbox">{{ $t("accept") }}</label>
      <p class="alertText" v-if="isNotChecked">{{ $t("acceptRequire") }}</p>
    </div>
    <router-link to="/login">
      <BaseButton theme="" :text="$t('back')" />
    </router-link>
    <BaseButton
      @click="checkAcceptStatus()"
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
      isAccept: false,
      isNotChecked: null,
    };
  },
  methods: {
    checkAcceptStatus() {
      this.isAccept ? (this.isNotChecked = false) : (this.isNotChecked = true);
      if (this.isAccept) {
        this.$router.push("/signup_account");
      }
    },
  },
};
</script>

<style scoped>
.acceptBox {
  position: relative;
  margin-bottom: 5px;
}
.alertText {
  text-align: center;
  width: 100%;
  left: 0;
  top: 15px;
}

.policyText {
  background-color: #fff;
  border: solid 1px #ccc;
  padding: 0 15px;
  max-height: 300px;
  overflow-y: scroll;
  margin: 25px auto;
  position: relative;
}

:deep p {
  text-align: left;
  font-size: 16px;
  font-height: 1.75em;
  letter-spacing: 0.5px;
}
</style>
