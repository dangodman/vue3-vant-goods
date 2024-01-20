import { defineStore } from "pinia";

export const useShoeCategories = defineStore("shoeCategories", () => {
  const shoeCategories = [
    {
      id: 1,
      url: "https://s2.loli.net/2024/01/13/ZJNPRl3x9f7VtQ5.jpg",
      title: "新鞋速递",
    },
    {
      id: 2,
      url: "https://s2.loli.net/2024/01/20/H39FNiJvWfylxkO.jpg",
      title: "国潮好货",
    },
    {
      id: 3,
      url: "https://s2.loli.net/2024/01/20/W85vF29nRb7ZamM.jpg",
      title: "人气榜单",
    },
    {
      id: 4,
      url: "https://s2.loli.net/2024/01/20/l1VgxkzF5Z2AnUO.jpg",
      title: "城市漫步",
    },
    {
      id: 5,
      url: "https://s2.loli.net/2024/01/20/ViJWyEjnskaO4zu.jpg",
      title: "寒冬穿这双",
    },
    {
      id: 6,
      url: "https://s2.loli.net/2024/01/20/2ws35FCRDZYmfht.jpg",
      title: "男鞋推荐款",
    },
    {
      id: 7,
      url: "https://s2.loli.net/2024/01/20/9foNasOJCRFhWcY.jpg",
      title: "透气板鞋",
    },
    {
      id: 8,
      url: "https://s2.loli.net/2024/01/20/63Od57BaK94Neyb.jpg",
      title: "女鞋推荐款",
    },
    {
      id: 9,
      url: "https://s2.loli.net/2024/01/20/E9zHmQyOWtehgSc.jpg",
      title: "时尚嘉年华",
    },
    {
      id: 10,
      url: "https://s2.loli.net/2024/01/20/ynaDcsSP4xMtk3W.jpg",
      title: "青春穿搭鞋",
    },
  ];

  const brands = [
    {
      id: 1,
      brandLogo: "https://th.bing.com/th/id/R.58844d7fd327ef9db13387cf929dcbac?rik=Ot3yGxs%2fmf%2fvxQ&riu=http%3a%2f%2fwww.logomister.cn%2fupfiles%2fimage%2fimage%2f20191008%2f20191008211430_34988.jpg&ehk=UrRvOVoAe3kLx%2b%2b9auSaOqn0yyrEtUu2VRf1MmqXPVo%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
      brandName: "jordan",
    },
    {
      id: 2,
      brandLogo: "https://th.bing.com/th/id/R.c3c4415100e5ed829181be9ed37fa818?rik=H7TTzIfSpvrLQg&riu=http%3a%2f%2fimage.bao315.com%2fupload%2fimage%2f201702%2f17%2f3faba7fb-c0f3-4268-9849-db0cb9991559.jpg&ehk=HYyT02DlQyFU7NGYX0W%2b2aJlx9GbJhx2VdW09xrilyo%3d&risl=&pid=ImgRaw&r=0",
      brandName: "nike",
    },
    {
      id: 3,
      brandLogo: "https://th.bing.com/th/id/R.c31211d4d1b0308e571cecc25608d37a?rik=hZVSBHYzFRHSMw&riu=http%3a%2f%2fwww.logomister.cn%2fupfiles%2fimage%2fimage%2f20191009%2f20191009205844_13045.jpg&ehk=iZSoSz6qH65YxmWrjDGIyj1TSXiEsRnZrqA4p9s3z1w%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
      brandName: "匡威",
    },
    {
      id: 4,
      brandLogo: "https://th.bing.com/th/id/R.8b0e31f7f61462c57bbb24fb87e34175?rik=2d0rE6J7ibSXUg&riu=http%3a%2f%2fwww.logomister.cn%2fupfiles%2fimage%2fimage%2f20191008%2f20191008211439_89782.jpg&ehk=QsaeuHxkSxnUAO8AvYF81Wm1hsf0Cv0%2fc4j8YduY%2bHQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
      brandName: "匹克",
    },
  ];

  return {
    shoeCategories,
    brands
  };
});
