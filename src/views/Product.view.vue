<template>
  <layout-default>
    <div>
      <h1>Продукция</h1>
      <product-eng />
      <product-franch />
      <product-germany />
    </div>
  </layout-default>
</template>

<script>
import ProductEng from '../components/ProductEng.vue'
import ProductFranch from '../components/ProductFranch.vue'
import ProductGermany from '../components/ProductGermany.vue';
import LayoutDefault from '../layout/LayoutDefault.vue'
export default {
  components: { LayoutDefault, ProductFranch, ProductGermany, ProductEng },

}
</script>

<style lang="scss" scoped>
h1 {
  align-items: center;
  text-align: center;
}
</style>