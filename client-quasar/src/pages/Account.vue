<template>
  <q-page class="flex flex-center">
    <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-card-section>
        <div class="text-h6">{{ timeWithSeconds }}</div>
        <div class="text-subtitle2">{{ date }}</div>
      </q-card-section>
      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "AccountPage",
  data() {
    return {
      date: null,
      timeWithSeconds: null
    };
  }
};
</script>
