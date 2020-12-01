<template>
  <v-container fluid class="app-container">
    <ScreenTitle/>

    <v-row no-gutters>
      <v-col cols="12" sm="4">
        <div>CreateRecord</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ScreenTitle from '@/components/ScreenTitle.vue';

@Component({
  name: 'CreateRecord',
  components: { ScreenTitle },
})

export default class CreateRecord extends Vue {

}
</script>

<style lang="scss">

</style>
