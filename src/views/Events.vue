<template>
  <div>
    <Navigation/>
    <div class="container-fluid">
      <div class="flex-column text-left my-3">
        <h4 class="text-blue">Kommende Veranstaltungen</h4>
        <EventCard v-for="i in 5" :key="i"></EventCard>
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
