<template>
  <section class="section-1">
    <div class="main">
      <div class="main__wrapper">
        <div class="main__wrapper-banner">
          <img src="../assets/images/main-banner.jpg" alt="Главный баннер" />
        </div>
        <div class="main__wrapper-heading">
          <h1 class="main__wrapper-heading-title headline-1">Реплики картин от <span>Ink. House</span></h1>
          <p class="main__wrapper-heading-subtitle">Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</p>
          <RouterLink class="product-link" to="/product">Продукция</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use "../assets/mixins/text";
@import "@/assets/mixin.scss";


.main {
  &__wrapper {
    position: relative;
   
  }

  &__wrapper-banner {
    height: 100%;
    width: 100%;
    img{
      // border: 1rem solid var(--main-white);
      box-shadow: 1rem 1rem 10rem 1rem rgba(0, 0, 0, 0.384);
      border-radius: 24rem;
      max-width: 1920rem;
      max-height: 768rem;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.6;
      pointer-events: none;
    }
  }

  &__wrapper-heading {
    position: absolute;
    bottom: 64rem;
    left: 32rem;

  }

  &__wrapper-heading-title {
    span{
      color: var(--coloring-red);
    }
  }

  &__wrapper-heading-subtitle {
    @include text.body-20;
    color: var(--medium-grey);
  }
}

</style>
