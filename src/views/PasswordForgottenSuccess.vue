<template>
  <div class="container">
    <div class="row justify-content-between">
      <img src="https://gemmaf.de/wp-content/uploads/2018/04/regelwerk_gemmaf.jpg"
           height="100px" width="100px">
      <div class="h4 bg-light text-wrap">Ahlete Management System</div>
    </div>
    <div class="flex-column mt-5">
      <h1 class="bg-light">Passwort zurückgesetzt</h1>
      <p>
        Wir haben dir eine Email mit weiteren Schritten zum Zurücksetzen deines Passwortes
        geschickt. Bitte prüfe auch deinen Spamordner.
      </p>
      <router-link class="btn btn-primary" :to="{ name: 'Login' }">Zum Login</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterAccountSuccess',
};
</script>

<style scoped>

</style>
