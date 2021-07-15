<template>
  <q-page class="flex flex-center">
    <q-card class="my-card" flat bordered>
      <q-card-section>
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input v-model="email" type="email" label="Email" outlined />
          <q-input
            v-model="password"
            type="password"
            label="Password"
            outlined
          />
          <div>
            <q-btn
              label="Submit"
              type="submit"
              color="primary"
              unelevated
              no-caps
            />
            <q-btn
              label="Reset"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </q-card-section>
      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "AuthPage",
  data() {
    return {
      username: null,
      email: null,
      password: null
    };
  },
  methods: {
    onSubmit() {
      this.$router.push("/");
    },
    onReset() {
      return null;
    }
  }
};
</script>
