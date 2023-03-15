<template>
  <Logo :fullLogo="false" />
  <h1>
    {{ $t("personalInfoCheck") }}
  </h1>
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
        {{ $t("mailAddress") }}
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
   <router-link to="/signup_personal">
      <BaseButton theme="" :text="$t('back')" />
    </router-link>
    <router-link to="/signup_finished">
      <BaseButton theme="yellow" :text="$t('confirm')" />
    </router-link>
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
};
</script>

<style lang="scss" scoped>
table {
  tr {
    text-align: left;
    td {
      vertical-align: middle;
      font-size: 15px;
      padding: 15px 10px 15px 0;
      img {
        width: 100%;
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
