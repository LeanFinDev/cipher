<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Account</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Account</ion-title>
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
        <ion-card-header>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
          <ion-card-title>Card Title</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <!-- List of Text Items -->
          <ion-list>
            <ion-item>
              <ion-label>Pokémon Yellow</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Mega Man X</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>The Legend of Zelda</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Pac-Man</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Super Mario World</ion-label>
            </ion-item>
          </ion-list>

          <!-- List of Input Items -->
          <ion-list>
            <ion-item>
              <ion-label>Input</ion-label>
              <ion-input></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Toggle</ion-label>
              <ion-toggle slot="end"></ion-toggle>
            </ion-item>
            <ion-item>
              <ion-label>Radio</ion-label>
              <ion-radio slot="end"></ion-radio>
            </ion-item>
            <ion-item>
              <ion-label>Checkbox</ion-label>
              <ion-checkbox slot="start"></ion-checkbox>
            </ion-item>
          </ion-list>

          <!-- List of Sliding Items -->
          <ion-list>
            <ion-item-sliding>
              <ion-item>
                <ion-label>Item</ion-label>
              </ion-item>
              <ion-item-options side="end">
                <ion-item-option @click="unread(item)">Unread</ion-item-option>
              </ion-item-options>
            </ion-item-sliding>

            <ion-item-sliding>
              <ion-item>
                <ion-label>Item</ion-label>
              </ion-item>
              <ion-item-options side="end">
                <ion-item-option @click="unread(item)">Unread</ion-item-option>
              </ion-item-options>
            </ion-item-sliding>
          </ion-list>
        </ion-card-content>
      </ion-card>
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
    IonCheckbox,
    IonInput,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonList,
    IonLabel,
    IonRadio,
    IonToggle,
  } from "@ionic/vue";

  export default {
    name: "Tab2",
    components: {
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonPage,
      IonCheckbox,
      IonInput,
      IonItem,
      IonItemOption,
      IonItemOptions,
      IonItemSliding,
      IonList,
      IonLabel,
      IonRadio,
      IonToggle,
    },
  };
</script>
