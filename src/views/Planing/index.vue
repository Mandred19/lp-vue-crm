<template>
  <v-container fluid class="app-container">
    <ScreenTitle/>

    <Preloader v-if="loading"/>

    <v-row v-else no-gutters>
      <v-col v-if="!loading && categories.length > 0" cols="12">
        <!--<v-col cols="12" sm="4">-->
        <v-list>
          <v-list-item
          v-for="(item, idx) of transformData"
          :key="idx"
          class="pa-0">
            <v-list-item-content>
              <v-list-item-title class="mb-2 font-weight-bold">
                {{ item.name }}
              </v-list-item-title>

              <v-list-item-subtitle class="mb-2">
                {{ item.spend }} of {{ item.limit }}
              </v-list-item-subtitle>

              <v-progress-linear
              :value="item.progressPersent"
              rounded
              color="blue-grey"
              height="20">
                <span>{{ item.progressPersent }}%</span>
              </v-progress-linear>
            </v-list-item-content>

            <v-list-item-action class="mb-3 mt-auto">
              <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                  v-bind="attrs"
                  v-on="on"
                  color="grey lighten-1">
                    mdi-information
                  </v-icon>
                </template>
                <span>{{ item.tooltip }}</span>
              </v-tooltip>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col v-else cols="12">
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
import { InterfaceRecord } from '@/store/modules/records/types';
import { InterfaceCategory } from '@/store/modules/category/types';

@Component({
  name: 'Planing',
  components: { ScreenTitle },
})

export default class Planing extends Vue {
  loading = false;

  @Getter('getCategories') categories: any;

  @Getter('getRecords') records: any;

  @Getter('getInfo') info: any;

  @Action('loadCategories') loadCategories: any;

  @Action('loadRecords') loadRecords: any;

  async created() {
    this.loading = true;

    await this.loadCategories();
    await this.loadRecords();

    this.loading = false;
  }

  get transformData() {
    return this.categories && this.records
      ? this.categories.map((item: InterfaceCategory) => {
        const spend = this.records
          .filter((rec: InterfaceRecord) => rec.categoryId === item.id)
          .filter((rec: InterfaceRecord) => rec.type === 0)
          // eslint-disable-next-line no-param-reassign,no-return-assign
          .reduce((total: number, record: InterfaceRecord) => total += record.amount, 0);

        const persent = (100 * spend) / item.limit;
        const progressPersent = persent > 100 ? 100 : persent;
        // eslint-disable-next-line no-nested-ternary
        const progressColor = persent < 60 ? 'teal' : persent < 100 ? 'amber' : 'red';
        const tooltipVal = item.limit - spend;
        const tooltip = `${tooltipVal < 0 ? 'Excess on' : 'Left'} ${Math.abs(tooltipVal)}`;
        // const tooltip = `${tooltipVal < 0 ? 'Excess on' : 'left'} ${courseFilter(Math.abs(tooltipVal))}`;

        return {
          ...item, progressPersent, progressColor, spend, tooltip,
        };
      }) : null;
  }
}
</script>

<style lang="scss">

</style>
