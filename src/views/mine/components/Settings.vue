<template>
  <div class="w-screen h-screen bg-[#f6f6f6]">
    <header>
      <van-nav-bar title="设置" left-arrow @click-left="onClickLeft" />
    </header>
    <div class="mt-2">
      <van-cell
        title="账号安全"
        title-style="font-size:12px;"
        is-link
        size="large"
      />
      <van-cell
        title="支付设置"
        title-style="font-size:12px;"
        is-link
        size="large"
      />
      <van-cell
        title="身份认证"
        title-style="font-size:12px;"
        is-link
        size="large"
      />
      <van-cell
        title="地址管理"
        title-style="font-size:12px;"
        is-link
        size="large"
      />
      <van-cell
        title="我的尺码"
        title-style="font-size:12px;"
        is-link
        size="large"
      />
    </div>
    <div class="mt-2">
      <van-cell
        title="隐私设置"
        title-style="font-size:12px;"
        is-link
        size="large"
      />
      <van-cell
        title="意见反馈"
        title-style="font-size:12px;"
        is-link
        size="large"
      />
      <van-cell
        title="关于"
        title-style="font-size:12px;"
        is-link
        size="large"
      />
    </div>
    <div class="mt-2">
      <van-cell
        @click="quit"
        title="退出登录"
        title-style="font-size:12px;"
        is-link
        size="large"
      />
    </div>
  </div>
</template>

<script setup>
const onClickLeft = () => {
  history.back();
};
const quit = () => {
  localStorage.removeItem("token");
  history.back();
};
</script>

<style scoped>
:deep(.van-badge__wrapper) {
  @apply text-[#000];
}
</style>
