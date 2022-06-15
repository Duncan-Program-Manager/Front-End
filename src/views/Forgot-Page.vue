<template>
  <div :style="cssProps" style="background-size: cover">
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
          style="width: 600px; height: 240px; padding: 5%"
        >
          <v-card-title
            class="white--text justify-center"
            style="padding-bottom: 0px; margin-bottom: 0%"
          >
            Forgotten password
          </v-card-title>
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
            <v-text-field hide-details solo background-color="#e8f0fe">
            </v-text-field>
          </v-card-actions>
          <v-card-actions class="justify-center" style="margin-top: 2%">
            <v-btn
              width="80%"
              color="light-blue accent-3"
              @click="ResetPassword()"
              >Reset password</v-btn
            >
          </v-card-actions>
          <v-card-subtitle class="grey--text" style="padding: 0; margin-top: 0%"
            >If you remember your password:
            <a @click="toLogin()">Click Here! </a></v-card-subtitle
          >
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require("@/assets/background.jpg")})`,
        height: "100%",
        width: "100%",
      },
    };
  },
  methods: {
    ResetPassword() {
      this.$router.push("register");
    },
    toLogin() {
      this.$router.push("/");
    },
  },
};
</script>
