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
    'empty-layout': EmptyLayout,
    'main-layout': MainLayout,
  },
})

export default class App extends Vue {
  get currentLayout() {
    return this.$route.meta.layout ? `${this.$route.meta.layout}-layout` : 'empty-layout';
  }
}
</script>

<style lang="scss">
  html {
    overflow-y: auto;
  }

  .app-container {
    padding: 8px 16px;
  }

  .radio-group {
    margin: 0 0 16px 0;
  }
</style>
