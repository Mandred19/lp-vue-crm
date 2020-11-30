<template>
  <v-app>
    <v-navigation-drawer
    app
    fixed
    clipped
    v-model="drawer">
      <v-list
      nav
      dense>
        <v-list-item-group
        v-model="group"
        active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
    app
    color="primary">
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click.stop="toggleSidebarMenu"></v-app-bar-nav-icon>
      </div>

      <v-spacer></v-spacer>

      <div class="d-flex align-center">
        <v-select
        :items="items"
        label="User name"/>
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'App',
  components: {

  },
})

export default class App extends Vue {
  drawer = true;

  mini = true;

  group = null;

  items = ['Foo', 'Bar', 'Fizz', 'Buzz'];

  public toggleSidebarMenu(): void {
    this.drawer = !this.drawer;
  }
}
</script>
