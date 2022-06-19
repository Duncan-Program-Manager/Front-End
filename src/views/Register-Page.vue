<template>
  <!--<div :style="cssProps" style="background-size: cover">!-->
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
          style="padding-bottom: 0px; padding-left: 0px; padding-top: 0px"
          class="grey--text"
          >Username
        </v-card-subtitle>
        <v-card-actions
          style="
            padding-top: 0px;
            padding-left: 0px;
            margin-top: 0%;
            margin-bottom: 0%;
          "
        >
          <v-text-field
            v-model="RegisterInfo.username"
            hide-details
            solo
            background-color="#e8f0fe"
          >
          </v-text-field>
        </v-card-actions>
        <v-card-subtitle
          style="padding-bottom: 0px; padding-left: 0px; padding-top: 0px"
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
          <v-text-field
            v-model="RegisterInfo.email"
            hide-details
            solo
            background-color="#e8f0fe"
          >
          </v-text-field>
        </v-card-actions>
        <v-card-subtitle
          style="padding-bottom: 0px; padding-left: 0px; padding-top: 0px"
          class="grey--text"
          >Verify Email
        </v-card-subtitle>
        <v-card-actions
          style="
            padding-top: 0px;
            padding-left: 0px;
            margin-top: 0%;
            margin-bottom: 0%;
          "
        >
          <v-text-field
            v-model="RegisterInfo.verifyEmail"
            hide-details
            solo
            background-color="#e8f0fe"
          >
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
            v-model="RegisterInfo.password"
            background-color="#e8f0fe"
            solo
            hide-details
          >
          </v-text-field>
        </v-card-actions>
        <v-card-subtitle
          style="padding-bottom: 0px; padding-left: 0px; padding-top: 0px"
          class="grey--text"
        >
          Verify Password
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
            v-model="RegisterInfo.verifyPassword"
            background-color="#e8f0fe"
            solo
            hide-details
          >
          </v-text-field>
        </v-card-actions>
        <v-card-actions class="justify-center" style="margin-top: 2%">
          <v-btn width="80%" color="light-blue accent-3" @click="Register()"
            >Register</v-btn
          >
        </v-card-actions>
        <v-card-subtitle class="grey--text" style="padding: 0; margin-top: 0%"
          >if you already have a account:
          <a @click="toLogin()">Click Here! </a></v-card-subtitle
        >
      </v-card>
    </div>
  </v-container>
  <!--</div>!-->
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      RegisterInfo: {
        username: null,
        email: null,
        verifyEmail: null,
        password: null,
        verifyPassword: null,
      },
      error: null,
      cssProps: {
        backgroundImage: `url(${require("@/assets/background.jpg")})`,
        height: "100%",
        width: "100%",
      },
    };
  },
  methods: {
    toLogin() {
      this.$router.push("/");
    },
    Register() {
      if (
        this.RegisterInfo.username == null ||
        this.RegisterInfo.email == null ||
        this.RegisterInfo.verifyEmail == null ||
        this.RegisterInfo.password == null ||
        this.RegisterInfo.verifyPassword == null
      ) {
        this.error = "You didnt fill everything in!";
        return;
      }
      if (this.RegisterInfo.email != this.RegisterInfo.verifyEmail) {
        this.error = "emails are not the same!";
        return;
      }
      if (this.RegisterInfo.password != this.RegisterInfo.verifyPassword) {
        this.error = "passwords are not the same!";
        return;
      }
      let comp = this;
      axios.defaults.baseURL = "http://82.73.212.90:31235";
      axios.defaults.timeout = 30000;
      axios({
        method: "post",
        url: "/auth/register",
        data: {
          email: this.RegisterInfo.email,
          username: this.RegisterInfo.username,
          password: this.RegisterInfo.password,
        },
      })
        .catch(function (error) {
          if (error.response) {
            comp.error = "This combination is not found!";
          } else return;
        })
        .then(function (reponse) {
          if (reponse.status == 409) {
            alert("this email or username already exists");
            return;
          }
          this.toLogin();
        });
    },
  },
};
</script>
