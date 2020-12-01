<template>
  <v-list nav dense>
    <v-list-item-group active-class="deep-purple--text text--accent-4">
      <v-list-item
      v-for="route of routesList"
      :key="route.name"
      :to="route.to"
      exact>
        <v-list-item-title>
          {{ route.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'SidebarRoutesList',
  components: {},
})

export default class SidebarRoutesList extends Vue {
  protected readonly routesList: InterfaceRoute[] = [
    { title: 'Home', to: '/' },
    { title: 'Create record', to: '/create-record' },
    { title: 'Categories', to: '/categories' },
    { title: 'Planing', to: '/planing' },
    { title: 'History', to: '/history' },
  ];
}

interface InterfaceRoute {
  title: string;
  to: string;
}
</script>

<style lang="scss">

</style>
