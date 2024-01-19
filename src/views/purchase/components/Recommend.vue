<template>
  <div class="trendy">
    <!-- 分类 -->
    <Classification :shoeData="shoeCategories" />
    <!-- 新人超值好价 -->
    <div class="px-4 mb-2">
      <div
        class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."
      ></div>
      <div
        class="w-full h-32 bg-gradient-to-b from-orange-100 to-white to-30% ... border"
      >
        <div class="flex justify-between p-2 items-center">
          <span class="text-sm font-bold">新人超值好价</span>
          <div class="space-x-1 text-xs text-gray-500">
            <span>20元起包邮到家</span>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div v-for="item in 4" class="flex flex-col items-center">
            <img
              class="w-16 h-16"
              src="https://s2.loli.net/2024/01/13/ZJNPRl3x9f7VtQ5.jpg"
              alt=""
            />
            <div>
              <span class="text-sm mr-1">￥49</span>
              <span class="text-gray-500 text-xs line-through">￥99</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 mb-2">
      <div class="w-full h-48 space-x-2 flex">
        <div
          class="w-1/2 bg-gradient-to-b from-pink-100 to-white to-20% h-full border p-2"
        >
          <div class="flex justify-between items-center">
            <div class="flex flex-col items-center">
              <h1 class="m-1 font-bold">答题免单</h1>
              <img
                class="w-16 h-16 m-4"
                src="https://s2.loli.net/2024/01/13/ZJNPRl3x9f7VtQ5.jpg"
                alt=""
              />
              <span class="text-xs text-gray-500">开始答题</span>
              <span class="text-sm font-bold">免单奖励</span>
            </div>
            <div class="flex flex-col items-center">
              <h1 class="m-1 font-bold">超值低价</h1>
              <img
                class="w-16 h-16 m-4"
                src="https://s2.loli.net/2024/01/13/ZJNPRl3x9f7VtQ5.jpg"
                alt=""
              />
              <span class="text-xs text-gray-500">发售价￥59</span>
              <span class="text-sm font-bold">￥42</span>
            </div>
          </div>
        </div>
        <div
          class="w-1/2 bg-gradient-to-b from-blue-100 to-white to-20% h-full border p-2"
        >
          <div class="flex justify-between items-center">
            <div class="flex flex-col items-center">
              <h1 class="m-1 font-bold">官方补贴</h1>
              <img
                class="w-16 h-16 m-4"
                src="https://s2.loli.net/2024/01/13/ZJNPRl3x9f7VtQ5.jpg"
                alt=""
              />
              <span class="text-xs text-gray-500">免费砍价</span>
              <span class="text-sm font-bold">无需拉人</span>
            </div>
            <div class="flex flex-col items-center">
              <h1 class="m-1 font-bold">限时折扣</h1>
              <img
                class="w-16 h-16 m-4"
                src="https://s2.loli.net/2024/01/13/ZJNPRl3x9f7VtQ5.jpg"
                alt=""
              />
              <span class="text-xs text-gray-500">发售价￥383</span>
              <span class="text-sm font-bold">￥79</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 产品列表 -->
    <ProductList :productData="productData" />
  </div>
</template>

<script setup>
import { ref,onMounted } from "vue";
import Classification from "@/components/layout/Classification.vue";
import ProductList from "@/components/layout/ProductList.vue";
import { useShoeCategories } from "@/store/useShoeCategories.js";
import { getGoodsList } from "@/api";
const productData = ref([])
const { shoeCategories } = useShoeCategories();
onMounted(async () => {
  const data = await getGoodsList();
  if(data.code === "200"){
    productData.value = data.data;
    console.log(data.data);
  }
});
</script>

<style scoped></style>
