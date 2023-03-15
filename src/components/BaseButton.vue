<template>
  <div :class="theme">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    text: String,
    theme: String,
  },
};
</script>

<style lang="scss" scoped>
div {
  text-align: center;
  font-size: 18px;
  padding: 15px 25px;
  display: inline-block;
  margin: 35px 10px;
  border-radius: 10px;
  color: #000;
  background-color: #c4c4c4;
  letter-spacing: 2px;
  cursor: pointer;
  &.yellow {
    background-color: #ffff6d;
  }
  &.yellowBorder {
    background-color: transparent;
    color: #ffff6d;
    border: solid 1px #ffff6d;
  }
  &.purple {
    background-color: #557aff;
    color: #fff;
  }
  &.blue {
    background-color: #007abe;
    color: #fff;
  }
  &.black {
    background-color: #000;
    color: #fff;
  }
  &.blackBorder {
    background-color: transparent;
    border: solid 1px #000;
    
    &.active {
      background-color: #000;
      color: #fff;
    }
  }
  &.gray {
    background-color: #555;
    color: #fff;
  }
  &.full {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
  &.small {
    font-size: 14px;
  }
  &.short {
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 15px 5px;
  }
  &.space-0 {
    margin-top: 0;
    margin-bottom: 15px;
  }
}
</style>
>
