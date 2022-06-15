<template>
  <div>
    <SideBar />
    <v-container style="margin-left: 5%">
      <v-card ref="form">
        <v-card-title> Upload a program: </v-card-title>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
              <v-card-actions>
                <v-card-text style="width: 50%">
                  Are you uploading a custom program?:</v-card-text
                >
                <v-select
                  ref="customProgram"
                  style="margin-top: 2%"
                  :items="options"
                  :rules="[(v) => !!v || 'Selection is required']"
                  label="Select one"
                  required
                  dense
                  :tabindex="1"
                ></v-select>
              </v-card-actions>
              <v-card-actions>
                <v-card-text style="width: 50%"
                  >Name of the program:
                </v-card-text>
                <v-text-field
                  ref="nameOfProgram"
                  v-model="uploadModel.Name"
                  label="Name of program"
                  clearable
                  required
                  :tabindex="3"
                ></v-text-field>
              </v-card-actions>
              <v-card-actions>
                <v-card-text style="width: 50%"
                  >Description of the program:
                </v-card-text>
                <v-text-field
                  ref="Description"
                  v-model="uploadModel.Description"
                  label="Description"
                  clearable
                  required
                  :tabindex="3"
                ></v-text-field>
              </v-card-actions>
              <v-card-actions>
                <v-card-text style="width: 50%"
                  >Version of the program:
                </v-card-text>
                <v-text-field
                  ref="version"
                  v-model="uploadModel.Version"
                  label="Version of program"
                  clearable
                  required
                  :tabindex="3"
                ></v-text-field>
              </v-card-actions>
              <!-- <v-card-actions
                v-if="
                  programProps.customProgram === 'No' ||
                  programProps.smallerThen2MB === 'Yes'
                "
              >
                <v-card-text style="width: 50%">Download Link: </v-card-text>
                <v-text-field
                  ref="link"
                  v-model="programProps.link"
                  label="Link for download"
                  clearable
                  required
                  :rules="[rules.link]"
                  :tabindex="4"
                ></v-text-field>
              </v-card-actions> -->
              <v-card-actions>
                <v-card-text style="width: 44%"> Upload file: </v-card-text>
                <v-file-input
                  ref="file"
                  show-size
                  truncate-length="15"
                  required
                  v-model="uploadModel.file"
                ></v-file-input>
              </v-card-actions>
              <v-btn
                @click="submit()"
                style="margin-left: 50%"
                :disabled="buttonIsDisabled"
              >
                Submit
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import axios from "axios";
export default {
  components: {
    SideBar,
  },
  data() {
    return {
      test: "test",
      options: ["Yes", "No"],
      formHasErrors: false,
      valid: null,
      uploadModel: {
        Name: null,
        Description: null,
        Version: null,
        userUpload: true,
        Username: "2nowabout",
        file: null,
      },
      rules: {
        link: (value) => {
          const pattern = /http/;
          return pattern.test(value) || "invalid link";
        },
      },
    };
  },
  computed: {
    buttonIsDisabled() {
      return !(
        this.uploadModel.Name != null &&
        (this.uploadModel.link != null || this.uploadModel.file != null)
      );
    },
    form() {
      return {
        nameOfProgram: this.uploadModel.Name,
        link: this.uploadModel.link,
        file: this.uploadModel.file,
      };
    },
  },
  methods: {
    submit() {
      axios.defaults.baseURL = "http://82.73.212.90:31235";
      axios.defaults.timeout = 30000;
      console.log("token here" + this.$store.getters.getJWT);
      let comp = this;
      axios({
        method: "post",
        url: "scanner/scan",
        data: this.uploadModel,
        headers: {
          Authorization: this.$store.getters.getJWT,
          "Content-Type": "multipart/form-data",
        },
      }).then(function (reponse) {
        console.log(reponse);
        if (reponse.status == 200) {
          comp.programs = reponse.data;
        }
      });
    },
  },
};
</script>
