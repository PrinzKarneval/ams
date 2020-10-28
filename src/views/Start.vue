<template>
  <VisitorLayout title="Willkommen">
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
      invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
      et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
      diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
      gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </p>
    <div class="d-flex justify-content-between">
      <router-link :to="{ name: 'Login' }" class="btn btn-blue">Login</router-link>
      <router-link :to="{ name: 'RegisterAccount' }" class="btn border-blue">
        Registrieren
      </router-link>
    </div>
  </VisitorLayout>
</template>

<script>
import VisitorLayout from '@/layouts/VisitorLayout.vue';

export default {
  name: 'Start',
  components: { VisitorLayout },
};
</script>
