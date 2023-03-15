<template>
  <div>
    <h2>
      {{ $t("Q&A") }}
    </h2>
    <hr />
    <form action="">
      <div class="alignLeft">
        <p>
          {{ $t("QARequire") }}
        </p>
        <div>
          <label for="companyname"> {{ $t("QAcompanyName") }}</label>
          <input id="companyname" type="name" v-model="companyname" />
        </div>
        <div>
          <label for="title"> {{ $t("QAtitle") }}</label>
          <input id="title" type="text" v-model="companyname" />
        </div>
        <div>
          <label for="name"> {{ $t("QAName") }}</label>
          <input id="name" type="name" v-model="name" />
        </div>
        <div>
          <label for="phone"> {{ $t("QAPhone") }}</label>
          <input id="phone" type="phone" v-model="phone" />
        </div>
        <div>
          <label for="mail"> {{ $t("QAEmail") }}</label>
          <input id="mail" type="mail" v-model="mail" />
        </div>
        <h2>
          {{ $t("QAText") }}
        </h2>
        <div>
          <input type="checkbox" id="checkbox" />
          <label for="checkbox"> {{ $t("QAmoreInfo") }}</label>
        </div>
        <div>
          <input type="checkbox" id="checkbox2" />
          <label for="checkbox2"> {{ $t("QAreservation") }}</label>
        </div>
        <div>
          <input type="checkbox" id="checkbox3" />
          <label for="checkbox3"> {{ $t("QArequest") }}</label>
        </div>
        <div>
          <input type="checkbox" id="checkbox4" />
          <label for="checkbox4"> {{ $t("QAproduct") }}</label>
        </div>
        <div>
          <input type="checkbox" id="checkbox5" />
          <label for="checkbox5"> {{ $t("QAother") }}</label>
        </div>
        <p>
          {{ $t("QAContent") }}
        </p>
        <textarea name="content" id="qacontent" v-model="content"></textarea>
        <div class="alignCenter">
          <BaseButton theme="" :text="$t('back')" />
          <BaseButton theme="yellow" :text="$t('send')" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";
export default {
  name: "Q&A",
  components: {
    BaseButton,
  },
  data() {
    return {
      companyname: "",
      name: "",
      phone: "",
      title: "",
      email: "",
      content: "",
    };
  },
};
</script>

<style scoped>
p {
  text-align: left;
  font-size: 14px;
}
</style>
