<template>
  <div class="login">
    <header class="flex justify-between items-center p-2">
      <van-icon size="25" name="cross" @click="goBack" />
      <span class="text-xs text-gray-500">遇到问题</span>
    </header>
    <section>
      <h1 class="text-2xl font-bold text-center my-10">登录</h1>
      <van-form @submit="onSubmit" model="params">
        <van-cell-group inset>
          <van-field
            v-model="params.username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="params.password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button block color="#d2d2d2" native-type="submit">
            登录
          </van-button>
        </div>
        <div class="text-center" @click="toRegister">无账号？点击注册</div>
        <van-field name="checkbox">
          <template #input>
            <van-checkbox v-model="params.checked" shape="round" />
            <span class="text-xs ml-2"
              >已阅读并同意<a class="font-bold" href="#">《用户协议》</a>和<a
                class="font-bold"
                href="#"
                >《隐私政策》</a
              ></span
            >
          </template>
        </van-field>
      </van-form>
    </section>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const params = reactive({
  username: "",
  password: "",
  checked: false,
});
const goBack = () => {
  router.push("/options");
};
const toRegister = () => {
  router.push("/options/register");
};
const onSubmit = () => {};
</script>

<style scoped></style>
