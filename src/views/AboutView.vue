<template>
  <layout-default>
    <div class="about">
      <div class="about__left">
        <div class="about__top-title">
          <h1 class="headline-1">Наша команда</h1>
        </div>
        <div class="about__top-desc">
          <p>Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что консультация с широким активом.</p>
        </div>
      </div>

      <div class="about__right"></div>

      <about-slider />
    </div>
  </layout-default>
</template>
<script>
import AboutSlider from "../components/AboutSlider.vue";

import LayoutDefault from "../layout/LayoutDefault.vue";

export default {
  components: { LayoutDefault, AboutSlider },
};
</script>

<style lang="scss">
@use "../assets/mixins/text";
@import "@/assets/mixin.scss";

.about {
  display: flex;
  gap: 40rem;
  &__left {
    margin-bottom: 42rem;
    align-items: center;
    background-color: var(--accent-white);
    max-width: 600rem;
    padding: 20rem;
    border-radius: 0 24rem 24rem 0;
    z-index: 5;
  }

  &__top-title {
    .headline-1{

      color: var(--accent-dark-grey) !important;
    }
  }

  &__top-desc {
    @include text.body-20;   color: var(--accent-dark-grey);
  }
}
</style>
