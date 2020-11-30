<template>
  <v-app>
    <div>EmptyLayout</div>
    <router-view/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'EmptyLayout',
  components: {},
})

export default class EmptyLayout extends Vue {

}
</script>

<style lang="scss">

</style>
