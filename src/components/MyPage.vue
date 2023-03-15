<template>
  <div class="menuPage">
    <h2>
      {{ $t("myPage") }}
    </h2>
    <div @click="togglePage" class="closeButton"></div>
    <table>
      <tr>
        <td>
          {{ $t("personalPhoto") }}
        </td>
        <td></td>
      </tr>
      <tr>
        <td>
          <img src="@/assets/profile_img.jpg" alt="" />
        </td>
        <td></td>
      </tr>
      <tr>
        <td>
          {{ $t("name") }}
        </td>
        <td>山田 太郎</td>
      </tr>
      <tr>
        <td>
          {{ $t("hurigana") }}
        </td>
        <td>ヤマダ タロウ</td>
      </tr>
      <tr>
        <td>
          {{ $t("gender") }}
        </td>
        <td>
          {{ $t("male") }}
        </td>
      </tr>
      <tr>
        <td>
          {{ $t("phoneNumber") }}
        </td>
        <td>080-2345-6789</td>
      </tr>
      <tr>
        <td>
          {{ $t("mail") }}
        </td>
        <td>yadama@osense.jp</td>
      </tr>
      <tr>
        <td>
          {{ $t("companyName") }}
        </td>
        <td>株式会社OSENSE</td>
      </tr>
      <tr>
        <td>
          {{ $t("companyWebsite") }}
        </td>
        <td>www.companysite.jp</td>
      </tr>
      <tr>
        <td>
          {{ $t("occupation") }}
        </td>
        <td>教育関係</td>
      </tr>
      <tr>
        <td>
          {{ $t("position") }}
        </td>
        <td>開発 役員</td>
      </tr>
    </table>
    <div class="alignCenter">
      <BaseButton theme="yellow" :text="$t('edit')" />
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
  name: "MyPage",
  components: {
    BaseButton,
  },
  methods: {
    togglePage() {
      this.$emit("toggle-my-page");
    },
  },
};
</script>

<style lang="scss" scoped>

table {
  max-width: 300px;
  margin: auto;
  tr {
    text-align: left;

    td {
      vertical-align: middle;
      font-size: 15px;
      padding: 15px 10px 15px 0;
      &:first-child {
        font-size: 14px;
        color: #eee;
      }
      img {
        width: 100%;
        height: auto;
      }
      &:first-child {
        min-width: 145px;
        padding-right: 15px;
      }
      input {
        margin-bottom: 0;
        padding: 6px 12px;
      }
      label {
        margin-bottom: 0;
      }
    }
  }
  span {
    font-size: 12px;
  }
}
.indentPadding {
  padding-left: 20px;
}
</style>
