<template>
  <div @click="toggleMenu" class="menuButton">
    <div :class="{ open: isOpen }" id="hamburger">
      <div></div>
    </div>
  </div>
  <transition name="fade">
    <div v-show="isOpen" class="menuContainer">
      <h2>AAA様、 {{ $t("welcome") }}</h2>
      <ul>
        <router-link to="/user/search">
          <li @click="toggleMenu">
            {{ $t("search") }}
          </li>
        </router-link>
        <li @click="toggleMyCard">{{ $t("personalCard") }}</li>
        <li @click="toggleAllCards">{{ $t("allCards") }}</li>
        <li @click="toggleMyPage" class="noBorder">{{ $t("myPage") }}</li>
      </ul>
      <select v-model="$i18n.locale">
        <option selected="true" value="jp">日本語</option>
        <option value="en">中文</option>
        <option value="zh-tw">English</option>
      </select>
      <div>
        <router-link to="/">
          <BaseButton theme="yellowBorder" :text="$t('logOut')" />
        </router-link>
      </div>
    </div>
  </transition>
  <MyPage @toggle-my-page="toggleMyPage" v-if="myPage" />
  <MyCard @toggle-my-card="toggleMyCard" v-if="myCard" />
  <AllCards @toggle-all-cards="toggleAllCards" v-if="allCards" />
</template>

<script>
import BaseButton from "./BaseButton.vue";
import MyPage from "./MyPage";
import MyCard from "./MyCard";
import AllCards from "./AllCards";
export default {
  name: "Menu",
  components: {
    BaseButton,
    MyPage,
    MyCard,
    AllCards,
  },
  data() {
    return {
      isOpen: false,
      selected: null,
      myPage: false,
      myCard: false,
      allCards: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    toggleMyPage() {
      this.myPage = !this.myPage;
    },
    toggleMyCard() {
      this.myCard = !this.myCard;
    },
    toggleAllCards() {
      this.allCards = !this.allCards;
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.menuButton {
  z-index: 10001;
}
.menuContainer {
  padding-top: 60px;
  left: 0;
  top: 0;
  z-index: 10000;
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #555;
  color: #fff;
  text-align: center;
  ul {
    max-width: 300px;
    margin: 45px auto;
    padding: 25px 0;
    a {
      color: #fff;
    }
    li {
      padding: 20px 0;
      letter-spacing: 0.5px;
      border-bottom: solid 1px #fff;
      list-style: none;

      &.noBorder {
        border: 0;
      }
    }
  }
  select {
    background-color: transparent;
    color: #fff;
  }
}
#hamburger {
  opacity: 0.9;
  cursor: pointer;
  transition: opacity 0.25s linear;
  width: clamp(1.5rem, 2vw + 1.1rem, 6rem);
  height: clamp(2rem, 1.4vw + 1.7rem, 5rem);
  display: flex;
  align-items: center;
  &:hover {
    opacity: 1;
  }
  div,
  div:after,
  div:before {
    background-color: #000;
    border-radius: 10px;
    width: clamp(1.5rem, 2vw + 1.1rem, 6rem);
    height: clamp(0.2rem, 0.3vw + 0.1rem, 0.8rem);
    transition: all 0.15s linear;
  }
  div:before,
  div:after {
    content: "";
    position: absolute;
  }
  div:before {
    transform: translateY(-200%);
  }
  div:after {
    transform: translateY(200%);
  }

  &.open {
    div {
      background: transparent;
    }
    div:before {
      background-color: #fff;
      transform: rotate(45deg);
    }
    div:after {
      background-color: #fff;
      transform: rotate(-45deg);
    }
  }
}
</style>
