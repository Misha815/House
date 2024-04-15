<template>
  <layout-default>
    <div class="about">
      <div class="about__">
        <div class="about-left">
          <h1>Наша команда</h1>
          <p>Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение
            экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что
            консультация с широким активом.</p>
        </div>
        <div class="about-right"><img src="../assets/images/AboutinLogo.png" alt=""></div>
      </div>

      <about-slider />
    </div>
  </layout-default>

</template>
<script>
import AboutSlider from '../components/icons/AboutSlider.vue'
import LayoutDefault from '../layout/LayoutDefault.vue'

export default {
  components: { LayoutDefault, AboutSlider },

}
</script>

<style lang="scss">
.about {


  .about__ {
    display: flex;
    justify-content: center;

    .about-left {
      p {
        max-width: 640px;
        color: #ffffffe5;
      }
    }

    .about-right {
      img {}
    }
  }
}

@media (min-width: 1024px) {}
</style>