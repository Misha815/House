<template>

    <div class="shop-box">
      <div class="shop-box__top">
        <h2 class="headline-2">Репродукции</h2>
        <div class="shop-box__tabs">
          <button @click="Franch" class="shop-box__tab">Франция</button>
          <button @click="Germany" class="shop-box__tab">Германия</button>
          <button @click="English" class="shop-box__tab">Англия</button>
        </div>
      </div>
      <div class="shop-box__content">
        <product-eng v-if="current === 'England'" />
        <product-germany v-else-if="current === 'Germany'" />
        <product-franch v-else-if="current === 'France'" />
      </div>
      <div class="shop-box__more">
        <a class="shop-box__more-link" href="/product">Вся продукция</a>
      </div>

      <ProductPoster />
    </div>

</template>

<script>
import ProductEng from "./ProductEng.vue";
import ProductFranch from "./ProductFranch.vue";
import ProductGermany from "./ProductGermany.vue";
import ProductPoster from "./ProductPoster.vue";
export default {
  components: { ProductFranch, ProductGermany, ProductEng, ProductPoster },
  data() {
    return {
      current: "France",
    };
  },
  methods: {
    Franch() {
      this.current = "France";
    },
    English() {
      this.current = "England";
    },
    Germany() {
      this.current = "Germany";
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/mixins/text";
@import "@/assets/mixin.scss";
.shop-box {
  display: flex;
  flex-direction: column;
  gap: 42rem;
 
 
  margin-bottom: 42rem;

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__tabs {
    display: flex;
    gap: 16rem;
  }
  &__tab {
    background-color: transparent;
    border: none;
    padding: 12rem;
    color: var(--main-white);
    border-radius: 24rem;
    cursor: pointer;
    @include text.body-20;
    transition: all 0.2s ease-in-out;

    @include hover {
      transition: all 0.2s ease-in-out;
      color: var(--coloring-red);
    }

    &:focus {
      background-color: var(--accent-dark-grey);
    }
  }
  &__content {
    display: flex;
    justify-content: center;
  }
  &__more {
    display: flex;
    justify-content: center;
  }
  &__more-link {
    @include text.body-20;
    text-align: center;
    color: var(--main-white);
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    @include hover {
      color: var(--coloring-red);
      transition: all 0.2s ease-in-out;
    }
  }
}
</style>
