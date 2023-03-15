<template>
  <div>
    <h2>
      {{ $t("search") }}
    </h2>
    <h4>
      {{ $t("searchText") }}
    </h4>
    <div class="alignLeft">
      <input type="search" />
      <img class="searchButton" src="@/assets/search.png" alt="search-icon" />
    </div>
    <div class="resaultContainer">
      <div
        @click="(e) => e.currentTarget.classList.toggle('show')"
        class="eachType show"
      >
        <div class="title">
          <h4>フィットネスマシーン＆プログラム</h4>
        </div>
        <div class="content">
          <div class="flex">
            <div
              :key="n"
              v-for="n in 10"
              class="eachCompany"
              :style="{ minWidth: containerWidth + 'px' }"
            >
              <img src="@/assets/logo.jpg" alt="" />
              <router-link to="/user/exhibition">
                <div class="arrow">→</div>
              </router-link>
              <h4>株式会社マーケティングデザイン</h4>
              <p>
                会社紹介のテキストが入ります。会社紹介のテキストが入ります。会社紹介のテキストが入ります。会社紹介のテキストが入ります。会社紹介のテキストが入ります
              </p>
            </div>
          </div>
          <div class="tip">{{ $t("swipeMore") }}</div>
        </div>
      </div>
      <div
        @click="(e) => e.currentTarget.classList.toggle('show')"
        class="eachType"
      >
        <div class="title">
          <h4>ビューティー＆ダイエット</h4>
        </div>
        <div class="content">
          <div class="flex">
            <div
              :key="n"
              v-for="n in 10"
              class="eachCompany"
              :style="{ minWidth: containerWidth + 'px' }"
            >
              <img src="@/assets/logo.jpg" alt="" />
              <router-link to="/user/exhibition">
                <div class="arrow">→</div>
              </router-link>
              <h4>株式会社マーケティングデザイン</h4>
              <p>
                会社紹介のテキストが入ります。会社紹介のテキストが入ります。会社紹介のテキストが入ります。会社紹介のテキストが入ります。会社紹介のテキストが入ります
              </p>
            </div>
          </div>
          <div class="tip">{{ $t("swipeMore") }}</div>
        </div>
      </div>
      <div
        @click="(e) => e.currentTarget.classList.toggle('show')"
        class="eachType"
      >
        <div class="title">
          <h4>フード＆ドリンク</h4>
        </div>
        <div class="content">
          <div class="flex">
            <div
              :key="n"
              v-for="n in 10"
              class="eachCompany"
              :style="{ minWidth: containerWidth + 'px' }"
            >
              <img src="@/assets/logo.jpg" alt="" />
              <router-link to="/user/exhibition">
                <div class="arrow">→</div>
              </router-link>
              <h4>株式会社マーケティングデザイン</h4>
              <p>
                会社紹介のテキストが入ります。会社紹介のテキストが入ります。会社紹介のテキストが入ります。会社紹介のテキストが入ります。会社紹介のテキストが入ります
              </p>
            </div>
          </div>
          <div class="tip">{{ $t("swipeMore") }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      containerWidth: 0,
    };
  },
  mounted() {
    const _w = document.querySelector(".resaultContainer").offsetWidth;
    this.containerWidth = _w;
  },
};
</script>

<style lang="scss" scoped>
.searchButton {
  margin-left: 15px;
}
.resaultContainer {
  margin-top: 25px;
  .eachType {
    margin-bottom: 25px;
    .title {
      border-top: solid 1px #000;
      border-bottom: solid 1px #000;
      text-align: left;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        top: 20px;
        right: 13px;
        width: 12px;
        height: 12px;
        border-left: 2px solid #000;
        border-bottom: 2px solid #000;
        transform: rotate(-45deg);
      }
    }
    .content {
      max-width: 100%;
      transition: all 0.35s;
      height: 0;
      overflow: hidden;
      .flex {
        padding: 25px 0;
        display: flex;
        overflow: auto;
        scroll-snap-type: x mandatory;
        .eachCompany {
          scroll-snap-align: start;
          text-align: left;
          padding: 15px;
          position: relative;
          img {
            width: 60px;
          }
          p {
            color: #555;
            font-size: 14px;
            text-align: left;
          }
        }
      }
    }
    &.show {
      .title {
        &:before {
          transform: rotate(135deg);
        }
      }
      .content {
        height: auto;
      }
    }
  }
}
.arrow {
  position: absolute;
  right: 0;
  top: 60px;
  display: inline-block;
  border: solid 1px #000;
  border-radius: 100%;
  font-size: 14px;
  height: 24px;
  width: 24px;
  text-align: center;
  line-height: 22px;
  color: #000;
}
.tip {
  border: solid 1px #000;
  padding: 10px 25px;
  display: inline-block;
  border-radius: 25px;
  font-size: 14px;
  margin: 25px auto;
}
</style>
