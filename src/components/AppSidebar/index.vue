<template>
  <v-navigation-drawer
  :value="isVisibleSidebar"
  app
  fixed
  clipped>
    <v-list
    nav
    dense>
      <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
        <v-list-item>
          <v-list-item-title>Foo</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Bar</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'AppSidebar',
  components: {},
})

export default class AppSidebar extends Vue {
  @Prop(Boolean) isVisibleSidebar = true;

  group = null;
}
</script>

<style lang="scss">

</style>
