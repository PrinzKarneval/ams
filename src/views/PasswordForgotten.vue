<template>
  <VisitorLayout title="Passwort zurücksetzen">
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
      invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
      et justo duo dolores et ea rebum.
    </p>
    <input type="email" id="username" class="form-control my-3" placeholder="Benutzername">
    <button type="button" class="btn btn-success mt-3" @click="submit">
      Passwort zurücksetzen
    </button>
  </VisitorLayout>
</template>

<script>

import VisitorLayout from '@/layouts/VisitorLayout.vue';

export default {
  name: 'PasswordForgotten',
  components: { VisitorLayout },
  methods: {
    submit() {
      this.$router.push({ name: 'PasswordForgottenSuccess' });
    },
  },
};
</script>
