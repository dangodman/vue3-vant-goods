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
import Classification from "@/components/layout/Classification.vue";
import Brand from "@/components/layout/Brand.vue";
import ProductList from "@/components/layout/ProductList.vue";
import { useShoeCategories } from "@/store/useShoeCategories.js";
import { userProductData } from "@/store/useProductData.js";
const { productData } = userProductData();
const { shoeCategories } = useShoeCategories();
</script>

<style scoped></style>
