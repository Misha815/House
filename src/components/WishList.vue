<template>
  <div class="shop-box">
    <div class="shop-box__inner">
      <div class="shop-box__header">
        <h2>Репродукции</h2>
      </div>
      <div class="shop-box__nav">
        <button @click="Franch" class="link-header">Франция</button>
        <button @click="Germany" class="link-header">Германия</button>
        <button @click="English" class="link-header">Англия</button>
      </div>
    </div>
    <div class="shop-box__wrapper">
      <product-eng v-if="current === 'England'" />
      <product-germany v-else-if="current === 'Germany'" />
      <product-franch v-else-if="current === 'France'" />
    </div>
    <div class="more-product">
      <a class="link-header" href="/product">Вся продукция</a>
    </div>

  </div>
</template>

<script>
import ProductEng from './ProductEng.vue'
import ProductFranch from './ProductFranch.vue'
import ProductGermany from './ProductGermany.vue';
export default {
  components: { ProductFranch, ProductGermany, ProductEng },
  data() {
    return {
      current: 'France'
    };
  },
  methods: {
    Franch() {
      this.current = 'France';
    },
    English() {
      this.current = 'England';
    },
    Germany() {
      this.current = 'Germany';
    },
  },
}
</script>

<style lang="scss" scoped>
.shop-box {
  .shop-box__inner {
    display: flex;
    justify-content: space-between;

    .shop-box__header {
      h2 {
        font-size: 40px;
      }
    }

    .shop-box__nav {
      .link-header {
        all: unset;
        font-size: 20px;


        &:not(:last-child) {
          margin-right: 40px;
        }

        &:hover {
          transition: 0.2s;
          color: red;
        }

        &:focus {
          color: red;
        }
      }
    }
  }

  .shop-box__wrapper {}

  .more-product {
    text-align: center;
    margin-top: 30px;

    .link-header {
      &:hover {
        color: red;
      }
    }


  }
}
</style>