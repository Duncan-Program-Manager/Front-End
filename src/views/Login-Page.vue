<template>
  <!-- <div :style="cssProps" style="background-size: cover">-->
  <v-container>
    <div
      style="
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      "
    >
      <v-card
        elevation="2"
        color="#36393f"
        style="width: 600px; height: 100%; padding: 5%"
      >
        <v-card-title
          class="white--text justify-center"
          style="padding-bottom: 0px; margin-bottom: 0%"
        >
          Welcome To:
        </v-card-title>
        <v-card-title
          class="white--text justify-center"
          style="padding-top: 0px; margin-top: 0%; margin-bottom: 2%"
        >
          The Duncan Program Manager!
        </v-card-title>
        <v-alert v-if="error != null" type="error">{{ error }}</v-alert>
        <v-card-subtitle
          style="padding-bottom: 0px; padding-left: 0px"
          class="grey--text"
          >Email
        </v-card-subtitle>
        <v-card-actions
          style="
            padding-top: 0px;
            padding-left: 0px;
            margin-top: 0%;
            margin-bottom: 0%;
          "
        >
          <v-text-field v-model="user.email" solo background-color="#e8f0fe">
          </v-text-field>
        </v-card-actions>
        <v-card-subtitle
          style="padding-bottom: 0px; padding-left: 0px; padding-top: 0px"
          class="grey--text"
          >Password
        </v-card-subtitle>
        <v-card-actions
          style="
            padding-top: 0px;
            padding-left: 0px;
            padding-bottom: 0px;
            margin: 0%;
          "
        >
          <v-text-field
            :type="show1 ? 'text' : 'password'"
            v-model="user.password"
            background-color="#e8f0fe"
            solo
            hide-details
          >
          </v-text-field>
        </v-card-actions>
        <a
          class="blue--text"
          style="padding: 0; margin-top: 0%"
          @click="toForgot()"
          >Forgot your password?</a
        >
        <v-card-actions class="justify-center" style="margin-top: 2%">
          <v-btn width="80%" color="light-blue accent-3" @click="login()"
            >Login</v-btn
          >
        </v-card-actions>
        <v-card-subtitle class="grey--text" style="padding: 0; margin-top: 0%"
          >if you don't have a account yet:
          <a @click="toRegister()">Click Here! </a></v-card-subtitle
        >
      </v-card>
    </div>
  </v-container>
  <!-- </div>-->
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    this.$store.dispatch("createAxios");
  },
  data() {
    return {
      error: null,
      user: {
        email: null,
        username: "",
        password: null,
      },
      cssProps: {
        backgroundImage: `url(${require("@/assets/background.jpg")})`,
        height: "100%",
        width: "100%",
      },
    };
  },
  methods: {
    toRegister() {
      this.$router.push("register");
    },
    toForgot() {
      this.$router.push("forgot");
    },
    toHomePage() {
      this.$router.push("home");
    },
    login() {
      axios.defaults.baseURL = "http://82.73.212.90:31235";
      axios.defaults.timeout = 30000;
      let comp = this;
      // axios.interceptors.response.use(
      //   function (response) {
      //     return response;
      //   },
      //   function (error) {
      //     console.log(error.response.data);
      //     if (error.response.status === 401) {
      //       comp.error = "This combination is not found!";
      //     }
      //     return Promise.reject(error);
      //   }
      // );
      axios({
        method: "post",
        url: "/auth/login",
        data: this.user,
      })
        .catch(function (error) {
          if (error.response) {
            comp.error = "This combination is not found!";
          } else return;
        })
        .then(function (reponse) {
          if (reponse == null) return;
          console.log(reponse);
          if (reponse.status == 200) {
            console.log(reponse.data);
            comp.$store.commit("setToken", reponse.data);
            console.log("token here" + comp.$store.getters.getJWT);
            comp.$router.push("home");
          } else return;
        });
    },
  },
};
</script>
