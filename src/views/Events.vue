<template>
  <div>
    <Navigation/>
    <div class="container-fluid py-3">
      <h4 class="text-blue">Kommende Veranstaltungen</h4>
      <div class="row">
        <div class="col-12 col-md-6 col-xl-4" v-for="i in 5" :key="i">
          <EventCard/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import EventCard from '@/components/EventCard.vue';

export default {
  name: 'Events',
  components: { EventCard, Navigation },
};
</script>

<style scoped>

</style>
