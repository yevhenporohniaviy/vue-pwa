<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <router-link to="/" class="white--text mx-3 text-decoration-none">Home</router-link>
      <router-link to="/about" class="white--text mx-3 text-decoration-none">About</router-link>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
    <v-snackbar
      v-model="isRefresh"
      timeout="-1"
      color="info"
      top
    >
      {{text}}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="purple"
          text
          v-bind="attrs"
          @click="update"
        >

          Update
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    text: `New content is available, please update`,
    registration:null,
    isRefresh: false,
    refreshing: false,
  }),
  methods:{
    appUpdateUI:function (e){
      this.registration = e.detail;
      this.isRefresh = true;
    },
    update(){
      this.isRefresh = false;
      if (this.registration || this.registration.waiting) {
        this.registration.waiting.postMessage({type:'SKIP_WAITING'});
      }
    },
  },
  created() {
    navigator.serviceWorker.addEventListener(
      'controllerchange', () => {
        if (this.refreshing) return;
        this.refreshing = true;
        window.location.reload();
      }
    )
    document.addEventListener(
      'serviceWorkerUpdateEvent', this.appUpdateUI, { once: true }
    );
  },
};
</script>
