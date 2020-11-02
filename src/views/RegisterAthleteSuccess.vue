<template>
  <div>
    <Navigation/>
    <div class="container-fluid mt-3">
      <h4 class="text-success">Registrierungen erfolgreich!</h4>
      <div class="mt-3">
        <div class="font-weight-bold">Angemeldete Athleten</div>
        <div class="card">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-2">
                <img class="img-fluid" src="@/assets/avatar.jpg">
              </div>
              <div class="col-10">
                <div class="font-weight-bold">Franz Schwerdtmann</div>
                <div>Halbschwergewicht [-93.0 kg]</div>
                <div>Bluttest gültig</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3">
        <div class="font-weight-bold">Angemeldete Trainer</div>
        <div class="card">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-2">
                <img class="img-fluid" src="@/assets/avatar.jpg">
              </div>
              <div class="col-10">
                <div class="font-weight-bold">Franz Schwerdtmann</div>
                <div>Trainer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="mt-3">
        Die Athleten wurden für das Event in den jeweiligen Gewichtsklassen angemeldet.
        Sobald die Prüfung der Athleten abgeschlossen ist, werdet ihr benachrichtigt wer kämpfen
        kann oder auf die Warteliste gesetzt wurde.<br>
        Sollten keine gültigen Bluttests bei Athleten vorliegen, wird keine Überprüfung für die
        betroffenen Athleten durchgeführt bis dieser hochgeladen wurde.
      </p>
      <router-link class="btn btn-block btn-blue btn-sm" :to="{ name: 'Event' }">
        Zurück zum Event
      </router-link>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'RegisterAthlete',
  components: { Navigation },
  data() {
    return {
      athletes: [
        'Franz Schwerdtmann',
        'Leon Mark',
        'Clemens Werner',
      ],
      selectedAthlete: {},
      selectedWeightClass: {},
      registrations: [],
      currentId: 1,
    };
  },
  methods: {
    add() {
      const athlete = this.selectedAthlete;
      this.registrations.push({
        id: this.currentId,
        athlete,
        weightClass: this.selectedWeightClass,
      });
      this.currentId += 1;
      this.athletes = this.athletes.filter((a) => a !== athlete);
      this.selectedAthlete = {};
      this.selectedWeightClass = {};
    },
    remove(id) {
      this.athletes.push(this.registrations.find((a) => a.id === id).athlete);
      this.registrations = this.registrations.filter((a) => a.id !== id);
    },
  },
};
</script>

<style scoped>

</style>
