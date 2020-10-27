<template>
  <div>
    <Navigation/>
    <EventHeader/>
    <div class="container-fluid mt-3">
      <router-link class="btn btn-outline-secondary btn-sm" :to="{ name: 'Events' }">
        Zurück
      </router-link>
      <p>
        Wir freuen uns die Mitteldeutschen Meisterschaften im Jahr 2020 ausschreiben zu können.
        Der Anmeldevorgang ist ab sofort freigeschaltet. Coronabedingt haben alle Anwesenden unser
        Hygienekonzept zu befolgen, welches unter Downloads (Abschnitt “Dokumente für
        Veranstaltungen”) zu finden ist.
      </p>
      <address>
        Sporthalle der Geschwister-Scholl-Gesamtschule<br>
        Kurt-Huber-Weg 1-5<br>
        37079 Göttingen
      </address>
      <p>Erstes Match: 12:00 Uhr</p>
      <div>
        Was muss ich wissen?
        <ul>
          <li>Turnierformat mit max. 8 Teilnehmern</li>
          <li>Allgemeine Teilnahmevoraussetzungen</li>
          <ul>
            <li>Wettkampftauglichkeit</li>
            <li>Identifikation</li>
            <li>Volljährigkeit</li>
            <li>Deutsche-Staatsbürgerschaft</li>
            <li>Gültiger Bluttest</li>
          </ul>
        </ul>
      </div>
      <hr>
      <h4>Downloads</h4>
      <button class="btn btn-block btn-secondary">Ausschreibung</button>
      <button class="btn btn-block btn-secondary">Checkliste</button>
      <button class="btn btn-block btn-secondary">Regelwerk</button>
      <hr>
      <h4>Registrierung</h4>
      <div class="mb-3">
        <div class="bg-info p-2 text-center text-light">Registrierung ab 01.0.2020</div>
        <div class="bg-success p-2 text-center text-light">Registrierung läuft</div>
        <div class="bg-danger p-2 text-center text-light">Registrierung geschlossen</div>
        <div class="bg-dark p-2 text-center text-light">Event beendet</div>
      </div>
      <router-link :to="{ name: 'RegisterAthlete' }" class="btn btn-outline-primary mb-3">
        Athlet registrieren (40€)
      </router-link>
      <h6>Angemeldete Athleten</h6>
      <RegistrationAthleteCard class="mb-2" status="review"/>
      <RegistrationAthleteCard class="mb-2" status="approved"/>
      <RegistrationAthleteCard class="mb-2" status="waitlist"/>
      <RegistrationAthleteCard class="mb-2" status="rejected"/>
      <hr>
      <router-link :to="{ name: 'RegisterTrainer' }" disbaled class="btn btn-outline-primary mb-3">
        Trainer registrieren
      </router-link>
      <h6 class="mt-3 font-weight-bold">Angemeldete Trainer</h6>
      <RegistrationTrainerCard status="review"/>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import RegistrationAthleteCard from '@/components/RegistrationAthleteCard.vue';
import RegistrationTrainerCard from '@/components/RegistrationTrainerCard.vue';
import EventHeader from '@/components/EventHeader.vue';

export default {
  name: 'Event',
  components: {
    EventHeader, Navigation, RegistrationAthleteCard, RegistrationTrainerCard,
  },
};
</script>

<style scoped>
img {
  max-height: 200px;
  height: auto;
  width: auto;
}
</style>
