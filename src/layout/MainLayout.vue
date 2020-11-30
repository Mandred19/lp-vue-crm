<template>
  <v-app>
    <AppSidebar :isVisibleSidebar="isVisibleSidebar"/>

    <AppHeader @toggleSidebar="toggleSidebar"/>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import AppSidebar from '@/components/AppSidebar/index.vue';
import AppHeader from '@/components/AppHeader/index.vue';

@Component({
  name: 'MainLayout',
  components: { AppSidebar, AppHeader },
})

export default class MainLayout extends Vue {
  isVisibleSidebar = true;

  public toggleSidebar(): void {
    this.isVisibleSidebar = !this.isVisibleSidebar;
  }
}
</script>

<style lang="scss">

</style>
