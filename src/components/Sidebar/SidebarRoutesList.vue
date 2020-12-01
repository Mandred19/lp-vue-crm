<template>
  <v-list nav dense>
    <v-list-item-group active-class="deep-purple--text text--accent-4">
      <v-list-item
      v-for="route of routesList"
      :key="route.name"
      :to="route.to"
      :title="route.title"
      exact>
        <v-list-item-title>
          {{ route.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import RoutesListMixin from '@/helpers/mixins/RoutesListMixin';

@Component({
  name: 'SidebarRoutesList',
  components: {},
})

export default class SidebarRoutesList extends Mixins(RoutesListMixin) {}
</script>

<style lang="scss">

</style>
