<template>
  <Logo :fullLogo="false" />
  <h1>
    {{ $t("online_exhi") }}
  </h1>
  <p>
    {{ $t("ended") }}
  </p>
</template>

<script>
import Logo from "../components/Logo.vue";

export default {
  name: "Starting",
  components: {
    Logo,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.signup {
  img {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
  }

  color: #00a2d6;
}
</style>
