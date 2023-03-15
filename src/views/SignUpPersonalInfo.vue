<template>
  <Logo :fullLogo="false" />
  <h1>
    {{ $t("personalInfoEdit") }}
  </h1>
  <form action="">
    <table>
      <tr>
        <td>
          {{ $t("personalPhoto") }}
        </td>
        <td></td>
      </tr>
      <tr>
        <td>
          <div class="photoSameple"></div>
        </td>
        <td>
          <div @click="uplaodFile" class="uplaodFile fontBold">
            {{ $t("photoUpload") }} <img src="@/assets/upload.svg" alt="" />
          </div>
          <span>
            {{ $t("photoUploadText") }}
          </span>
        </td>
      </tr>
      <tr>
        <td>
          {{ $t("name") }} <span class="alertText">{{ $t("require") }}</span>
        </td>
        <td></td>
      </tr>
      <tr>
        <td class="indentPadding">
          <label for="firstName">
            {{ $t("firstName") }}
          </label>
        </td>
        <td>
          <input id="firstName" type="name" v-model="firstName" />
        </td>
      </tr>
      <tr>
        <td class="indentPadding">
          <label for="lastName">
            {{ $t("lastName") }}
          </label>
        </td>
        <td>
          <input id="lastName" type="name" v-model="lastName" />
        </td>
      </tr>
      <tr>
        <td>
          {{ $t("hurigana") }}
          <span class="alertText">{{ $t("require") }}</span>
        </td>
        <td></td>
      </tr>
      <tr>
        <td class="indentPadding">
          <label for="sei">
            {{ $t("sei") }}
          </label>
        </td>
        <td>
          <input id="sei" type="name" v-model="sei" />
        </td>
      </tr>
      <tr>
        <td class="indentPadding">
          <label for="mei">
            {{ $t("mei") }}
          </label>
        </td>
        <td>
          <input id="mei" type="name" v-model="mei" />
        </td>
      </tr>
      <tr>
        <td>
          {{ $t("gender") }} <span class="alertText">{{ $t("require") }}</span>
        </td>
        <td>
          <input type="radio" id="male" value="male" v-model="gender" />
          <label for="male">{{ $t("male") }}</label> &nbsp;
          <input type="radio" id="female" value="female" v-model="gender" />
          <label for="female">{{ $t("female") }}</label>
        </td>
      </tr>
      <tr>
        <td>
          <label for="phone">
            {{ $t("phoneNumber") }}
          </label>
          <span class="alertText">{{ $t("require") }}</span>
        </td>
        <td>
          <input id="phone" type="phone" v-model="phone" />
        </td>
      </tr>
      <tr>
        <td>
          {{ $t("mailAddress") }}
          <span class="alertText">
            {{ $t("uneditable") }}
          </span>
        </td>
        <td>yadama@osense.jp</td>
      </tr>
      <tr>
        <td>
          <label for="companyName">
            {{ $t("companyName") }}
          </label>
          <span class="alertText">{{ $t("require") }}</span>
        </td>
        <td>
          <input id="companyName" type="text" v-model="companyName" />
        </td>
      </tr>
      <tr>
        <td>
          <label for="companyWebsite">
            {{ $t("companyWebsite") }}
          </label>
        </td>
        <td>
          <input id="companyWebsite" type="text" v-model="companyWebsite" />
        </td>
      </tr>
      <tr>
        <td>
          <label for="occupation">
            {{ $t("occupation") }}
          </label>
        </td>
        <td>
          <input id="occupation" type="text" v-model="occupation" />
        </td>
      </tr>
      <tr>
        <td>
          <label for="position">
            {{ $t("position") }}
          </label>
        </td>
        <td>
          <input id="position" type="text" v-model="position" />
        </td>
      </tr>
    </table>

    <router-link to="/signup_account">
      <BaseButton theme="" :text="$t('back')" />
    </router-link>
    <router-link to="/signup_check">
      <BaseButton theme="yellow" :text="$t('next')" />
    </router-link>
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
      firstName: "",
      lastName: "",
      sei: "",
      mei: "",
      gender: "",
      phone: "",
    };
  },
  methods: {
    uplaodFile() {
      console.log("upload");
    },
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
      &:first-child {
        width: 140px;
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
.photoSameple {
  height: 120px;
  width: 120px;
  background-color: #ccc;
}
.uplaodFile {
  margin-bottom: 15px;
  img {
    width: 22px;
  }
}
.alertText {
  line-height: 17px;
  margin-left: 5px;
}
.indentPadding {
  padding-left: 20px;
}
</style>
