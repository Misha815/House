<template>
  <layout-default>
    <div class="error"><span class="error-inner">4</span>
      <span class="error-inner">0</span>
      <span class="error-inner">4</span>

    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from '../layout/LayoutDefault.vue'
export default {
  components: { LayoutDefault },
}
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  justify-content: center;
  margin: 150rem;
  flex-direction: row;

  .error-inner {
    display: flex;
    justify-content: center;
    flex-direction: row;
    font-size: 300rem;
    font-weight: bolder;
    cursor: pointer;
    transition: 0.5s;
    margin: 25rem;

    &:hover {

      scale: (120%);
      transition: 0.5s;

    }

    &:nth-child(2) {
      color: red;
    }
  }

  span {
    display: flex;
    justify-content: center;
  }
}
</style>