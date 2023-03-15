<template>
  <div>
    <h4>ファシリティ＆サービスエリア</h4>
    <h2>株式会社プロフェッショナルトレーナーズチーム</h2>
    <BaseButton theme="gray" :text="$t('toCompanyWebsite')" />
    <div class="iframeContainer">
      <iframe
        width="100%"
        src="https://www.youtube.com/embed/fvp3FEZPh_c"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <BaseButton theme="blackBorder small short" :text="$t('vedio') + '1'" />
    <BaseButton theme="blackBorder small short" :text="$t('vedio') + '2'" />
    <BaseButton
      theme="blackBorder small short active"
      :text="$t('vedio') + '3'"
    />
    <hr />
    <h2>{{ $t("companyProfile") }}</h2>
    <BaseButton theme="blue full small" :text="$t('companyProfilePDF')" />
    <h2>{{ $t("staffCards") }}</h2>
    <div class="staffCardsContainer">
      <div :key="staff.id" v-for="staff in staffs">
        <img src="@/assets/staff.svg" alt="Staff Icon" />
        <h5>
          {{ staff.title }}
        </h5>
        <h2>
          {{ staff.name }}
        </h2>
        <BaseButton
          @click="toggleCheckCardExchange"
          theme="black small short space-0"
          :text="$t('cardExchange')"
        />
      </div>
    </div>
    <h2>{{ $t("pruductIntroduction") }}</h2>
    <BaseButton theme="blackBorder short small" :text="$t('material') + '1'" />
    <BaseButton theme="blackBorder short small" :text="$t('material') + '2'" />
    <BaseButton
      theme="blackBorder short small active"
      :text="$t('material') + '3'"
    />
    <BaseButton theme="blue full small" :text="$t('getMaterial')" />
    <BaseButton
      @click="toggleReservation"
      theme="purple"
      :text="$t('matchReservation')"
    />
    <p>
      {{ $t("matchReservationText") }}
    </p>
    <hr />
    <BaseButton theme="blue full small space-0" :text="$t('AR')" />
    <BaseButton theme="blue full small space-0" :text="$t('EC')" />
    <BaseButton theme="blue full small space-0" text="NFT" />
    <router-link to="/user/q&a">
      <BaseButton theme="gray small full" :text="$t('goToQA')" />
    </router-link>
    <div>
      <UserButton theme="exhi pre" :text="$t('preExhi')" />
      <UserButton theme="exhi" :text="$t('nextExhi')" />
    </div>
    <Lightbox
      @lightbox-emit="lightboxCheck"
      v-if="checkReservation"
      :text="$t('reservationConfirm')"
      boxType="reservation-check"
      btn="double"
    />
    <Lightbox
      @lightbox-emit="lightboxCheck"
      v-if="resevationDone"
      :text="$t('reservationDone')"
      boxType="reservation-done"
      btn="single"
    />
    <Lightbox
      @lightbox-emit="lightboxCheck"
      v-if="checkCardExchange"
      :text="$t('exchangeConfirm')"
      boxType="exchange-confirm"
      btn="double"
    />
  </div>
</template>

<script>
import UserButton from "../components/UserButton.vue";
import BaseButton from "../components/BaseButton.vue";
import Lightbox from "../components/Lightbox.vue";
export default {
  name: "Exhibition",
  components: {
    UserButton,
    BaseButton,
    Lightbox,
  },
  data() {
    return {
      staffs: [
        {
          name: "古里 真由美",
          title: "COO/最高執行責任者",
        },
        {
          name: "古里由美",
          title: "CEO/最高執行責任者",
        },
        {
          name: "里 真由美",
          title: "CHO/最高執行責任者",
        },
      ],
      checkReservation: false,
      resevationDone: false,
      checkCardExchange: false,
    };
  },
  methods: {
    toggleReservation() {
      this.checkReservation = !this.checkReservation;
    },
    toggleReservationDone() {
      this.resevationDone = !this.resevationDone;
    },
    toggleCheckCardExchange() {
      this.checkCardExchange = !this.checkCardExchange;
    },
    lightboxCheck(e) {
      if (e.boxType == "reservation-check") {
        this.toggleReservation();
        if (e.sendStatus == true) {
          this.toggleReservationDone();
        }
      }

      if (e.boxType == "reservation-done") {
        this.toggleReservationDone();
        console.log("confirmed");
      }
      if (e.boxType == "exchange-confirm") {
        this.toggleCheckCardExchange();
        if (e.sendStatus == true) {
          console.log("sent card");
        }
      }
    },
  },
};
</script>

<style lang="scss" scroped>
.staffCardsContainer {
  margin: 45px auto;
  > div {
    width: 50%;
    display: inline-block;
    margin-bottom: 35px;
    h5 {
      font-weight: normal;
    }
    h2 {
      margin-top: -15px;
    }
  }
}
</style>
