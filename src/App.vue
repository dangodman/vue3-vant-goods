<template>
  <transition name="" mode="">
    <router-view></router-view>
  </transition>
</template>

<script setup></script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
</style>
