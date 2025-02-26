import axios from "../utils/axiosCustomize";
const postCreateNewUser = (email, password, username, role, img) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", img);
  return axios.post("http://localhost:8081/api/v1/participant", data);
};
export { postCreateNewUser };
