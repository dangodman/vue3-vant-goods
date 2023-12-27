<template>
  <!-- 主体内容 -->
  <router-view />
  <!-- 底部路由导航 -->
  <Footer />
</template>

<script setup>
import Footer from '@/components/layout/footer/Footer.vue'
import Search from '@/components/layout/search/Search.vue'

</script>

<style scoped></style>