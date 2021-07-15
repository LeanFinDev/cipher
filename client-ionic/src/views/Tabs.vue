<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="telescope" />
          <ion-label>Explore</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="barChart" />
          <ion-label>Insights</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="person" />
          <ion-label>Account</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
  import {
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonLabel,
    IonIcon,
    IonPage,
  } from "@ionic/vue";
  import {
    ellipse,
    square,
    triangle,
    search,
    telescope,
    telescopeOutline,
    person,
    barChart,
    barChartOutline,
  } from "ionicons/icons";

  export default {
    name: "Tabs",
    components: {
      IonLabel,
      IonTabs,
      IonTabBar,
      IonTabButton,
      IonIcon,
      IonPage,
    },
    setup() {
      return {
        ellipse,
        square,
        triangle,
        search,
        telescope,
        telescopeOutline,
        person,
        barChart,
        barChartOutline,
      };
    },
  };
</script>
