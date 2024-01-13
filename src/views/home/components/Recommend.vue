<template>
  <div
    class="w-full h-screen overflow-auto relative bg-[#f4f3f8] flex flex-wrap"
    ref="waterfall"
  >
    <div
      class="w-1/2 p-0.5  bg-white"
      v-for="item in recommendData"
      @click="togoods(item.id)"
    >
      <div class="card_img">
        <img
          class="w-full"
          :src="item.image"
          alt=""
          @load="useWaterFall(waterfall)"
        />
      </div>
      <p class="w-full p-1 text-lg double-line">{{ item.content }}</p>
      <div class="flex items-center p-1 justify-between">
        <div class="flex items-center">
          <img class="w-5 h-5 rounded-full" :src="item.avatar" alt="" />
          <span class="ml-1 text-sm">{{ item.author }}</span>
        </div>
        <div class="flex items-center" @click.stop="thumbsUp(item)">
          <div v-if="true">
            <van-icon size="18" name="good-job-o" />
          </div>
          <div v-else>
            <van-icon size="18" name="good-job" color="blue" />
          </div>
          <span class="text-sm ml-1">{{ item.thumbsUp }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useWaterFall } from "./useWaterFall.js";
import { useRecommendStore } from "@/store/useRecommendData.js";
import { useRouter } from "vue-router";
const router = useRouter();
const waterfall = ref(null);
const { recommendData } = useRecommendStore();
const togoods = (id) => {
  router.push({ path: "/detail", query: { id } });
};
const thumbsUp = (val) => {
  // 更改store中的数据
  if (!localStorage.getItem("token")) {
    router.push("/options");
  }
  recommendData.map((item) => {
    if (item.id === val.id) {
      item.thumbsUp++;
    }
  });
};
// nextTick(() => {
//   useWaterFall(waterfall);
// });
</script>

<style scoped>
.double-line {
  @apply break-all overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webit-line-clamp:2] line-clamp-2;
}
</style>
