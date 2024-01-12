<template>
  <div class="options">
    <header class="flex justify-between items-center p-2">
      <van-icon size="25" name="cross" @click="goBack" />
      <span class="text-xs text-gray-500">遇到问题</span>
    </header>
    <section>
      <!-- 图标 -->
      <div class="flex justify-center items-center w-full h-80">
        <van-icon size="50" name="fire" />
      </div>
    </section>
    <div class="p-4 space-y-4">
      <van-button type="primary" block @click="toAccountLogin"
        >账号密码登录</van-button
      >
      <van-button type="default" block>手机号登录</van-button>
    </div>
    <div class="flex justify-center p-4 my-4 space-x-12">
      <van-icon size="30" name="wechat" />
      <van-icon size="30" name="qq" />
      <van-icon size="30" name="weibo" />
      <van-icon size="30" name="alipay" />
    </div>
    <div class="p-4">
      <van-field name="checkbox">
        <template #input>
          <van-checkbox v-model="checked" shape="round" />
          <span class="text-xs ml-2"
            >已阅读并同意<a class="font-bold" href="#">《用户协议》</a>和<a
              class="font-bold"
              href="#"
              >《隐私政策》</a
            ></span
          >
        </template>
      </van-field>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const checked = ref(false);
const toAccountLogin = () => {
  router.push("/options/login");
};
const goBack = () => {
  router.push('/my')
};
</script>

<style scoped></style>
