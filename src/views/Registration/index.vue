<template>
  <v-row no-gutters>
    <v-col cols="12">
      <RegistrationForm/>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import RegistrationForm from '@/views/Registration/RegistrationForm.vue';

@Component({
  name: 'Registration',
  components: { RegistrationForm },
})

export default class Registration extends Vue {

}
</script>

<style lang="scss">

</style>
