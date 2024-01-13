<template>
  <div class="flex p-2.5 flex-wrap justify-between">
    <div v-for="item in shoeData" class="w-16 h-16 mb-2 flex flex-col items-center">
      <img class="w-12 h-12" :src="item.url" alt="" />
      <span class="text-xs font-bold">{{ item.title }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  shoeData:{
    type: Array,
    default: []
  }
})
</script>

<style scoped></style>
