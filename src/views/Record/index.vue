<template>
  <v-container fluid class="app-container">
    <ScreenTitle/>

    <v-row>
      <v-col md="6" sm="12">
        <RecordCreate/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ScreenTitle from '@/components/ScreenTitle.vue';
import RecordCreate from '@/views/Record/RecordCreate.vue';

@Component({
  name: 'Record',
  components: { ScreenTitle, RecordCreate },
})

export default class Record extends Vue {

}
</script>

<style lang="scss">

</style>
