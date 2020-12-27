<template>
  <div class="d-flex align-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        color="secondary"
        v-bind="attrs"
        :disabled="!info"
        :loading="!info"
        v-on="on">
          {{ userName }}

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
import { Action, Getter } from 'vuex-class';

interface InterfaceDropdownItem {
  title: string;
  action: string;
}

@Component({
  name: 'HeaderDropdown',
  components: {},
})

export default class HeaderDropdown extends Vue {
  protected readonly adminRoutes: InterfaceDropdownItem[] = [
    { title: 'Profile', action: '/profile' },
    { title: 'Exit', action: 'logout' },
  ];

  @Getter('getInfo') info: any;

  get userName(): string {
    return this.info?.name;
  }

  @Action logout: any;

  dropdownHandler(action: string) {
    switch (action) {
    case '/profile': this.$router.push(action).catch(() => ({})); break;
    case 'logout': this.logoutHandler(); break;
    default: break;
    }
  }

  private async logoutHandler() {
    await this.logout();
    await this.$router.push('/login').catch(() => ({}));
  }
}
</script>

<style lang="scss">
  .header-dropdown-item {
    cursor: pointer;
  }
</style>
