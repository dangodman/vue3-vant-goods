<template>
  <div class="flex p-2 justify-between">
    <div v-for="item in brands">
      <img class="w-20 h-12" :src="item.brandLogo" alt="" />
      <div class="text-xs font-bold w-20 truncate text-center mt-1">
        {{ item.brandName }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  brands: Array,
});
</script>

<style scoped></style>
