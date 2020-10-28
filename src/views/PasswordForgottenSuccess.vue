<template>
  <VisitorLayout title="Passwort zurückgesetzt">
    <p>
      Wir haben dir eine Email mit weiteren Schritten zum Zurücksetzen deines Passwortes
      geschickt. Bitte prüfe auch deinen Spamordner.
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
