import http from "./http";

export async function getLogin(username, password) {
  const { data } = await http.post("/login", { username, password });
  return data;
}

export async function getRegister(username, password) {
  const { data } = await http.post("/register", { username, password });
  return data;
}

export async function getInformation(username) {
  const { data } = await http.post("/userinfo", { username });
  return data;
}
export async function getuser(id) {
  const { data } = await http.post("/useridfind", { id });
  return data;
}
export async function getSocial() {
  const { data } = await http.post("/social");
  return data;
}

export async function getPersonal(id_s) {
  const { data } = await http.post("/personalSocial", { id_s });
  return data;
}
export async function getComments(id_s) {
  const { data } = await http.post("/comment", { id_s });
  return data;
}

// 发表评论
export async function postComments(params) {
  const { data } = await http.post("/postComment", params);
  return data;
}

// 获取商品列表
export async function getGoodsList() {
  const { data } = await http.get("/product");
  return data;
}

// 获取单个商品
export async function getGoods(id) {
  const { data } = await http.post("/productbyid", { id });
  return data;
}

// 添加购物车
export async function postCart(params) {
  const { data } = await http.post("/productaddcart", params);
  return data;
}

// 获取购物车列表
export async function getCartList(user_id) {
  const { data } = await http.post("/findproductcart",{user_id});
  return data;
}
