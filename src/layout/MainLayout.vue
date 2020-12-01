<template>
  <v-app>
    <Sidebar @sidebarStateHandler="sidebarStateHandler($event)" :isVisibleSidebar="isVisibleSidebar"/>

    <Header @toggleSidebar="toggleSidebar($event)" :isVisibleSidebar="isVisibleSidebar"/>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Sidebar from '@/components/Sidebar/index.vue';
import Header from '@/components/Header/index.vue';

@Component({
  name: 'MainLayout',
  components: { Sidebar, Header },
})

export default class MainLayout extends Vue {
  isVisibleSidebar = true;

  private toggleSidebar(val: boolean): void {
    this.isVisibleSidebar = val;
  }

  private sidebarStateHandler(state: boolean): void {
    this.isVisibleSidebar = state;
  }
}
</script>

<style lang="scss">

</style>
