<template>
  <v-navigation-drawer permanent expand-on-hover app>
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img :src="this.userdata.avatar"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ this.userdata.username }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ this.userdata.email }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider style="margin-top: 2%"></v-divider>

    <v-list nav dense>
      <v-list-item link @click="toTemplatesPage()">
        <v-list-item-icon>
          <v-icon>mdi-folder</v-icon>
        </v-list-item-icon>
        <v-list-item-title>My Templates</v-list-item-title>
      </v-list-item>
      <v-list-item link @click="toUploadPage()">
        <v-list-item-icon>
          <v-icon>mdi-plus</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Upload Program</v-list-item-title>
      </v-list-item>
      <v-list-item link @click="toMarketPlacePage()">
        <v-list-item-icon>
          <v-icon>mdi-account-multiple</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Marketplace</v-list-item-title>
      </v-list-item>
      <v-list-item link @click="toAccountPage()">
        <v-list-item-icon>
          <v-icon>mdi-account</v-icon>
        </v-list-item-icon>
        <v-list-item-title>My Account</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      userdata: {
        email: null,
        username: null,
        avatar: null,
      },
    };
  },
  mounted() {
    this.userdata = this.$store.getters.getUser;
  },
  methods: {
    toAccountPage() {
      this.$router.push("account");
    },
    toTemplatesPage() {
      this.$router.push("home");
    },
    toUploadPage() {
      this.$router.push("upload");
    },
    toMarketPlacePage() {
      this.$router.push("market");
    },
  },
};
</script>
