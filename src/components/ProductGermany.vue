<template>
  <div class="card-container">
    <div class="card" v-for="card in cards" :key="card.id">
      <div class="card-inner">
        <img class="image" :src="card.image">
        <span class="author">{{ card.author }}</span>
        <span class="title">{{ card.title }}</span>
        <span class="structure">{{ card.structure }}</span>
        <span class="price">{{ card.price }}</span>
        <button class="btn-trash">В корзину</button>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
const cards = ref([
  {
    id: 1,
    image: '/src/assets/images/card-image3.jpg',
    author: 'Марсель Руссо',
    title: 'Охота Амура',
    structure: 'Холст, Масло(50х80)',
    price: '14 500 руб',
  },
  {
    id: 1,
    image: '/src/assets/images/card-image3.jpg',
    author: 'Марсель Руссо',
    title: 'Охота Амура',
    structure: 'Холст, Масло(50х80)',
    price: '14 500 руб',
  },
  {
    id: 1,
    image: '/src/assets/images/card-image3.jpg',
    author: 'Марсель Руссо',
    title: 'Охота Амура',
    structure: 'Холст, Масло(50х80)',
    price: '14 500 руб',
  },
  {
    id: 1,
    image: '/src/assets/images/card-image3.jpg',
    author: 'Марсель Руссо',
    title: 'Охота Амура',
    structure: 'Холст, Масло(50х80)',
    price: '14 500 руб',
  },
  {
    id: 1,
    image: '/src/assets/images/card-image3.jpg',
    author: 'Марсель Руссо',
    title: 'Охота Амура',
    structure: 'Холст, Масло(50х80)',
    price: '14 500 руб',
  },
  {
    id: 1,
    image: '/src/assets/images/card-image3.jpg',
    author: 'Марсель Руссо',
    title: 'Охота Амура',
    structure: 'Холст, Масло(50х80)',
    price: '14 500 руб',
  },


])

</script>

<style lang="scss" scoped>
@import "@/assets/mixin.scss";

.card-container {
  margin: 0 auto;
  max-width: 1110px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 30px 30px;
  flex-wrap: wrap;
  @include card;


}
</style>