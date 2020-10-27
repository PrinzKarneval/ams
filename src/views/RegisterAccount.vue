<template>
  <div class="container">
    <div class="row justify-content-between">
      <img src="https://gemmaf.de/wp-content/uploads/2018/04/regelwerk_gemmaf.jpg"
           height="100px" width="100px">
      <div class="h4 bg-light text-wrap">Ahlete Management System</div>
    </div>
    <div class="flex-column mt-5">
      <router-link class="btn btn-outline-secondary btn-sm" :to="{ name: 'Login' }">
        Zurück
      </router-link>
      <h1 class="bg-light">Account registrieren</h1>
      <form>
        <p>
          Bitte gib zuerst die notwendigen Daten für deinen Basisaccount ein. Mit diesem kannst du
          dir im AMS alle Veranstaltungen anschauen.
        </p>
        <div class="form-group">
          <label for="image">Foto</label>
          <input type="file" class="form-control-file" id="image">
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" class="form-control">
        </div>
        <div class="form-group">
          <label for="phone">Mobilnummer</label>
          <input type="text" id="phone" class="form-control">
        </div>
        <div class="form-group">
          <label for="password1">Passwort</label>
          <input type="password" id="password1" class="form-control">
        </div>
        <div class="form-group">
          <label for="password2">Password bestätigen</label>
          <input type="password" id="password2" class="form-control">
        </div>
        <div class="form-group">
          <label for="first-name">Vorname</label>
          <input type="text" id="first-name" class="form-control">
        </div>
        <div class="form-group">
          <label for="last-name">Nachname</label>
          <input type="text" id="last-name" class="form-control">
        </div>
        <div class="form-group">
          <label for="birthday">Geburtstag</label>
          <input type="date" id="birthday" class="form-control">
        </div>
        <div class="form-group">
          <label for="country">Staatsangehörigkeit</label>
          <input type="text" id="country" class="form-control">
        </div>
        <label>Geschlecht</label>
        <div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="gender" id="gender-m" value="m">
            <label class="form-check-label" for="gender-m">
              Männlich
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="gender" id="gender-m" value="f">
            <label class="form-check-label" for="exampleRadios2">
              Weiblich
            </label>
          </div>
        </div>
        <div class="form-group">
          <label for="zip-code">PLZ</label>
          <input type="text" id="zip-code" class="form-control">
        </div>
        <div class="form-group">
          <label for="city">Stadt</label>
          <input type="text" id="city" class="form-control">
        </div>
        <div class="form-group">
          <label for="street">Straße</label>
          <input type="text" id="street" class="form-control">
        </div>
        <div class="form-group">
          <label for="street-number">Straßennummer</label>
          <input type="text" id="street-number" class="form-control">
        </div>
        <div class="form-group">
          <label for="team">Team</label>
          <select id="team" class="form-control" :disabled="teamNotListed">
            <option>Fight Gym</option>
            <option>Hammers Team Nürnberg e.V.</option>
            <option>Planet Eater</option>
            <option>Shuhari</option>
          </select>
        </div>
        <div class="form-group form-check">
          <input
            type="checkbox"
            id="team-not-listed"
            class="form-check-input"
            v-model="teamNotListed"
          >
          <label for="team-not-listed" class="form-check-label">
            Mein Team ist nicht aufgelistet
          </label>
        </div>
        <div class="form-group" v-if="teamNotListed">
          <label for="custom-team">Teamname</label>
          <input type="text" id="custom-team" class="form-control">
        </div>
        <div class="form-group" v-if="teamNotListed">
          <label for="instagram-team">Team Instagram Link</label>
          <input type="text" id="instagram-team" class="form-control" placeholder="@gemmaf_de">
        </div>
        <div class="form-group form-check">
          <input
            type="checkbox"
            id="create-trainer"
            class="form-check-input"
            v-model="createTrainer"
          >
          <label for="create-trainer" class="form-check-label">
            Ich möchte als Trainer/in an Veranstaltungen teilnehmen können
          </label>
        </div>
        <div v-if="createTrainer">
          <div class="form-group">
            <label for="field">FELDER??</label>
            <input type="text" id="field" class="form-control">
          </div>
        </div>
        <div class="form-group form-check">
          <input
            type="checkbox"
            id="create-athlete"
            class="form-check-input"
            v-model="createAthlete"
          >
          <label for="create-athlete" class="form-check-label">
            Ich möchte als Athlet/in bei Veranstaltungen kämpfen
          </label>
        </div>
        <div v-if="createAthlete">
          <div class="form-group">
            <label>Ich kämpfe als</label>
            <div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="type" id="amateur" value="a">
                <label class="form-check-label" for="amateur">
                  Amateur
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="type" id="pro" value="p">
                <label class="form-check-label" for="pro">
                  Profi
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="bloodtest">Bluttest</label>
            <input type="file" class="form-control-file" id="bloodtest">
          </div>
          <div class="form-group">
            <label for="nickname">Spitzname/Kampfname</label>
            <input type="text" id="nickname" class="form-control">
          </div>
          <div class="form-group">
            <label for="record">Kampfrekord</label>
            <input type="text" id="record" class="form-control" placeholder="2-0-0">
            <small id="record-help" class="form-text text-muted">
              Siege-Niederlagen-Unentschieden
            </small>
          </div>
          <div class="form-group">
            <label for="achievements">Erfolge</label>
            <textarea class="form-control" id="achievements" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label for="Instagram">Instagram Link</label>
            <input type="text" id="instagram" class="form-control" placeholder="@gemmaf_de">
          </div>
          <div class="form-group">
            <label for="walkin">Einlaufmusik</label>
            <input type="text" id="walkin" class="form-control">
            <small id="walkin-help" class="form-text text-muted">Nur Youtube-Links</small>
          </div>
          <div class="form-group">
            <label for="sherdog">Sherdog</label>
            <input type="text" id="sherdog" class="form-control" placeholder="Stipe-Miocic-39537">
            <small id="sherdog-help" class="form-text text-muted">www.sherdog.com</small>
          </div>
          <div class="form-group">
            <label for="tapology">Tapology</label>
            <input type="text" id="tapology" class="form-control"
                   placeholder="16421-justin-gaethje">
            <small id="tapology-help" class="form-text text-muted">www.tapology.com</small>
          </div>
        </div>
        <button
          type="submit"
          class="btn btn-block btn-primary"
          @click.prevent="submit"
        >
          Abschicken
        </button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PasswordForgotten',
  data() {
    return {
      createAthlete: false,
      createTrainer: false,
      teamNotListed: false,
    };
  },
  methods: {
    submit() {
      this.$router.push({ name: 'RegisterAccountSuccess' });
    },
  },
};
</script>
