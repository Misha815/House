<script setup>
import Welcome from "@/components/Welcome.vue";
import LayoutDefault from "../layout/LayoutDefault.vue";
import WishList from "@/components/WishList.vue";





components: { LayoutDefault }</script>

<template>
  <layout-default>
    <div>
      <Welcome />
      <WishList />
    </div>
  </layout-default>

</template>