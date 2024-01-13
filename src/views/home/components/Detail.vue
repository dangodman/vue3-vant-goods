<template>
  <div class="detail">
    <header class="fixed bg-white inset-x-0 top-0 z-10">
      <div class="flex justify-between items-center p-2">
        <div class="flex items-center space-x-2">
          <van-icon @click="() => router.back()" size="25" name="arrow-left" />
          <img
            class="rounded-full w-8 h-8"
            src="https://s2.loli.net/2024/01/13/56iuqAxnU8aebXy.jpg"
            alt=""
          />
          <span class="text-xs font-bold">趴趴兔米</span>
        </div>
        <div class="flex items-center space-x-2">
          <van-button size="small" icon="plus" color="#00c2c2">关注</van-button>
          <van-icon size="25" name="share-o" />
        </div>
      </div>
    </header>
    <div class="w-full h-12"></div>
    <section>
      <van-swipe lazy-render>
        <van-swipe-item v-for="image in images" :key="image">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
      <div class="p-2">
        <div class="border-b pb-2">
          <h1 class="font-bold">风情土豆巨巨巨......好吃!</h1>
          <div class="text-sm">
            <p>哇哇哇!姐妹们 风情土豆 真的好好吃啊</p>
          </div>
        </div>
      </div>
    </section>
    <!-- 评论板块 -->
    <section>
      <div class="p-2">
        <h1 class="font-bold mb-2">7条评论</h1>
        <div class="bg-gray-100 rounded-lg flex items-center">
          <img
            class="w-8 h-8 rounded-full"
            src="https://s2.loli.net/2024/01/13/Lm1wnav2M6g3pXs.jpg"
            alt=""
          />
          <input
            class="bg-gray-100 flex-1 ml-2 text-sm"
            type="text"
            placeholder="发言要友善, 畅聊不引战"
          />
          <div class="flex items-center text-center mr-2">
            <van-icon size="20" name="edit" />
          </div>
        </div>
        <div>
          <div v-for="item in 10" class="my-4">
            <div class="flex items-start space-x-2">
              <img
                class="w-8 h-8 rounded-full"
                src="https://s2.loli.net/2024/01/13/Lm1wnav2M6g3pXs.jpg"
                alt=""
              />
              <div class="flex-1 border-b flex flex-col items-start space-y-2">
                <span class="text-sm text-gray-500">好柿豆花生__</span>
                <p class="text-sm">食用油要热的还是常温的啊</p>
                <div class="text-xs text-gray-500">
                  <div class="space-x-2 mb-2">
                    <span>4小时前 · 辽宁省</span>
                    <span>回复</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center text-sm text-gray-500">——— THE END ———</div>
        </div>
      </div>
    </section>
    <div class="w-full h-14"></div>
    <footer class="fixed inset-x-0 bottom-0 bg-white">
      <div class="flex p-2 items-center">
        <div class="bg-gray-100 h-8 flex items-center rounded-xl space-x-2 ml-2">
          <van-icon class="ml-2" size="20" name="edit" />
          <input
            class="bg-gray-100  text-sm h-8 rounded-xl"
            type="text"
            placeholder="发言要友善, 畅聊不引战"
          />
        </div>
        <div class=" ml-4 px-2 flex items-center space-x-4">
          <div class="flex flex-col">
            <van-icon size="24" name="good-job-o" />
            <span class="text-xs">225</span>
          </div>
          <div class="flex flex-col">
            <van-icon size="24" name="star-o" />
            <span class="text-xs">170</span>
          </div>
          <div class="flex flex-col items-center">
            <van-icon size="24" name="comment-o" />
            <span class="text-xs">7</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useRoute,useRouter } from "vue-router";
import { ref, onMounted } from "vue";
const ids = ref();
const route = useRoute();
const router = useRouter();
const images = ref([
  "https://s2.loli.net/2024/01/13/Lm1wnav2M6g3pXs.jpg",
  "https://s2.loli.net/2024/01/13/M59VHDibCoF6asp.jpg",
  "https://s2.loli.net/2024/01/13/zxRfhQ3cn7OEpya.jpg",
  "https://s2.loli.net/2024/01/13/SdxzYjaMs7c6b4N.jpg",
  "https://s2.loli.net/2024/01/13/ZdRiWP3nKt4pmGH.jpg",
  "https://s2.loli.net/2024/01/13/8aJC9uvYpGPHzMS.jpg",
]);
onMounted(() => {
  ids.value = route.query.id;
});
</script>

<style scoped>
:deep(.van-swipe__indicator--active) {
  @apply bg-black;
}
</style>
