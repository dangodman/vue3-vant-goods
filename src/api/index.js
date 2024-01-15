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

export async function getPersonal(id_s){
  const { data } = await http.post("/personalSocial", { id_s });
  return data
}
export async function getComments(id_s) {
  const { data } = await http.post("/comment", { id_s });
  return data;
}
