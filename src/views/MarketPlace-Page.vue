<template>
  <div>
    <SideBar />
    <v-container style="margin-left: 5%">
      <h1 class="text-center">Programs:</h1>
      <v-row>
        <v-alert v-if="error != null" type="error">{{ error }}</v-alert>
        <v-col
          v-for="index in this.programs.length"
          v-bind:key="index"
          cols="12"
          xs="2"
          sm="2"
          md="4"
          lg="6"
          xl="6"
        >
          <v-col cols="12" xs="2" sm="2" md="4" lg="6" xl="6"> </v-col>
          <v-card color="#676767">
            <!--==========================================-->
            <v-row>
              <v-col xs="12" sm="12" md="12" lg="12" xl="12">
                <v-card-title
                  class="justify-center"
                  style="margin-top: -12px; background: #404040"
                  >{{ programs[index - 1].name }}</v-card-title
                >
              </v-col>
            </v-row>
            <v-row>
              <v-col xs="4" sm="4" md="4" lg="4" xl="4">
                <v-card-text style="padding-bottom: 2%"
                  >Uploaded by: {{ programs[index - 1].username }}
                </v-card-text>
                <v-card-text style="padding-top: 2%; padding-bottom: 2%"
                  >Version: {{ programs[index - 1].version }}
                </v-card-text>
                <div v-if="programs[index - 1].userUpload == true">
                  <v-card-text style="padding-top: 2%; padding-bottom: 2%"
                    >Uploaded by user: Yes
                  </v-card-text>
                </div>
                <div v-else>
                  <v-card-text style="padding-top: 2%; padding-bottom: 2%"
                    >Uploaded by user: No
                  </v-card-text>
                </div>
              </v-col>
              <v-col xs="8" sm="8" md="8" lg="8" xl="8"
                >{{ programs[index - 1].description }}
              </v-col>
            </v-row>
            <!--==========================================-->
            <v-card-actions style="padding-top: 8%">
              <v-btn
                color="#0080ff"
                @click="selectTemplate(programs[index - 1])"
                style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
                >Add this program</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import SideBar from "@/components/SideBar.vue";
import axios from "axios";
export default {
  mounted() {
    axios.defaults.baseURL = "http://82.73.212.90:31235";
    axios.defaults.timeout = 30000;
    console.log("token here" + this.$store.getters.getJWT);
    let comp = this;
    axios({
      method: "get",
      url: "program/getall",
      headers: {
        Authorization: this.$store.getters.getJWT,
      },
    }).then(function (reponse) {
      console.log(reponse);
      if (reponse.status == 200) {
        comp.programs = reponse.data;
      }
    });
  },
  components: {
    SideBar,
  },
  data() {
    return {
      programs: [],
      //name: null,
      //description: null,
      //programs: [],
      cssProps: {
        backgroundImage: `url(${require("@/assets/background.jpg")})`,
      },
    };
  },
};
</script>
