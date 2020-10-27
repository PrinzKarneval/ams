<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-2">
          <img class="img-fluid" src="@/assets/avatar.jpg">
        </div>
        <div class="col-10">
          <div class="font-weight-bold">Franz Schwerdtmann</div>
          <div>Halbschwergewicht [-93.0 kg]</div>
          <div v-if="isUnderReview" class="text-primary">Wird geprüft</div>
          <div v-if="isApproved" class="text-success">Wird kämpfen</div>
          <div v-if="isWaitlist" class="text-warning">Warteliste #3</div>
          <div v-if="isRejected" class="text-danger">Abgelehnt</div>
        </div>
        <button class="btn btn-sm btn-danger">Zurückziehen</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationAthletCard',
  props: ['status'],
  computed: {
    isUnderReview() {
      return this.status === 'review';
    },
    isApproved() {
      return this.status === 'approved';
    },
    isWaitlist() {
      return this.status === 'waitlist';
    },
    isRejected() {
      return this.status === 'rejected';
    },
  },
};
</script>

<style scoped>
</style>
