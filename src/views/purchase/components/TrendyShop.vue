<template>
  <div class="trendy">
    <!-- 分类 -->
    <Classification :shoeData="shoeCategories" />
    <!-- 品牌 -->
    <Brand />
    <!-- 产品列表 -->
    <ProductList :productData="productData" />
  </div>
</template>

<script setup>
import { ref,onMounted } from "vue";
import Classification from "@/components/layout/Classification.vue";
import Brand from "@/components/layout/Brand.vue";
import ProductList from "@/components/layout/ProductList.vue";
import { useShoeCategories } from "@/store/useShoeCategories.js";
import { getGoodsList } from "@/api";
const productData = ref([]);
const { shoeCategories } = useShoeCategories();
onMounted(async () => {
  const data = await getGoodsList();
  if (data.code === "200") {
    productData.value = data.data;
    console.log(data.data);
  }
});
</script>

<style scoped></style>
