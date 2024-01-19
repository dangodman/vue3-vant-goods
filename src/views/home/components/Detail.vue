<template>
  <div class="detail">
    <header class="fixed bg-white inset-x-0 top-0 z-10">
      <div class="flex justify-between items-center p-2">
        <div class="flex items-center space-x-2">
          <van-icon @click="() => router.back()" size="25" name="arrow-left" />
          <img class="rounded-full w-8 h-8" :src="user.avatar" alt="" />
          <span class="text-xs font-bold">{{ user.nickname }}</span>
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
        <h1 class="font-bold mb-2">
          {{ comments?.length ? comments.length : 0 }}条评论
        </h1>
        <div class="bg-gray-100 rounded-lg flex items-center">
          <img class="w-8 h-8 rounded-full" :src="avatar" alt="" />
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
          <div v-for="item in comments" class="my-4">
            <div class="flex items-start space-x-2">
              <img class="w-8 h-8 rounded-full" :src="item.avatar" alt="" />
              <div class="flex-1 border-b flex flex-col items-start space-y-2">
                <span class="text-sm text-gray-500">{{ item.username }}</span>
                <p class="text-sm">{{ item.content }}</p>
                <div class="text-xs text-gray-500">
                  <div class="space-x-2 mb-2">
                    <span>{{ formatTime(item.time) }} · {{ item.city }}</span>
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
        <div
          class="bg-gray-100 h-8 flex items-center rounded-xl space-x-2 ml-2"
        >
          <van-icon class="ml-2" size="20" name="edit" />
          <input
            class="bg-gray-100 text-sm h-8 rounded-xl"
            type="text"
            placeholder="发言要友善, 畅聊不引战"
            v-model="myComment"
            @keyup.enter="onComment"
          />
        </div>
        <div class="ml-4 px-2 flex items-center space-x-4">
          <div class="flex flex-col items-center">
            <van-icon size="24" name="good-job-o" />
            <span class="text-xs">{{ content.like }}</span>
          </div>
          <div class="flex flex-col items-center">
            <van-icon size="24" name="star-o" />
            <span class="text-xs">{{ content.collect }}</span>
          </div>
          <div class="flex flex-col items-center">
            <van-icon size="24" name="comment-o" />
            <span class="text-xs">{{
              comments?.length ? comments.length : 0
            }}</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted, computed } from "vue";
import { getComments, getPersonal, getuser, postComments } from "@/api";
import { useCounterStore } from "@/store/usePersonalInformation.js";
import { formatTime } from "@/utils";
const PersonalStore = useCounterStore();
const route = useRoute();
const router = useRouter();
const user = ref({});
const comments = ref([]);
const content = ref({});
const images = ref([]);
const myComment = ref("");
const avatar = computed(() => PersonalStore.personalInfo.avatar);
const onComment = async () => {
  if (myComment.value) {
    const params = {
      username: PersonalStore.personalInfo.nickname,
      avatar: PersonalStore.personalInfo.avatar,
      time: new Date().getTime(),
      city: "江西省",
      content: myComment.value,
      id_s: route.query.id_s,
    };
    await postComments(params);
    const { data } = await getComments(route.query.id_s);
    comments.value = data;
    myComment.value = "";
  }
};
onMounted(async () => {
  const { data: data1 } = await getPersonal(route.query.id_s);
  const { data: data2 } = await getuser(data1.userId);
  const { data: data3 } = await getComments(route.query.id_s);
  user.value = data2;
  content.value = data1;
  comments.value = data3;
  images.value = data1.image.split(",");
});
</script>

<style scoped>
:deep(.van-swipe__indicator--active) {
  @apply bg-black;
}
</style>
