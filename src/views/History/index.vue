<template>
  <v-container fluid class="app-container">
    <v-row no-gutters>
      <v-col cols="12" sm="4">
        <div>History</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'History',
  components: {},
})

export default class History extends Vue {

}
</script>

<style lang="scss">

</style>
