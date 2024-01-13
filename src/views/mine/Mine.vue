<template>
  <div class="w-screen h-screen bg-[#f4f3f8]">
    <!-- header -->
    <div class="flex p-2 justify-between fixed top-0 inset-x-0 z-10 bg-white">
      <div>
        <IconPark
          :icon="ScanCode"
          theme="filled"
          size="24"
          fill="#333"
          strokeLinejoin="miter"
          strokeLinecap="square"
        />
      </div>
      <div @click="ToSettings">
        <IconPark
          :icon="Config"
          theme="outline"
          size="24"
          fill="#333"
          strokeLinejoin="miter"
          strokeLinecap="square"
        />
      </div>
    </div>
    <!-- 个人资料 -->
    <div class="mt-10 common-p py-2">
      <div v-if="token !== null" class="flex items-center my-2">
        <van-image
          round
          class="w-[70px] h-[70px]"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <div class="flex-1 ml-2">
          <div class="font-bold text-lg">名字</div>
          <div class="text-xs">个性签名</div>
        </div>
      </div>
      <div v-else class="flex items-center my-2" @click="toLogin">
        <van-image
          round
          class="w-[70px] h-[70px]"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <div class="flex-1 ml-2">
          <div class="font-bold text-lg">登录/注册</div>
        </div>
      </div>
      <div class="flex justify-between mr-5">
        <div class="flex flex-col items-center text-sm">
          <span class="font-bold">0</span>
          <span class="text-[#848388]">获赞与收藏</span>
        </div>
        <div class="flex flex-col items-center text-sm">
          <span class="font-bold">0</span>
          <span class="text-[#848388]">粉丝</span>
        </div>
        <div class="flex flex-col items-center text-sm">
          <span class="font-bold">0</span>
          <span class="text-[#848388]">粉丝</span>
        </div>
        <div class="flex flex-col items-center text-sm">
          <span class="font-bold">0</span>
          <span class="text-[#848388]">粉丝</span>
        </div>
      </div>
    </div>
    <!-- 创作中心 -->
    <div class="flex common-p py-1 bg-white">
      <div class="w-[70px]">
        <div class="italic px-[15px] font-bold text-center">创作中心</div>
      </div>
      <div class="flex flex-1 justify-between pl-[25px] pr-3 items-center">
        <div class="flex flex-col items-center">
          <IconPark
            :icon="Config"
            theme="outline"
            size="24"
            fill="#333"
            strokeLinejoin="miter"
            strokeLinecap="square"
          />
          <div class="text-xs">数据</div>
        </div>
        <div class="flex flex-col items-center">
          <IconPark
            :icon="Config"
            theme="outline"
            size="24"
            fill="#333"
            strokeLinejoin="miter"
            strokeLinecap="square"
          />
          <div class="text-xs">数据</div>
        </div>
        <div class="flex flex-col items-center">
          <IconPark
            :icon="Config"
            theme="outline"
            size="24"
            fill="#333"
            strokeLinejoin="miter"
            strokeLinecap="square"
          />
          <div class="text-xs">数据</div>
        </div>
        <div class="flex flex-col items-center">
          <IconPark
            :icon="Config"
            theme="outline"
            size="24"
            fill="#333"
            strokeLinejoin="miter"
            strokeLinecap="square"
          />
          <div class="text-xs">数据</div>
        </div>
      </div>
    </div>
    <!-- card -->
    <div
      class="flex common-p my-2 p-2 justify-between bg-gradient-to-r from-blue-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
    >
      <div class="flex text-[10px] items-center">
        <span class="mr-1">随心省</span>
        <span class="mr-2">|</span>
        <div>
          <span class="mr-1 text-sky-400 text-[12px]">60</span>元券包 全场通用
        </div>
      </div>
      <button class="bg-sky-400 p-1 text-[10px] text-white">限时抢购</button>
    </div>
    <!-- orders -->
    <div class="common-p my-2">
      <Orders />
    </div>
    <!-- wallet -->
    <div class="common-p my-2">
      <Wallet />
    </div>
    <!-- serve -->
    <div class="common-p my-2">
      <Serve />
    </div>
  </div>
</template>

<script setup>
import IconPark from "@/components/common/IconPark.vue";
import Orders from "@/components/common/Orders.vue";
import Wallet from "@/components/common/Wallet.vue";
import Serve from "@/components/common/Serve.vue";
import { ScanCode, Config } from "@icon-park/vue-next";
import { useRouter } from "vue-router";
const router = useRouter();
const token = localStorage.getItem("token");

const toLogin = () => {
  router.push("/options");
};
const ToSettings = () => {
  router.push("/my/settings");
};
</script>

<style scoped>
.common-p {
  @apply mx-2;
}
</style>
