<template>
  <b-tabs class="p-3">
    <b-tab v-for="wc in weightclasses" :key="wc" :title="wc">
      <div class="d-flex justify-content-between p-3">
        <div class="form-group form-inline">
          <label class="mr-3">Status</label>
          <select class="form-control">
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>
        <div>Freigegeben: 2</div>
        <div>Unvollständig: 2</div>
        <div>Abgelehnt: 3</div>
        <div>Zu prüfen: 8</div>
      </div>
      <b-table
        :fields="fields"
        head-variant="dark"
        :items="items"
        small
      ></b-table>
    </b-tab>
  </b-tabs>
</template>

<script>
export default {
  name: 'AdminTab',
  props: ['type'],
  data() {
    return {
      fields: ['name', 'id', 'bluttest', 'background', 'pro-check', 'kommentar', 'status'],
      items: [
        {
          id: 1,
          name: 'Franz Schwerdtmann',
          team: 'Hammers Team Nürnberg e.V.',
          bluttest: 'OK',
          background: 'OK',
          proCheck: 'OK',
          kommentar: '',
          status: 'Kämpft #1',
        },
      ],
      weightclasses: ['Alle', '-70 kg', '-77 kg', '-84 kg', '-93 kg'],
    };
  },
};
</script>

<style scoped>

</style>
