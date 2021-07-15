<template>
  <div>
    <ion-button @click="setOpen(true)">Show Modal</ion-button>
    <ion-modal
      :is-open="isOpenRef"
      css-class="my-custom-class"
      @didDismiss="setOpen(false)"
    >
      <Modal :data="data"></Modal>
    </ion-modal>
  </div>
</template>

<script>
  import { IonModal, IonButton } from "@ionic/vue";
  import { defineComponent, ref } from "vue";
  import Modal from "@/components/Modal.vue";

  export default defineComponent({
    components: { IonModal, IonButton, Modal },
    setup() {
      const isOpenRef = ref(false);
      const setOpen = (state) => (isOpenRef.value = state);
      const data = { content: "New Content" };
      return { isOpenRef, setOpen, data };
    },
  });
</script>
