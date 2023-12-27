import { ref } from "vue";

export function useWaterFall(waterfall) {
  // const waterfall = ref(null);
  // 总共有多少张图片 图片的dom存入数组中 
  let waterfallItem = ref([]);
    waterfallItem = waterfall.value.children;
    // 摆放图片的宽度
    let imgWidth = waterfallItem[0].offsetWidth;
    // 每一行可以放的图片的个数
    let num = Math.floor(waterfall.value.clientWidth / imgWidth);
    const BoxHeightArr = new Array(num).fill(0);
    for (let i = 0; i < waterfallItem.length; i++) {
      if (i <= num) {
        BoxHeightArr[i] = waterfallItem[i].offsetHeight;
      } else {
        let minHeight = Math.min(...BoxHeightArr);
        let index = BoxHeightArr.indexOf(minHeight);
        waterfallItem[i].style.position = "absolute";
        waterfallItem[i].style.top = minHeight + "px";
        waterfallItem[i].style.left = waterfallItem[index].offsetLeft + "px";
        //  更新这一列的高度
        BoxHeightArr[index] += waterfallItem[i].offsetHeight;
      }
    }
}
