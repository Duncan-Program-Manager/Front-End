import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      JWTtoken: null,
      background: null,
      fullAxios: null,
      userdata: {
        email: "test@hotmail.com",
        username: "2nowabout",
        avatar: "https://randomuser.me/api/portraits/women/85.jpg",
      },
    };
  },
  getters: {
    getBackground: (state) => state.background,
    getUser: (state) => state.userdata,
    getAxios: (state) => state.fullAxios,
    getJWT: (state) => state.JWTtoken,
  },
  mutations: {
    setToken(state, value) {
      console.log("Setting token" + value);
      state.JWTtoken = value;
    },
    setBackground(state, value) {
      state.background = value;
    },
    setUser(state, value) {
      state.userdata = value;
    },
    setAxios(state, value) {
      state.fullAxios = value;
    },
  },
  actions: {},
  modules: {},
});
