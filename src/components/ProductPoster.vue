<template>
  <div class="poster">
    <img src="/src/assets/images/pic_background.png" class="poster__img" />
    <div class="poster__content">
      <h3 class="poster__content-title">Новая коллекция французских авторов</h3>
      <p class="poster__content-text">
        Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений. <br />
        Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность направлений прогрессивного развития.
      </p>
      <div class="poster__content-btns">
        <router-link class="poster__content-link link-1" to="/product/:id">Ознакомиться</router-link>
        <button @click="openPopup" class="btn-1">Оставить заявку</button>
        <popup ref="popup" />
      </div>
    </div>
  </div>
</template>

<script>
import BackToTop from "vue-backtotop/src/BackToTop.vue";
import Popup from "../components/Popup.vue";
export default {
  components: { BackToTop, Popup },
  methods: {
    openPopup() {
      this.$refs.popup.openPopup();
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/mixins/text";
@import "@/assets/mixin.scss";

.grid-1 {
  margin: 0 auto;
  max-width: 1280rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32rem;

  justify-items: center;
  flex-wrap: wrap;
}

.link-product {
}
.poster {
  margin-bottom: 42rem;
  position: relative;

  &__img {
    width: 100%;
    height: 100%;
    border-radius: 24rem;
    opacity: 0.6;
  }

  &__content {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 42rem;
    max-width: 768rem;
    padding: 64rem;


   
  }

  &__content-text {
    @include text.body-18;
    max-width: 768rem;
  }

  &__content-title {
    @include text.heading-bold-44;
    display: flex;
    gap: 16rem;

    &::before {

      display: block;
      content: "";
      background-image: url("/src/assets/images/star.svg");
      background-repeat: no-repeat;
      background-size: contain;
      --svg-size: 100rem;
      max-width: var(--svg-size);
      max-height: var(--svg-size);
      min-height: var(--svg-size);
      min-width: var(--svg-size);
    }
  }

  &__content-btns {
    margin-top: auto;
    display: flex;
    gap: 16rem;
  }

  &__content-link {
    @include text.body-24;
    border: 2rem solid var(--main-white);
    color: var(--coloring-red);
    background-color: var(--main-white);
    max-width: max-content;
    max-height: max-content;
    border-radius: 24rem;
    text-transform: uppercase;
    padding: 16rem;

    @include hover {
      background-color: transparent;
      color: var(--main-white) !important;
    }
  }

  button {
    max-width: max-content;
    max-height: max-content;
  }
}
</style>
