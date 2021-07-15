<template>
  <ion-content>
    <ion-list>
      <ion-list-header>
        Recent Conversations
      </ion-list-header>
      <ion-item
        v-for="(coin, index) in trending"
        :key="index"
        @click="openModal"
      >
        <ion-avatar slot="start">
          <img :src="coin.item.small" />
        </ion-avatar>
        <ion-label>
          <h2>{{ coin.item.name }}</h2>
          <h3>{{ coin.item.price_btc }} BTC</h3>
          <p>{{ coin.item.symbol }}</p>
        </ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script lang="ts">
  import axios from "axios";
  import { IonContent, IonButton, IonPage, modalController } from "@ionic/vue";
  import { defineComponent, ref } from "vue";
  import Modal from "@/components/Modal.vue";

  export default defineComponent({
    name: "trending",
    components: { IonContent },
    data() {
      return {
        count: "cunt",
        trending: [],
      };
    },
    mounted() {
      const result = this.count.split(""); // => Property 'split' does not exist on type 'number'
      axios
        .get("http://127.0.0.1:8000/crypto/trending")
        .then((res) => (this.trending = res.data.coins));
    },
    methods: {
      async openModal() {
        const modal = await modalController.create({
          component: Modal,
          cssClass: "my-custom-class",
          componentProps: {
            title: "New Title",
          },
        });
        return modal.present();
      },
    },
    // setup() {
    //   const content = ref();
    //   const users = [];
    //   const scrollToBottom = () => {
    //     axios.get("http://127.0.0.1:8000/crypto/trending").then((response) => {
    //       console.log(response.data); // assigns the data from api call to the users variable
    //     });
    //   };

    //   return { content, scrollToBottom };
    // },
  });
</script>
