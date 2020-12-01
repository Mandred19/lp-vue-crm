<template>
  <v-row v-if="currentRouteTitle" class="flex flex-grow-1 align-center justify-start">
    <v-col cols="12">
      <h1>{{ currentRouteTitle.title }}</h1>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import RoutesListMixin from '@/helpers/mixins/RoutesListMixin';
import InterfaceRoute from '@/interfaces/InterfaceRoute';

@Component({
  name: 'ScreenTitle',
  components: {},
})

export default class ScreenTitle extends Mixins(RoutesListMixin) {
  get currentRouteTitle(): InterfaceRoute | string {
    return this.routesList.find((item) => item.name === this.$route.name) || '';
  }
}
</script>

<style lang="scss">

</style>
