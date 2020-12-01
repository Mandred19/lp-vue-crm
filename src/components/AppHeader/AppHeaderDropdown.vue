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
        :key="index">
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
  name: 'AppHeaderDropdown',
  components: {},
})

export default class AppHeaderDropdown extends Vue {
  adminRoutes = [
    { title: '111111111111', to: '' },
    { title: '222222222222', to: '' },
  ];
}
</script>

<style lang="scss">

</style>
