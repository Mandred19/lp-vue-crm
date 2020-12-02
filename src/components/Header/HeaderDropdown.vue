<template>
  <div class="d-flex align-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        color="secondary"
        v-bind="attrs"
        v-on="on">
          User name

          <v-icon
          right>
            mdi-menu-down
          </v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
        v-for="(item, index) of adminRoutes"
        :key="index"
        @click="dropdownHandler(item.action)"
        class="header-dropdown-item">
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'HeaderDropdown',
  components: {},
})

export default class HeaderDropdown extends Vue {
  protected readonly adminRoutes: InterfaceDropdownItem[] = [
    { title: 'Profile', action: '/profile' },
    { title: 'Exit', action: 'logout' },
  ];

  dropdownHandler(action: string) {
    switch (action) {
    case '/profile': this.$router.push(action).catch((e) => console.warn(e)); break;
    case 'logout': this.$router.push('/login').catch((e) => console.warn(e)); break;
    default: break;
    }
  }
}

interface InterfaceDropdownItem {
  title: string;
  action: string;
}
</script>

<style lang="scss">
  .header-dropdown-item {
    cursor: pointer;
  }
</style>
