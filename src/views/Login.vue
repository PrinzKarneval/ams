<template>
  <VisitorLayout title="Login">
    <input type="email" id="username" class="form-control my-3" placeholder="Benutzername">
    <input type="password" id="password" class="form-control my-3" placeholder="Passwort">
    <button type="button" class="btn btn-block btn-blue mt-3" @click="login">Login</button>
    <div class="text-left">
      <router-link :to="{ name: 'PasswordForgotten' }" class="btn btn-sm border-blue mt-2">
        Passwort vergessen
      </router-link>
    </div>
    <router-link :to="{ name: 'RegisterAccount' }" class="btn btn-block border-blue mt-5">
      Registrieren
    </router-link>
  </VisitorLayout>
</template>

<script>

import VisitorLayout from '@/layouts/VisitorLayout.vue';

export default {
  name: 'Login',
  components: { VisitorLayout },
  methods: {
    login() {
      this.$router.push({ name: 'Events' });
    },
  },
};
</script>
