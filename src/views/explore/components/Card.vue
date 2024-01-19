<template>
  <div>
    <van-checkbox-group
      v-model="checked"
      ref="checkboxGroup"
      @change="checkedResult"
    >
      <div v-for="item in items">
        <van-swipe-cell>
          <div class="flex">
            <div class="flex items-center">
              <van-checkbox :name="item"></van-checkbox>
            </div>
            <div class="flex-1 w-full">
              <van-card
                :price="item.price.toFixed(2)"
                desc="描述信息"
                title="商品标题"
                class="goods-card"
                thumb="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
              >
                <template #footer>
                  <van-button size="small" @click="onMinus(item)"
                    ><van-icon name="minus"
                  /></van-button>
                  <van-button size="small">{{ item.number }}</van-button>
                  <van-button size="small" @click="onPlus(item)"
                    ><van-icon name="plus"
                  /></van-button>
                </template>
              </van-card>
            </div>
          </div>
          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
            />
          </template>
        </van-swipe-cell>
      </div>
    </van-checkbox-group>
  </div>
  <van-submit-bar :price="priceAll" button-text="提交订单" @submit="onSubmit">
    <van-checkbox v-model="isCheckAll" @change="checkedAll">全选</van-checkbox>
  </van-submit-bar>
</template>

<script setup>
import { ref } from "vue";
const checked = ref([]);
const isCheckAll = ref(false);
const checkboxGroup = ref(null);
const priceAll = ref(0);
const items = ref([
  { name: "a", price: 20, number: 2 },
  { name: "b", price: 30, number: 1 },
  { name: "c", price: 40, number: 1 },
]);
const checkedAll = () => {
  if (isCheckAll.value) {
    checkboxGroup.value.toggleAll(true);
  } else {
    checkboxGroup.value.toggleAll(false);
    priceAll.value = 0;
  }
};
const checkedResult = () => {
  isCheckAll.value = checked.value.length === items.value.length;
  calcPrice();
};

const onMinus = (item) => {
  if (item.number > 1) {
    item.number -= 1;
    calcPrice();
  } else {
    return;
  }
};
const onPlus = (item) => {
  item.number += 1;
  calcPrice();
};
const onSubmit = () => {
  console.log(checked.value);
};
// 计算金额
function calcPrice() {
  priceAll.value = 0;
  for (let i = 0; i < checked.value.length; i++) {
    const item = checked.value[i];
    priceAll.value += item.price * item.number * 100;
  }
}
</script>

<style scoped>
:deep(.van-submit-bar__bar) {
  @apply fixed inset-x-0 flex bottom-14;
}
.delete-button {
  height: 100%;
}
</style>
