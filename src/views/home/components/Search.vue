<template>
  <header>
    <div class="flex items-center px-2">
      <van-icon @click="back" size="28" name="arrow-left" />
      <van-search
        class="flex-1"
        @focus="Search"
        v-model="searchKeyword"
        placeholder="礼物推荐"
      />
      <span class="text-lg font-bold">搜索</span>
    </div>
  </header>
  <section>
    <div class="my-4 p-4">
      <h1 class="text-lg font-bold mb-2">猜你想搜</h1>
      <div class="flex flex-wrap">
        <div class="bg-gray-200 p-1 mr-3 mb-2 text-center text-xs">
          烫发推荐男
        </div>
        <div class="bg-gray-200 p-1 mr-3 mb-2 text-center text-xs">礼物</div>
        <div class="bg-gray-200 p-1 mr-3 mb-2 text-center text-xs">
          男生冬季牛仔裤
        </div>
        <div class="bg-gray-200 p-1 mr-3 mb-2 text-center text-xs">
          蓬松洗发水
        </div>
        <div class="bg-gray-200 p-1 mr-3 mb-2 text-center text-xs">
          棉服宽松
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="my-4 p-4">
      <h1 class="text-lg font-bold mb-2">热搜榜</h1>
      <div class="bg-orange-100 w-full h-96 shadow border border-orange-50">
        <ul class="p-2">
          <li v-for="(item, index) in 10" class="text-sm my-4 flex">
            <div class="text-gray-500 mr-2 w-4 text-center">{{ index + 1 }}</div>
            <span>这双鞋转为实战而生</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();
const searchKeyword = ref("");
const back = () => {
  router.back();
};
</script>

<style scoped></style>
