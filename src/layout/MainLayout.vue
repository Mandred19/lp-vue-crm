<template>
  <v-app>
    <Sidebar :isVisibleSidebar="isVisibleSidebar"/>

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

  public toggleSidebar(val: boolean): void {
    this.isVisibleSidebar = val;
  }
}
</script>

<style lang="scss">

</style>
