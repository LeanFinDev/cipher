<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/cypher_logo.png" />
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
    <q-btn-dropdown label="Button" color="primary">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Photos</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <q-badge color="{1:orange}" text-color="{2:black}" label="{3:v1.0.0}" />
    <q-date v-model="date" landscape minimal flat bordered />
    <q-time v-model="timeWithSeconds" with-seconds flat bordered />
    <q-timeline color="secondary" layout="dense">
      <q-timeline-entry heading>
        Timeline heading
      </q-timeline-entry>
      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        avatar="https://cdn.quasar.dev/img/avatar2.jpg"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </q-timeline-entry>
      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        color="orange"
        icon="done_all"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </q-timeline-entry>
    </q-timeline>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      date: null,
      timeWithSeconds: null
    };
  }
};
</script>
