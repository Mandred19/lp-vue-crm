<template>
  <v-app-bar app color="primary">
    <div class="d-flex align-center">
      <v-app-bar-nav-icon @click.stop="toggleSidebar"></v-app-bar-nav-icon>
    </div>

    <v-spacer></v-spacer>

    <AppHeaderDropdown/>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Emit, Prop } from 'vue-property-decorator';
import AppHeaderDropdown from '@/components/AppHeader/AppHeaderDropdown.vue';

@Component({
  name: 'AppHeader',
  components: { AppHeaderDropdown },
})

export default class AppHeader extends Vue {
  @Prop(Boolean) isVisibleSidebar = true;

  @Emit('toggleSidebar')
  toggleSidebar(): boolean {
    return !this.isVisibleSidebar;
  }
}
</script>

<style lang="scss">

</style>
