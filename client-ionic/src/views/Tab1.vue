<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Insights</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Insights</ion-title>
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

      <ion-card>
        <ion-item>
          <ion-icon :icon="pin" slot="start"></ion-icon>
          <ion-label>ion-item in a card, icon left, button right</ion-label>
          <ion-button fill="outline" slot="end">View</ion-button>
        </ion-item>

        <ion-card-content>
          This is content, without any paragraph or header tags, within an
          ion-card-content element.
        </ion-card-content>
      </ion-card>

      <ion-card v-for="i in 4" :key="i">
        <ion-item href="#" class="ion-activated">
          <ion-icon :icon="wifi" slot="start"></ion-icon>
          <ion-label>Card Link Item 1 activated</ion-label>
        </ion-item>

        <ion-item href="#">
          <ion-icon :icon="wine" slot="start"></ion-icon>
          <ion-label>Card Link Item 2</ion-label>
        </ion-item>

        <ion-item class="ion-activated">
          <ion-icon :icon="warning" slot="start"></ion-icon>
          <ion-label>Card Button Item 1 activated</ion-label>
        </ion-item>

        <ion-item>
          <ion-icon :icon="walk" slot="start"></ion-icon>
          <ion-label>Card Button Item 2</ion-label>
        </ion-item>
      </ion-card>

      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button>
          <ion-icon :icon="share"></ion-icon>
        </ion-fab-button>
        <ion-fab-list side="top">
          <ion-fab-button
            ><ion-icon :icon="logoVimeo"></ion-icon
          ></ion-fab-button>
        </ion-fab-list>
        <ion-fab-list side="bottom">
          <ion-fab-button
            ><ion-icon :icon="logoFacebook"></ion-icon
          ></ion-fab-button>
        </ion-fab-list>
        <ion-fab-list side="start">
          <ion-fab-button
            ><ion-icon :icon="logoInstagram"></ion-icon
          ></ion-fab-button>
        </ion-fab-list>
        <ion-fab-list side="end">
          <ion-fab-button
            ><ion-icon :icon="logoTwitter"></ion-icon
          ></ion-fab-button>
        </ion-fab-list>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFab,
    IonFabButton,
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonIcon,
    IonItem,
    IonLabel,
  } from "@ionic/vue";
  import {
    add,
    arrowBackCircle,
    arrowForwardCircle,
    arrowUpCircle,
    logoFacebook,
    logoInstagram,
    logoTwitter,
    logoVimeo,
    person,
    settings,
    share,
    pin,
    walk,
    warning,
    wifi,
    wine,
  } from "ionicons/icons";

  export default {
    name: "Tab1",
    components: {
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonPage,
      IonFab,
      IonFabButton,
      IonCard,
      IonCardContent,
      IonCardSubtitle,
      IonCardTitle,
      IonIcon,
      IonItem,
      IonLabel,
    },
    setup() {
      return {
        add,
        arrowBackCircle,
        arrowForwardCircle,
        arrowUpCircle,
        logoFacebook,
        logoInstagram,
        logoTwitter,
        logoVimeo,
        person,
        settings,
        share,
        pin,
        walk,
        warning,
        wifi,
        wine,
      };
    },
  };
</script>
