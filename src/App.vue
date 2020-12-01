<template>
  <component :is="currentLayout">
    <router-view/>
  </component>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import EmptyLayout from '@/layout/EmptyLayout.vue';
import MainLayout from '@/layout/MainLayout.vue';

@Component({
  name: 'App',
  components: {
    EmptyLayout,
    MainLayout,
  },
})

export default class App extends Vue {
  private layout = 'MainLayout';

  get currentLayout() {
    return this.layout;
  }
}
</script>

<style lang="scss">
  html {
    overflow: hidden;
  }

  .app-container {
    padding: 8px 16px;
  }
</style>
