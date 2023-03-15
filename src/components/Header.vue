<template>
  <header>
    <Logo :fullLogo="false" />
    <Menu />
  </header>
</template>

<script>
import Logo from "./Logo.vue";
import Menu from "./Menu.vue";
export default {
  name: "Header",
  components: {
    Menu,
    Logo,
  },
};
</script>

<style lang="scss" scoped>
header:deep {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  text-align: left;
  display: flex;
  z-index: 5000;
  .logo {
    margin: 0;
    display: inline-block;
  }
  img {
    height: 35px;
    width: auto;
  }
  .menuButton {
    margin-right: 0;
    margin-left: auto;
  }
}
</style>
