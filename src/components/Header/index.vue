<template>
  <v-app-bar app color="primary">
    <div class="d-flex align-center">
      <v-app-bar-nav-icon @click.stop="toggleSidebar" title="Toggle sidebar menu"/>
    </div>

    <v-spacer></v-spacer>

    <HeaderDropdown/>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Emit, Prop } from 'vue-property-decorator';
import HeaderDropdown from '@/components/Header/HeaderDropdown.vue';

@Component({
  name: 'Header',
  components: { HeaderDropdown },
})

export default class Header extends Vue {
  @Prop(Boolean) isVisibleSidebar = true;

  @Emit('toggleSidebar')
  toggleSidebar(): boolean {
    return !this.isVisibleSidebar;
  }
}
</script>

<style lang="scss">

</style>
