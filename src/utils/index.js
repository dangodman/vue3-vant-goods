// 根据时间戳处理时间 返回整数

export const formatTime = (timeStamp) => {
  let date = new Date().getTime();
  let time = Math.abs(date - timeStamp);
  if (time < 60 * 1000) {
    return Math.floor(time / 1000) + "秒前";
  } else if (time < 60 * 60 * 1000) {
    return Math.floor(time / (60 * 1000)) + "分钟前";
  } else if (time < 60 * 60 * 24 * 1000) {
    return Math.floor(time / (60 * 60 * 1000)) + "小时前";
  } else if (time < 60 * 60 * 24 * 30 * 1000) {
    return Math.floor(time / (60 * 60 * 24 * 1000)) + "天前";
  }
};

// 将多张字符串图片链接转为数组
export const formatImg = (img) => {
  if (img.includes(",")) {
    let arr = [];
    arr = img.split(",");
    return arr;
  } else {
    return img;
  }
};
// 将多张图片转为数组,并只获取第一张图片
export const formatImgone = (img) => {
  if (img.includes(",")) {
    let arr = [];
    arr = img.split(",");
    return arr[0];
  } else {
    return img;
  }
};
