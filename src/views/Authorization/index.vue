<template>
  <v-row no-gutters>
    <v-col cols="12">
      <AuthorizationForm/>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import AuthorizationForm from '@/views/Authorization/AuthorizationForm.vue';

@Component({
  name: 'Authorization',
  components: { AuthorizationForm },
})

export default class Authorization extends Vue {

}
</script>

<style lang="scss">

</style>
