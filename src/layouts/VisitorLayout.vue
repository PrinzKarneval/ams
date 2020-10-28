<template>
  <div class="p-0">
    <Header/>
    <div class="container-fluid mt-4">
      <h2 class="blue p-4 text-center">{{ title }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'VisitorLayout',
  props: ['title'],
  components: { Header },
};
</script>
