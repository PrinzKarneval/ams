<template>
  <VisitorLayout title="Registrierung abgeschlossen">
    <p class="text-center">
      Dein Basisaccount wurde erstellt und du kannst dich sofort einloggen.<br>
      Solltest du ein Athleten-/Trainer-Profil wird dieses nach erfolgter Prüfung freigeschaltet.
    </p>
    <router-link class="btn btn-blue" :to="{ name: 'Login' }">Zum Login</router-link>
  </VisitorLayout>
</template>

<script>
import VisitorLayout from '@/layouts/VisitorLayout.vue';

export default {
  name: 'RegisterAccountSuccess',
  components: { VisitorLayout },
};
</script>

<style scoped>

</style>
