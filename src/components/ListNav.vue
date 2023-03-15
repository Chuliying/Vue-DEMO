<template>
  <div class="navContainer">
    <div>
      <router-link to="/user/landing">
        {{ $t("preArea") }}
      </router-link>
    </div>
    <div>
      <router-link to="/user/landing">
        {{ $t("nextArea") }}
      </router-link>
    </div>
    <div>
      <router-link to="/user/landing">
        {{ $t("backToEntry") }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListNav",
};
</script>

<style lang="scss" scoped>
.navContainer {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  > div {
    padding: 15px 0;
    text-align: center;
    a{
        color: #000;
    }
    &:first-child {
      background-color: #c4c4c4;
      width: 50%;
    }
    &:nth-child(2) {
      background-color: #ffff6d;
      width: 50%;
    }
    &:last-child {
      background-color: #000;
      width: 100%;
      a {
        color: #fff;
      }
    }
  }
}
</style>
