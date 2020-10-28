<template>
  <div class="card my-3">
    <img class="img-fluid" src="@/assets/mdm20.jpeg">
    <div class="card-body">
      <div class="row mb-2">
        <div class="col text-left">07.11.2020</div>
        <div class="col text-center">Göttingen</div>
        <div class="col text-right">Amateure</div>
      </div>
      <div class="mb-2">
        <router-link :to="{ name: 'Event' }" class="card-title h4 text-blue">
          Mitteldeutsche Meisterschaften 2020
        </router-link>
      </div>
      <h6 class="card-subtitle">German Mixed Martial-Arts Federation e.V.</h6>
      <div class="mt-2" v-if="showLinks">
        <router-link :to="{ name: 'Event' }" class="btn btn-primary">Öffnen</router-link>
        <router-link :to="{ name: 'EventAdmin' }" class="btn btn-danger ml-2">Admin</router-link>
      </div>
    </div>
    <div class="card-footer bg-danger p-1 text-center text-light">
      Registrierung geschlossen!
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  props: ['showLinks'],
};
</script>

<style scoped>
  img {
    max-height: 200px;
    height: auto;
    width: auto;
  }
</style>
