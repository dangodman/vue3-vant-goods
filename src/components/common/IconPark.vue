<template>
  <Component :is="icon" :theme="theme" :size="size" :spin="spin" :fill="fill" :strokeLinecap="strokeLinecap"
    :strokeLinejoin="strokeLinejoin" :strokeWidth="strokeWidth" />
</template>

<script setup>
import { defineProps } from 'vue'
defineProps(['icon', 'theme', 'size', 'spin', 'fill', 'strokeLinecap', 'strokeLinejoin', 'strokeWidth'])

</script>

<style scoped></style>