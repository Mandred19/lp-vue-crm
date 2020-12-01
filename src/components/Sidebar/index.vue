<template>
  <v-navigation-drawer
  :value="isVisibleSidebar"
  @input="sidebarStateHandler($event)"
  app
  fixed
  clipped>
    <SidebarRoutesList/>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Emit, Prop } from 'vue-property-decorator';
import SidebarRoutesList from '@/components/Sidebar/SidebarRoutesList.vue';

@Component({
  name: 'Sidebar',
  components: { SidebarRoutesList },
})

export default class Sidebar extends Vue {
  @Prop(Boolean) isVisibleSidebar = true;

  @Emit('sidebarStateHandler')
  private sidebarStateHandler(state: boolean): boolean {
    return state;
  }
}
</script>

<style lang="scss">

</style>
