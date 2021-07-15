<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Explore</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-segment value="all">
          <ion-segment-button value="all">Crypto</ion-segment-button>
          <ion-segment-button value="favorites">Stocks</ion-segment-button>
          <ion-segment-button value="last">Betting</ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Explore</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
          <ion-card-title>Card Title</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit
          clean.
        </ion-card-content>
      </ion-card>
      <trending />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import axios from "axios";
  import Trending from "@/components/Trending.vue";
  import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  } from "@ionic/vue";

  export default {
    name: "Tab3",
    components: {
      Trending,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonPage,
    },
  };
</script>
