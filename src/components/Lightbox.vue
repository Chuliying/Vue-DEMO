<template>
  <div class="lightbox" :style="{ marginTop: topValue + 'px' }">
    <p>
      {{ text }}
    </p>
    <div v-if="btn === 'double'">
      <BaseButton
        @click="sendEmit('lightbox-emit', boxType, true)"
        theme="black short"
        :text="$t('yes')"
      />
      <BaseButton
        @click="sendEmit('lightbox-emit', boxType, false)"
        theme="blackBorder short"
        :text="$t('no')"
      />
    </div>
    <div v-if="btn === 'single'">
      <BaseButton
        @click="sendEmit('lightbox-emit', boxType, false)"
        theme="black short"
        :text="$t('close')"
      />
    </div>
  </div>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";
export default {
  name: "Lightbox",
  components: {
    BaseButton,
  },
  props: {
    text: String,
    btn: String,
    boxType: String,
  },
  data() {
    return {
      topValue: 0,
    };
  },
  mounted() {
    const _WH = window.innerHeight;
    const lightbox = document.querySelector(".lightbox");
    const _H = lightbox.offsetHeight;
    const _topValue = (_WH - _H) / 2;
    this.topValue = _topValue;
  },
  methods: {
    sendEmit(b, boxType, sendStatus) {
      this.$emit(b, { boxType, sendStatus });
    },
  },
};
</script>

<style lang="scss" scoped>
.lightbox {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.95);
  border: solid 2px #000;
  top: 0;
  left: 5%;
  width: 90%;
  z-index: 30;
  padding: 35px;
}
</style>
