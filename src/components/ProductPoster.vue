<template>
  <div class="Poster-container">
    <div class="Poster-container__inner">
      <div class="text-container">
        <h3>Новая коллекция французских авторов</h3>
        <p>Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою
          очередь,
          должны быть заблокированы в рамках своих собственных рациональных ограничений. <br>
          Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность
          направлений прогрессивного развития.</p>
        <router-link class="link-product" to="/product/:id">Ознакомиться</router-link>
      </div>


    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.Poster-container {
  display: flex;
  margin-top: 30px;
  width: 100%;
  margin-bottom: 30px;

  .Poster-container__inner {

    background: linear-gradient(rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.4)), center no-repeat  url('../assets/images/Poster.jpg');
        background-size: 100% 100%;
    width: 100%;
    height: 774px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    border-radius: 10px;

    .text-container {
      display: flex;
      margin-left: 165px;
      flex-direction: column;
      justify-content: space-evenly;
      height: 460px;

      h3 {
        width: 421px;
        height: 80px;
        font-size: 40px;
        line-height: 100%;
      }

      p {
        width: 540px;
        height: 209px;
        left: 165px;
        top: 170px;
        font-size: 18px;
        line-height: 150%;
      }

      .link-product {
        background-color: #EEDB6D;
        width: 275px;
        height: 65px;
        color: black;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          scale: (102%);
        }


      }
    }

  }
}
</style>