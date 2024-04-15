<template>
  <div class="container">
    <div class="container__wrapper">
      <div class="container__wrapper-left">
        <img src="../assets/images/Home poster.png" alt="">
      </div>
      <div class="container__wrapper-right">
        <h1>Реплики картин от <span>Ink. House</span></h1>
        <p>Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</p>
        <RouterLink class="product-link" to="/product">Продукция</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/assets/mixin.scss";

.container {
  .container__wrapper {
    display: flex;
    justify-content: center;

    .container__wrapper-left {
      width: 540px;
      margin-right: 30px;

      img {
        max-width: 540px;
      }
    }

    .container__wrapper-right {
      width: 540px;
      height: 331px;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      margin: auto;


      h1 {
        font-size: 60px;
        line-height: 100%;

        span {
          color: red
        }
      }

      p {
        line-height: normal;
      }

      .product-link {
        margin-top: 30px;
        @include product;
      }
    }
  }
}
</style>