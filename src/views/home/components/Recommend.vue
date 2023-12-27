<template>
  <div class="mb-12 w-full h-screen overflow-auto  relative bg-[#f4f3f8]" ref="waterfall">
    <div class="w-1/2 p-px float-left bg-white">
      <router-link :to="{ path: '/detail', query: { id: 0 } }">
        <div class="card_img ">
          <img class="w-full" src="https://th.bing.com/th/id/OIP.ZcjidB6ytMyNAjg9clT4PAHaNK?rs=1&pid=ImgDetMain" alt="">
        </div>
        <p class="w-full p-1 text-lg double-line">ddddddddddddddddddddddddddddddddddddddddddd</p>
        <div class="flex items-center p-1 justify-between">
          <div class="flex items-center"><img class="w-5 h-5 rounded-full"
              src="https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0" alt="">
            <span class="ml-1 text-sm">小卢仙</span>
          </div>
          <div class="">
            <button>赞</button>
            <span class="text-sm">61</span>
          </div>
        </div>
      </router-link>
    </div>
    <div class="w-1/2 p-px float-left">
      <div class="card_img ">
        <img class="w-full" src="https://pic35.photophoto.cn/20150511/0034034892281415_b.jpg" alt="">
      </div>
      <p class="w-full p-1 text-lg double-line">ddddddddddddddddddddddddddddddddddddddddddd</p>
      <div class="flex items-center p-1 justify-between">
        <div class="flex items-center"><img class="w-5 h-5 rounded-full"
            src="https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0" alt="">
          <span class="ml-1 text-sm">小卢仙</span>
        </div>
        <div class="flex items-center">
            <ThumbsUp theme="outline" size="20" fill="#9b9b9b" strokeLinejoin="miter" strokeLinecap="square" />
          <span class="text-sm ml-1">61</span>
        </div>
      </div>
    </div>
    <div class="w-1/2 p-px float-left">
      <div class="card_img ">
        <img class="w-full" src="https://th.bing.com/th/id/OIP.ZcjidB6ytMyNAjg9clT4PAHaNK?rs=1&pid=ImgDetMain" alt="">
      </div>
      <p class="w-full p-1 text-lg double-line">ddddddddddddddddddddddddddddddddddddddddddd</p>
      <div class="flex items-center p-1 justify-between">
        <div class="flex items-center"><img class="w-5 h-5 rounded-full"
            src="https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0" alt="">
          <span class="ml-1 text-sm">小卢仙</span>
        </div>
        <div class="">
          <button>赞</button>
          <span class="text-sm">61</span>
        </div>
      </div>
    </div>
    <div class="w-1/2 p-px float-left">
      <div class="card_img ">
        <img class="w-full" src="https://th.bing.com/th/id/OIP.ZcjidB6ytMyNAjg9clT4PAHaNK?rs=1&pid=ImgDetMain" alt="">
      </div>
      <p class="w-full p-1 text-lg double-line"></p>
      <div class="flex items-center p-1 justify-between">
        <div class="flex items-center"><img class="w-5 h-5 rounded-full"
            src="https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0" alt="">
          <span class="ml-1 text-sm">小卢仙</span>
        </div>
        <div class="">
          <button>赞</button>
          <span class="text-sm">61</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ThumbsUp } from '@icon-park/vue-next'
const waterfall = ref(null)
// 总共有多少张图片 图片的dom存入数组中
// let waterfallItem = ref([])
// function imgLocation() {
//   waterfallItem = waterfall.value.children
//   // 摆放图片的宽度
//   let imgWidth = waterfallItem[0].offsetWidth
//   // 每一行可以放的图片的个数
//   let num = Math.floor(waterfall.value.clientWidth / imgWidth)
//   const BoxHeightArr = new Array(num).fill(0)
//   for (let i = 0; i < waterfallItem.length; i++) {
//     if (i <= num) {
//       BoxHeightArr[i] = waterfallItem[i].offsetHeight
//     } else {
//       let minHeight = Math.min(...BoxHeightArr)
//       let index = BoxHeightArr.indexOf(minHeight)
//       waterfallItem[i].style.position = 'absolute'
//       waterfallItem[i].style.top = minHeight + 'px'
//       waterfallItem[i].style.left = waterfallItem[index].offsetLeft + 'px'
//       //  更新这一列的高度
//       BoxHeightArr[index] += waterfallItem[i].offsetHeight
//     }
//   }
// }
import { useWaterFall } from './useWaterFall.js'
onMounted(() => {
  // imgLocation()
  useWaterFall(waterfall)
})
</script>

<style  scoped>
.double-line {
  @apply break-all overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webit-line-clamp:2] line-clamp-2;
}
</style>