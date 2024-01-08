<template>
  <!-- 主体内容 -->
  <router-view />
  <!-- 底部路由导航 -->
  <div class="footer h-12">
    <Footer class="fixed bottom-0" />
  </div>
</template>

<script setup>
import Footer from "@/components/layout/footer/Footer.vue";
</script>

<style scoped></style>
