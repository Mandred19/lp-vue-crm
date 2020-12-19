<template>
  <v-container fluid class="app-container">
    <ScreenTitle/>

    <Preloader v-if="loading"/>

    <v-row v-else>
      <v-col v-if="!loading && categories.length > 0" md="6" sm="12">
        <RecordCreate @updateCategoriesList="updateCategoriesList"/>
      </v-col>

      <v-col v-else md="6" sm="12">
        No categories
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import ScreenTitle from '@/components/ScreenTitle.vue';
import RecordCreate from '@/views/Record/RecordCreate.vue';

@Component({
  name: 'Record',
  components: { ScreenTitle, RecordCreate },
})

export default class Record extends Vue {
  private loading = true;

  @Getter('getCategories') categories: any;

  @Action('loadCategories') loadCategories: any;

  async created() {
    await this.updateCategoriesList();
  }

  private async updateCategoriesList() {
    this.loading = true;
    await this.loadCategories();
    this.loading = false;
  }
}
</script>

<style lang="scss">

</style>
