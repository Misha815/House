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
      max-width: 540px;
      margin: 0 auto;
      margin-right: 30px;

      img {
        max-width: 100%;

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
@media all and (min-width: 1281px) {
   h1{

        font-size: 100px;
   }
}

@media all and (min-width: 1025px) and (max-width: 1280px) {
  h1{

    font-size: 100px;
}
}

@media all and (min-width: 769px) and (max-width: 1024px) {
  h1{

    font-size: 100px;
}
}

@media all and (min-width: 481px) and (max-width: 768px) {
  h1{

    font-size: 100px;

}
}

@media all and (min-width: 321px) and (max-width: 480px) {
  h1{
    font-size: 100px;
}
}

@media all and (max-width: 320px) {
  h1{

    font-size: 100px;
}
}
</style>