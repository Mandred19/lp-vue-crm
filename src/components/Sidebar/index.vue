<template>
  <v-navigation-drawer
  :value="isVisibleSidebar"
  app
  fixed
  clipped>
    <SidebarRoutesList/>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import SidebarRoutesList from '@/components/Sidebar/SidebarRoutesList.vue';

@Component({
  name: 'Sidebar',
  components: { SidebarRoutesList },
})

export default class Sidebar extends Vue {
  @Prop(Boolean) isVisibleSidebar = true;
}
</script>

<style lang="scss">

</style>
