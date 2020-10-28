<template>
  <div class="card blue border-0 rounded-0 px-3 text-center text-light">
    <div>
      <img class="img-fluid" src="@/assets/mdm20.jpeg" @click="fullscreen=true">
    </div>
    <div class="card-body">
      <h4 class="card-title">Mitteldeutsche Meisterschaften 2020</h4>
      <h6 class="card-subtitle">German Mixed Martial-Arts Federation e.V.</h6>
      <div class="row mt-3">
        <div class="col text-left">07.11.2020</div>
        <div class="col text-center">Göttingen</div>
        <div class="col text-right">Reg. bis 14.08.2020</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventHeader',
  data() {
    return {
      fullscreen: false,
    };
  },
};
</script>

<style scoped>
</style>
