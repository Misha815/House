<template>
  <div class="about-slider">
    <div class="embla" ref="emblaRef" @wheel.prevent="onWheel">
      <div class="embla__container">
        <div class="embla__slide" v-for="(slide, index) in slides" :key="index" :class="{ active: index === current }">
          <div class="about-slider__slide">
            <img class="about-slider__slide-image" :src="slide.image" :alt="slide.alt" />
            <span class="about-slider__slide-name">{{ slide.name }}</span>
            <span class="about-slider__slide-profile">{{ slide.profile }}</span>
            <span class="about-slider__slide-stage">Стаж работы: {{ slide.stage }} лет</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import emblaCarouselVue from "embla-carousel-vue";

const [emblaRef, emblaApi] = emblaCarouselVue({ loop: false });
const current = ref(0); // Текущий активный слайд
const slides = ref([
  { image: "./src/assets/images/slider/alex.jpg", alt: "Tony Montana", name: "Tony Montana", profile: "Художник", stage: "10" },
  { image: "./src/assets/images/slider/dennis.jpg", alt: "Dennis Montana", name: "Dennis Montana", profile: "Художник", stage: "10" },
  { image: "./src/assets/images/slider/tony.jpg", alt: "Alex Montana", name: "Alex Montana", profile: "Художник", stage: "10" },
  { image: "./src/assets/images/slider/alex.jpg", alt: "Mike Montana", name: "Mike Montana", profile: "Художник", stage: "10" },
  { image: "./src/assets/images/slider/alex.jpg", alt: "Jersi Montana", name: "Jersi Montana", profile: "Художник", stage: "10" },
  { image: "./src/assets/images/slider/alex.jpg", alt: "Albert Montana", name: "Albert Montana", profile: "Художник", stage: "10" },
  { image: "./src/assets/images/slider/alex.jpg", alt: "Mark Montana", name: "Mark Montana", profile: "Художник", stage: "10" },
]);
const onWheel = (event) => {
  if (emblaApi.value) {
    // Если колесико мыши прокручено вниз, переходим к следующему слайду
    if (event.deltaY > 0) {
      emblaApi.value.scrollNext();
    } else {
      // Если прокручено вверх, возвращаемся к предыдущему слайду
      emblaApi.value.scrollPrev();
    }
  }
};
onMounted(() => {
  if (emblaApi.value) {
    console.log(emblaApi.value.slideNodes()); // Доступ к API
    // Обновляем текущий слайд при изменении
    emblaApi.value.on("select", () => {
      current.value = emblaApi.value.selectedScrollSnap();
    });
  }
});
</script>

<style lang="scss" scoped>
@use "../assets/mixins/text";
@import "@/assets/mixin.scss";
@import "@/assets/mixins/embla.scss";

.about-slider {
  margin-bottom: 42rem;

  &__slide {
    background-color: var(--accent-dark-grey);
    box-shadow: 1rem 1rem 10rem 1rem rgba(0, 0, 0);
    border-radius: 24rem;
    display: flex;
    flex-direction: column;
    gap: 8rem;
  }

  &__slide-image {
    border-radius: 24rem 24rem 0 0;
    width: 100%;
    height: 100%;
    max-height: 512rem;
    object-fit: fill;
  }

  &__slide-name {
    padding-left: 20rem;
    @include text.body-20;
  }

  &__slide-profile {
    padding-left: 20rem;
    @include text.body-20;
  }

  &__slide-stage {
    padding-left: 20rem;
    @include text.body-20;
  }

  .embla {
    max-width: 540rem;
    margin: auto;
    --slide-height: 20rem;
    --slide-spacing: 36rem;
    --slide-size: 75%;

    &__slide {
      opacity: 0.6;
    }
  }
}

.active {
  transform: scale(1.04);
  transition: all 0.5s ease-in-out;
  opacity: 1 !important;

  
}
</style>
