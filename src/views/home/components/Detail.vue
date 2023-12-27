<template>
  <div>
    {{ ids }}
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
const ids = ref()
const route = useRoute() 
onMounted(() => {
  ids.value = route.query.id 
})
</script>

<style scoped></style>