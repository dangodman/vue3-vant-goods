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
                :price="item.product_price.toFixed(2)"
                :desc="item.product_desc"
                :title="item.product_name"
                class="goods-card"
                :thumb="formatImgone(item.product_img)"
              >
                <template #footer>
                  <van-button size="small" @click="onMinus(item)"
                    ><van-icon name="minus"
                  /></van-button>
                  <van-button size="small">{{ item.product_num }}</van-button>
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
import { ref, onMounted } from "vue";
import { getCartList, getInformation } from "@/api";
import {formatImgone} from "@/utils"
const checked = ref([]);
const isCheckAll = ref(false);
const checkboxGroup = ref(null);
const priceAll = ref(0);
const items = ref([
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
  if (item.product_num > 1) {
    item.product_num -= 1;
    calcPrice();
  } else {
    return;
  }
};
const onPlus = (item) => {
  item.product_num += 1;
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
    priceAll.value += item.product_price * item.product_num * 100;
  }
}

onMounted(async () => {
  const user = localStorage.getItem("user");
  if (user) {
    const { data:{id} } = await getInformation(user);
    const { data } = await getCartList(id);
    console.log(data);
    if (data) {
      items.value = data;
    }
  }
});
</script>

<style scoped>
:deep(.van-submit-bar__bar) {
  @apply fixed inset-x-0 flex bottom-14;
}
.delete-button {
  height: 100%;
}
</style>
