<template>
  <div class="button" :class="theme">
    {{ text }}
    <div class="arrow">→</div>
  </div>
</template>

<script>
export default {
  name: "UserButton",
  props: {
    text: String,
    theme: String,
  },
};
</script>

<style lang="scss" scoped>
.button {
  text-align: left;
  font-size: 14px;
  padding: 15px 25px;
  padding-right: 50px;
  display: block;
  margin: 18px auto;
  border-radius: 2.5px;
  color: #fff;
  background-color: #007abe;
  letter-spacing: 0.5px;
  position: relative;
  cursor: pointer;
  .arrow {
    position: absolute;
    right: 15px;
    top: 13px;
    border: solid 1px #fff;
    border-radius: 100%;
    font-size: 14px;
    height: 24px;
    width: 24px;
    text-align: center;
    line-height: 22px;
  }

  &.plain {
    background-color: transparent;
    color: #000;
    border-bottom: solid 1px #000;
    padding-left: 0;
    border-radius: 0;
    .arrow {
      border: solid 1px #000;
      right: 0;
    }
  }

  &.exhi{
    background-color: transparent;
    color: #000;
    width: 50%;
    display: inline-block;
    .arrow {
      border: solid 1px #000;
    }
    &.pre{
      padding-left: 50px;
      padding-right: 25px;
      .arrow{
        transform: rotate(180deg);
        right: auto;
        left: 15px;
      }
    }
  }
}
</style>
>
