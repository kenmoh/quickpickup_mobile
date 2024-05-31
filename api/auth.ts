import client from "./client";

const loginApi = (username: string, password: string) => {
  const data = new FormData();
  data.append("username", username.trim());
  data.append("password", password.trim());
console.log(data)
  return client.post("/login", data);
};

export default {
  loginApi,
};