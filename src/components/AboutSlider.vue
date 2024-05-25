<template>
  <div class="slider">
    <div class="slides">
      <button @click="prevSlide">Предыдущий слайд</button>
      <div class="slides-inner" v-for="(slide, index) in slides" :key="index" :class="{ active: index === current }">
        <div class="slides-inner__warp">
          <img :src="slide.image" :alt="slide.alt">
          <span>{{ slide.name }}</span>
        </div>
      </div>
      <button @click="nextSlide">Следующий слайд</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      slides: [
        { image: './src/assets/images/slider/tony.jpfg', alt: 'Tony Montana', name: 'Tony Montana' },
        { image: './src/assets/images/slider/dennis.fjpg', alt: 'Dennis Montana', name: 'Dennis Montana' },
        { image: './src/assets/images/slider/alex.jfpg', alt: 'Alex Montana', name: 'Alex Montana' },
        { image: 'img2.jpg', alt: 'Mike Montana', name: 'Mike Montana' },
        { image: 'img3.jpg', alt: 'Jersi Montana', name: 'Jersi Montana' },
        { image: 'img2.jpg', alt: 'Albert Montana', name: 'Albert Montana' },
        { image: 'img3.jpg', alt: 'Mark Montana', name: 'Mark Montana' }
      ]
    };
  },
  methods: {
    prevSlide() {
      this.current = this.current > 0 ? this.current - 1 : this.slides.length - 1;
    },
    nextSlide() {
      this.current = this.current < this.slides.length - 1 ? this.current + 1 : 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.slider {
  width: 100%;
  margin: 0 auto;
  padding: 50px 0 50px 0;

  .slides {
    display: flex;
    justify-content: center;

    .slides-inner {
      display: none;
      background: grey;
      border-radius: 20px;

      .slides-inner__warp {
        width: 230px;
        height: 320px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

      }

      img {
        max-width: 300px;
        max-height: 300px;
        border-radius: 10px;
        display: flex;

      }

      &.active {
        display: block;
      }

      span {}
    }
  }

  .nav-slider {
    .nav-slider__inner {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      button {
        background-color: rgba(255, 255, 255, 0.856);
        max-width: 100px;
        border-radius: 10px;
        border: none;
        font-family: monospace;
      }
    }
  }
}
</style>