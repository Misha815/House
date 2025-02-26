<template>
  <layout-default>
    <div class="product-view">
      <h1 class="headline-1">Вся продукция</h1>
      <product-eng />
      <product-franch />
      <product-germany />
    </div>
  </layout-default>
</template>

<script>
import ProductEng from "../components/ProductEng.vue";
import ProductFranch from "../components/ProductFranch.vue";
import ProductGermany from "../components/ProductGermany.vue";
import LayoutDefault from "../layout/LayoutDefault.vue";
export default {
  components: { LayoutDefault, ProductFranch, ProductGermany, ProductEng },
};
</script>

<style lang="scss" scoped>
.product-view {
  display: flex;
  flex-direction: column;
  gap: 32rem;
  margin-bottom: 42rem;
  
  .headline-1 {
    margin-bottom: 0;
    align-items: center;
    text-align: center;
  }
}
</style>
