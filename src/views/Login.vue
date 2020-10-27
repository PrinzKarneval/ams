<template>
  <div class="container">
    <div class="row justify-content-between">
      <img src="https://gemmaf.de/wp-content/uploads/2018/04/regelwerk_gemmaf.jpg"
           height="100px" width="100px">
      <div class="h4 bg-light text-wrap">Ahlete Management System</div>
    </div>
    <div class="flex-column mt-5">
      <h1 class="bg-light">Login</h1>
      <input type="email" id="username" class="form-control my-3" placeholder="Benutzername">
      <input type="password" id="password" class="form-control my-3" placeholder="Passwort">
      <button type="button" class="btn btn-block btn-success mt-3" @click="login">Login</button>
      <div class="text-left">
        <router-link :to="{ name: 'PasswordForgotten' }" class="btn btn-sm btn-secondary">
          Passwort vergessen
        </router-link>
      </div>
      <router-link :to="{ name: 'RegisterAccount' }" class="btn btn-block btn-info mt-5">
        Registrieren
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  methods: {
    login() {
      this.$router.push({ name: 'Events' });
    },
  },
};
</script>
