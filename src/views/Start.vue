<template>
  <div class="container">
    <div class="row justify-content-between">
      <img src="https://gemmaf.de/wp-content/uploads/2018/04/regelwerk_gemmaf.jpg"
           height="100px" width="100px">
      <div class="h4 bg-light text-wrap">Ahlete Management System</div>
    </div>
    <div class="flex-column mt-5 text-center">
      <h1 class="bg-light">Willkommen</h1>
      <p>
        ngojdskhgkdsfag<br>
        ngojdskhgkdsfag<br>
        ngojdskhgkdsfag<br>
        ngojdskhgkdsfag<br>
        ngojdskhgkdsfag<br>
        ngojdskhgkdsfag<br>
        ngojdskhgkdsfag<br>
        ngojdskhgkdsfag<br>
        ngojdskhgkdsfag<br>
        ngojdskhgkdsfag<br>
        ngojdskhgkdsfag<br>
        ngojdskhgkdsfag<br>
      </p>
      <router-link :to="{ name: 'Login' }" class="btn btn-primary">Login</router-link>
      <router-link class="btn btn-primary">Registrieren</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Start',
};
</script>
