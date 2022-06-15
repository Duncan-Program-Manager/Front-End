<template>
  <div>
    <SideBar />
    <v-container style="margin-left: 5%">
      <h1 class="text-center">Your templates:</h1>
      <v-row>
        <v-alert v-if="error != null" type="error">{{ error }}</v-alert>
        <v-col
          v-for="index in this.templates.length"
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
                  >{{ templates[index - 1].name }}</v-card-title
                >
              </v-col>
            </v-row>
            <v-row>
              <v-col xs="8" sm="8" md="8" lg="8" xl="8">
                <v-img
                  v-if="templates[index - 1].picturelink !== ''"
                  :src="templates[index - 1].picturelink"
                  max-height="125"
                  contain
                ></v-img>
                <v-img
                  v-else
                  src="https://cdn-icons-png.flaticon.com/512/2343/2343640.png"
                  max-height="125"
                  contain
                ></v-img>
              </v-col>
              <v-col xs="3" sm="3" md="3" lg="3" xl="3">
                <v-row
                  v-for="index2 in templates[index - 1].programs.length"
                  v-bind:key="index2"
                  no-gutters
                  justify="center"
                  align="center"
                  style="padding: 0px"
                >
                  <v-card-subtitle
                    style="
                      margin: 0px;
                      padding: 0px;
                      font-size: 10px;
                      line-height: 1;
                    "
                  >
                    {{ templates[index - 1].programs[index2 - 1] }}
                  </v-card-subtitle>
                </v-row>
              </v-col>
            </v-row>
            <!--==========================================-->
            <v-card-actions style="padding-top: 8%">
              <v-btn
                color="#0080ff"
                @click="selectTemplate(templates[index - 1])"
                style="
                  margin-left: 2%;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                "
                >Select this template</v-btn
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

export default {
  mounted() {
    this.templates = [
      {
        name: "test1",
        description: "test1 description",
        picturelink:
          "https://www.howtogeek.com/wp-content/uploads/2016/08/img_57b0ee98afe14.png?width=1198&trim=1,1&bg-color=000&pad=1,1",
        programs: ["testprogramma1", "testprogramma2"],
      },
      {
        name: "test2",
        description: "test2 description",
        picturelink: "",
        programs: ["testprogramma1", "testprogramma2"],
      },
      {
        name: "test3",
        description: "test3 description",
        picturelink: "",
        programs: ["testprogramma1", "testprogramma2"],
      },
    ];
  },
  data() {
    return {
      templates: [],
      //name: null,
      //description: null,
      //programs: [],
      cssProps: {
        backgroundImage: `url(${require("@/assets/background.jpg")})`,
      },
    };
  },
  components: {
    SideBar,
  },
  methods: {
    // selectTemplate(template) {
    //   template;
    // },
  },
};
</script>
