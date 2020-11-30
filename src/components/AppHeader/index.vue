<template>
  <v-app-bar app color="primary">
    <div class="d-flex align-center">
      <v-app-bar-nav-icon @click.stop="toggleSidebar"></v-app-bar-nav-icon>
    </div>

    <v-spacer></v-spacer>

    <AppHeaderSelect/>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Emit } from 'vue-property-decorator';
import AppHeaderSelect from '@/components/AppHeader/AppHeaderSelect.vue';

@Component({
  name: 'AppHeader',
  components: { AppHeaderSelect },
})

export default class AppHeader extends Vue {
  @Emit('toggleSidebar')
  // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-empty-function
  toggleSidebar(): void {}
}
</script>

<style lang="scss">

</style>
