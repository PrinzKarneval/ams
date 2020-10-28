<template>
  <div class="d-flex align-items-center justify-content-between bg-light">
    <router-link :to="{ name: 'Start' }">
      <img
        src="https://gemmaf.de/wp-content/uploads/2018/04/regelwerk_gemmaf.jpg"
        alt="gemmaf-logo"
        height="100px"
      >
    </router-link>
    <div class="m-0 flex-grow-1 row text-blue">
      <div class="h4 col align-self-center text-center">Ahlete Management System</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>
