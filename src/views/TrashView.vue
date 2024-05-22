<template>
  <layout-default>
    <div>
    <trash />
  </div>
  </layout-default>
</template>

<script>
import Trash from '../components/Trash.vue'
import LayoutDefault from '../layout/LayoutDefault.vue'

export default {
  components: { LayoutDefault, Trash },

}
</script>

<style lang="scss" scoped></style>