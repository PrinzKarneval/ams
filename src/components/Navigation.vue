<template>
  <div class="blue">
    <div class="d-flex justify-content-between p-3">
      <b-icon icon="list" font-scale="2" v-b-toggle.sidebar></b-icon>
      <slot></slot>
    </div>
    <b-sidebar id="sidebar" backdrop backdrop-variant="dark" no-header shadow>
      <div class="d-flex justify-content-around align-items-center blue py-4">
        <b-avatar></b-avatar>
        <div>
          Franz Schwerdtmann<br>
          Admin<br>
          franz.schwerdtmann@gmail.com
        </div>
      </div>
      <nav class="mt-3">
        <b-nav vertical>
          <b-nav-item :to="{ name: 'Events' }">Events</b-nav-item>
          <b-nav-item :to="{ name: 'Events' }">Mein Team</b-nav-item>
          <b-nav-item :to="{ name: 'Events' }">Anmeldungen</b-nav-item>
          <b-nav-item :to="{ name: 'Events' }">Account</b-nav-item>
          <b-nav-item :to="{ name: 'Start' }">Ausloggen</b-nav-item>
        </b-nav>
      </nav>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style scoped>
</style>
