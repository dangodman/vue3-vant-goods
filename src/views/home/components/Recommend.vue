<template>
  <div class="w-full h-screen overflow-auto bg-[#f4f3f8] flex flex-wrap">
    <div class="w-1/2 h-full p-0.5">
      <div
        class="bg-white"
        v-for="(item, index) in recommendDataL"
        @click="togoods(item.id_s)"
      >
        <div class="card_img">
          <img class="w-full h-full object-cover" :src="item.image" alt="" />
          <p class="w-full p-1 text-lg double-line">{{ item.desc }}</p>
          <div class="flex items-center p-1 justify-between">
            <div class="flex items-center">
              <img class="w-5 h-5 rounded-full" :src="item.avatar" alt="" />
              <span class="ml-1 text-sm">{{ item.nickname }}</span>
            </div>
            <div class="flex items-center" @click.stop="thumbsUp(item.like)">
              <div v-if="true">
                <van-icon size="18" name="good-job-o" />
              </div>
              <div v-else>
                <van-icon size="18" name="good-job" color="blue" />
              </div>
              <span class="text-sm ml-1">{{ item.like }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/2 h-full p-0.5">
      <div
        class="bg-white"
        v-for="(item, index) in recommendDataR"
        @click="togoods(item.id_s)"
      >
        <div class="card_img">
          <img class="w-full h-full object-cover" :src="item.image" alt="" />
          <p class="w-full p-1 text-lg double-line">{{ item.desc }}</p>
          <div class="flex items-center p-1 justify-between">
            <div class="flex items-center">
              <img class="w-5 h-5 rounded-full" :src="item.avatar" alt="" />
              <span class="ml-1 text-sm">{{ item.nickname }}</span>
            </div>
            <div class="flex items-center" @click.stop="thumbsUp(item.like)">
              <div v-if="true">
                <van-icon size="18" name="good-job-o" />
              </div>
              <div v-else>
                <van-icon size="18" name="good-job" color="blue" />
              </div>
              <span class="text-sm ml-1">{{ item.like }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRecommendStore } from "@/store/useRecommendData.js";
import { useRouter } from "vue-router";
const router = useRouter();
const recommendStore = useRecommendStore();
const recommendData = ref([]);
const recommendDataL = ref([]);
const recommendDataR = ref([]);
const togoods = (id_s) => {
  router.push({ path: "/detail", query: { id_s } });
};
const thumbsUp = (val) => {
  // 更改store中的数据
  if (!localStorage.getItem("token")) {
    router.push("/options");
  }
  // 如果该用户已点赞则不添加
};
onMounted(async () => {
  await recommendStore.getRecommendData();
  recommendData.value = recommendStore.recommendData;
  recommendDataL.value = recommendData.value.filter(
    (item) => item.id_s % 2 !== 0
  );
  recommendDataR.value = recommendData.value.filter(
    (item) => item.id_s % 2 === 0
  );
});
</script>

<style scoped>
.double-line {
  @apply break-all overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webit-line-clamp:2] line-clamp-2;
}
</style>
