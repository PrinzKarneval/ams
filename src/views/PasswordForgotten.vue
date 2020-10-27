<template>
  <div class="container">
    <div class="row justify-content-between">
      <img src="https://gemmaf.de/wp-content/uploads/2018/04/regelwerk_gemmaf.jpg"
           height="100px" width="100px">
      <div class="h4 bg-light text-wrap">Ahlete Management System</div>
    </div>
    <div class="flex-column mt-5">
      <router-link class="btn btn-outline-secondary btn-sm" :to="{ name: 'Login' }">
        Zurück
      </router-link>
      <h1 class="bg-light">Passwort zurücksetzen</h1>
      <p>TExt TExt TExt TExt TExt TExt TExt TExt TExt TExt TExt TExt </p>
      <input type="email" id="username" class="form-control my-3" placeholder="Benutzername">
      <button type="button" class="btn btn-block btn-success mt-3" @click="submit">
        Passwort zurücksetzen
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PasswordForgotten',
  methods: {
    submit() {
      this.$router.push({ name: 'PasswordForgottenSuccess' });
    },
  },
};
</script>
