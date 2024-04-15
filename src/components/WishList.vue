<template>
  <div class="shop-box">
    <div class="shop-box__header">
      <h2>Репродукции</h2>
    </div>
    <div class="shop-box__nav">
      <RouterLink class="link-header" to="/">Франция</RouterLink>
      <RouterLink class="link-header" to="/">Германия</RouterLink>
      <RouterLink class="link-header" to="/">Англия</RouterLink>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.shop-box {
  display: flex;
  justify-content: space-between;

  .router-link-exact-active {
    color: #D90021;
  }




}
</style>