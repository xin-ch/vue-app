import asxios from "axios";
import store from "./store/index";
import router from "./router/index";

export default function setAxios() {
  asxios.interceptors.request.use((config) => {
    if (store.state.token) {
      config.headers.token = store.state.token;
    }
    return config;
  });

  asxios.interceptors.response.use((response) => {
      const data = response.data;
    if (response.status == 200) {
      if (data.code == 401) {
        store.commit("settoken", "");
        localStorage.removeItem("token");
        router.replace({
          path: "/login",
        });
      }
      return data
    }
    return response

  });
}
