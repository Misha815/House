<template>
  <div class="grid-1">
    <div class="card" v-for="card in cards" :key="card.id">
      <div class="card__inner">
        <img class="card__image" :src="card.image">
        <span class="card__author">{{ card.author }}</span>
        <span class="card__title">{{ card.title }}</span>
        <span class="card__structure">{{ card.structure }}</span>
        <span class="card__price">{{ card.price }}</span>
        <button class="card__btn-trash">В корзину</button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
const cards = ref([
  {
    id: 1,
    image: '/src/assets/images/card-image2.jpg',
    author: 'Марсель Руссо',
    title: 'Охота Амура',
    structure: 'Холст, Масло(50х80)',
    price: '14 500 руб',
  },
  {
    id: 1,
    image: '/src/assets/images/card-image2.jpg',
    author: 'Марсель Руссо',
    title: 'Охота Амура',
    structure: 'Холст, Масло(50х80)',
    price: '14 500 руб',
  },
  {
    id: 1,
    image: '/src/assets/images/card-image2.jpg',
    author: 'Марсель Руссо',
    title: 'Охота Амура',
    structure: 'Холст, Масло(50х80)',
    price: '14 500 руб',
  },
  {
    id: 1,
    image: '/src/assets/images/card-image2.jpg',
    author: 'Марсель Руссо',
    title: 'Охота Амура',
    structure: 'Холст, Масло(50х80)',
    price: '14 500 руб',
  },
  {
    id: 1,
    image: '/src/assets/images/card-image2.jpg',
    author: 'Марсель Руссо',
    title: 'Охота Амура',
    structure: 'Холст, Масло(50х80)',
    price: '14 500 руб',
  },
  {
    id: 1,
    image: '/src/assets/images/card-image2.jpg',
    author: 'Марсель Руссо',
    title: 'Охота Амура',
    structure: 'Холст, Масло(50х80)',
    price: '14 500 руб',
  },


])

</script>

<style lang="scss" >
@import "@/assets/mixin.scss";



</style>