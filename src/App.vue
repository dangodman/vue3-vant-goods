<template>
  <!-- 主体内容 -->
  <router-view />
  <!-- 底部路由导航 -->
  <Footer class="z-10" />
</template>

<script setup>
import Footer from '@/components/layout/footer/Footer.vue'
</script>

<style scoped></style>