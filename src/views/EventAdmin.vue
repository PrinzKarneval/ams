<template>
  <div>
    <Navigation class="bg-danger">
      <h3>MDM 2020</h3>
      <b-button :to="{ name: 'Event' }" variant="outline-light">Zurück</b-button>
    </Navigation>
    <div class="d-flex p-3">
      <div class="form-group mr-3">
        <label for="filter-team">Team</label>
        <select id="filter-team" class="form-control">
          <option>Hammers Team Nürnberg e.V.</option>
          <option>Planet Eater</option>
          <option>Fight Bros</option>
        </select>
      </div>
      <div class="form-group">
        <label for="search">Suche</label>
        <input type="text" id="search" class="form-control">
      </div>
    </div>
    <b-tabs>
      <b-tab title="Alle (31)"><AdminTab type="all"/></b-tab>
      <b-tab title="Männer(15)"><AdminTab type="men"/></b-tab>
      <b-tab title="Frauen (10)"><AdminTab type="females"/></b-tab>
      <b-tab title="Trainer (6)"><AdminTab type="trainers"/></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import AdminTab from '@/components/AdminTab.vue';

export default {
  name: 'EventAdmin',
  components: { AdminTab, Navigation },
};
</script>

<style scoped>

</style>
