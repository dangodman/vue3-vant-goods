<template>
  <div class="product relative bg-slate-100">
    <header class="w-full z-10 fixed" :class="{ 'bg-white': active }">
      <div class="flex justify-between p-1">
        <div
          class="rounded-full w-10 h-10 flex items-center justify-center bg-white opacity-100"
          @click="goBack"
        >
          <van-icon size="30" name="arrow-left" />
        </div>
        <div class="flex space-x-2">
          <div
            class="rounded-full w-10 h-10 flex items-center justify-center bg-white opacity-100"
          >
            <van-icon size="30" color="green" name="wechat" />
          </div>
          <div
            class="rounded-full w-10 h-10 flex items-center justify-center bg-white opacity-100"
          >
            <van-icon size="30" name="ellipsis" />
          </div>
        </div>
      </div>
    </header>
    <section>
      <div class="w-full relative">
        <van-swipe lazy-render>
          <van-swipe-item v-for="items in images">
            <img class="bg-cover" :src="items" alt="" />
          </van-swipe-item>
          <template #indicator="{ active, total }">
            <div
              class="absolute bottom-6 right-2 rounded-xl bg-white opacity-100 w-10 py-1 text-center text-xs text-gray-400"
            >
              {{ active + 1 }}/{{ total }}
            </div>
          </template>
        </van-swipe>
      </div>
      <div class="bg-white m-1 p-2 space-y-1">
        <div class="space-x-2">
          <span class="text-2xl font-bold">￥42</span>
          <span class="text-xs text-gray-500">包邮优惠价</span>
        </div>
        <h1 class="text-lg font-bold">商品名称</h1>
        <div class="text-xs text-gray-500">添加益生菌膳食纤维</div>
        <div class="text-xs text-gray-500">17评价 · 1000人付款</div>
      </div>
      <div class="bg-white m-1 p-2">
        <div class="flex justify-between items-center my-2">
          <h1 class="text-lg font-bold">好物评价 (17)</h1>
          <div class="space-x-1 text-xs text-gray-500">
            <span>去评价</span>
            <van-icon name="edit" />
          </div>
        </div>
        <div class="grid grid-cols-5 p-2 bg-slate-100">
          <div class="col-span-2">
            <div class="flex items-center space-x-1">
              <h2 class="text-lg font-bold">9.5</h2>
              <van-rate v-model="value" :count="5" size="10" />
            </div>
            <div class="text-xs text-gray-500">749人评分</div>
          </div>
          <div class="flex flex-col items-center justify-center text-xs">
            <span>品质</span>
            <span>9.5</span>
          </div>
          <div class="flex flex-col items-center justify-center text-xs">
            <span>口感</span>
            <span>9.5</span>
          </div>
          <div class="flex flex-col items-center justify-center text-xs">
            <span>包装</span>
            <span>9.4</span>
          </div>
        </div>
        <!-- 评价 -->
        <div
          v-for="item in 10"
          class="w-full bg-white py-4 space-y-1 border-b border-gray-400"
        >
          <div class="flex justify-between items-center">
            <div class="flex justify-between items-center space-x-2">
              <img
                class="w-6 h-6 rounded-full"
                src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"
                alt=""
              />
              <span class="text-xs">唯爱0208</span>
            </div>
            <span class="text-xs text-gray-500">2023.11.19</span>
          </div>
          <van-rate v-model="value" :count="5" size="10" />
          <p class="text-sm">
            很好喝，下回还在值得入手，非常的健康好喝，dfdfdfdnfldfdfdfd大幅度发的
          </p>
          <div class="flex flex-wrap space-x-2">
            <img
              class="w-32"
              src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"
              alt=""
            />
            <img
              class="w-32"
              src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"
              alt=""
            />
          </div>
          <div class="flex justify-between">
            <div><van-icon name="share-o" /></div>
            <div class="flex space-x-4">
              <div class="flex items-center space-x-1">
                <van-icon name="good-job-o" />
                <span class="text-xs">赞</span>
              </div>
              <div class="flex items-center space-x-1">
                <van-icon name="star-o" />
                <span class="text-xs">收藏</span>
              </div>
              <div class="flex items-center space-x-1">
                <van-icon name="comment-o" />
                <span class="text-xs">评论</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="w-full h-10"></div>
    <footer>
      <shoppingCart />
    </footer>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import shoppingCart from "@/components/common/shoppingCart.vue";
const router = useRouter();
const images = reactive([
  "https://webimg.dewucdn.com/pro-img/cut-img/20231103/bc40f60ea45745439bac1f303ea6846f.png?x-oss-process=image/resize,w_1125",
  "https://webimg.dewucdn.com/pro-img/cut-img/20231103/bc40f60ea45745439bac1f303ea6846f.png?x-oss-process=image/resize,w_1125",
]);
const active = ref(false);
const value = ref(4);
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    active.value = true;
  } else {
    active.value = false;
  }
});
const goBack = () => {
  router.back();
};
</script>

<style scoped></style>
