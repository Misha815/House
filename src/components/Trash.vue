<template>
  <div class="container-trash">
    <div class="container-trash__item">
          <div class="card">
      <div class="card-inner">
        <img class="image" src="/src/assets/images/card-image2.jpg">
        <span class="author">Марсель Руссо</span>
        <span class="title">Охота Амура</span>
        <span class="structure">Холст, Масло(50х80)</span>
        <span class="price">14 500 руб</span>
      </div>
          </div>

    </div>
    <div class="container-trash__buy">
      <div class="container-trash__buy--inner">
        <span>-Над городом       1544 Р</span>
        <button>Заказать</button>
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

.container-trash{
  display: flex;
  justify-content: space-between;
  .container-trash__item{
    display: flex;

max-width: 800rem;
.card{
  width: 329rem;
  background-color: #535353;
display: flex;
margin: 10rem;
margin-top: 0rem;

align-items: center;
  justify-content: center;
  .card-inner{
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
  }
  .container-trash__buy{
    display: flex;
    justify-content: space-between;
.container-trash__buy--inner{
  width: 285rem;
    max-height: 393rem;
    background-color:#535353 ;

    display: flex;
    flex-direction: column;
  justify-content: space-between;
  align-items: center;
  span{

  }
  button{

    all:unset;
    margin-bottom: 10rem;
    width: 258rem;
    height: 71rem;

    background-color: #D90021;
    color: #fff;
    align-items: center;
    display: flex;
    justify-content: center;
&:hover{
background-color: #d90021cc;
}
&:active{
  background-color: #D90021;
}
  }
}
  }
}
</style>