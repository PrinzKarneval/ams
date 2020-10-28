<template>
  <div>
    <Navigation/>
    <EventHeader/>
    <div class="container-fluid mt-3">
      <router-link class="btn btn-outline-secondary btn-sm" :to="{ name: 'Event' }">
        Zurück
      </router-link>
      <h4>Registrierung</h4>
      <p>Startplatzgebühr: 40€/Athlet</p>
      <div class="form-group">
        <label for="athleteSelect">Athlet/in</label>
        <select id="athleteSelect" class="form-control" v-model="selectedAthlete">
          <option v-for="a in athletes.sort()" :key="a">{{ a }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="weightClassSelect">Gewichtsklasse</label>
        <select id="weightClassSelect" class="form-control" v-model="selectedWeightClass">
          <option>Leichtgewicht [-70.1 kg]</option>
          <option>Weltergewicht [-77.1 kg]</option>
          <option>Mittelgewicht [-83.9 kg]</option>
          <option>Halbschwergewicht [-93.0 kg]</option>
          <option>Schwergewicht [-120.1 kg]</option>
        </select>
      </div>
      <button class="btn btn-blue mb-3" @click="add">Hinzufügen</button>
      <div class="card mb-3" v-for="r in registrations" :key="r.id">
        <div class="card-body row">
          <div class="col-2">
            <img class="img-fluid" src="../assets/avatar.jpg">
          </div>
          <div class="col-10">
            <div class="font-weight-bold">{{ r.athlete }}</div>
            <div>{{ r.weightClass }}</div>
            <div class="text-success">Bluttest gültig</div>
          </div>
          <button class="btn btn-sm btn-danger" @click="remove(r.id)">Entfernen</button>
        </div>
      </div>
      <div class="font-weight-bold text-right">
        Gesamtgebühren: {{ registrations.length * 40 }}€
      </div>
      <p></p>
      <div class="font-weight-bold">Anmeldung abschließen</div>
      <p>
        Durch das Bezahlen der Startgebühren werden die oben genannten Athleten zur Veranstaltung
        angemeldet.<br>Nach interner Prüfung und mit gültigen Bluttests werden die Athletenin die
        Gewichtklassen bzw. in die Warteliste aufgenommen.
      </p>
      <div class="form-group">
        <label for="paymentMethodSelect">Bezahlmethode wählen</label>
        <select class="form-control">
          <option>Kreditkarte (VISA, Mastercard, American Express)</option>
          <option>Giropay</option>
          <option>iDEAL</option>
          <option>Sofort</option>
          <option>SEPA Direct</option>
        </select>
      </div>
      <button class="btn btn-warning">Anmelden und bezahlen</button>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import EventHeader from '@/components/EventHeader.vue';

export default {
  name: 'RegisterAthlete',
  components: { EventHeader, Navigation },
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
