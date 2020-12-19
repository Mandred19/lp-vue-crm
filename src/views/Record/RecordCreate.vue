<template>
  <form @submit.prevent="formHandler">
    <v-select
    @change="selectHandler($event)"
    :items="categoriesList"
    :value="currentCategory"
    label="Categories"
    title="Categories"
    outlined/>

    <v-radio-group v-model="recordType" class="radio-group">
      <v-radio
      v-for="type of recordTypes"
      :key="type.value"
      :title="type.title"
      :label="type.title"
      :value="type.value"/>
    </v-radio-group>

    <v-text-field
    v-model="amount"
    label="Amount"
    title="Amount"
    type="number"
    outlined/>

    <v-text-field
    v-model="description"
    label="Description"
    title="Description"
    type="text"
    outlined/>

    <v-btn
    :loading="false"
    :disabled="false"
    type="submit"
    title="Create record"
    color="blue-grey"
    class="white--text">
      Create record
      <v-icon right>
        mdi-send-outline
      </v-icon>
    </v-btn>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { InterfaceCategory } from '@/store/modules/category/types';
import { Action, Getter } from 'vuex-class';

@Component({
  name: 'RecordCreate',
  components: {},
})

export default class RecordCreate extends Vue {
  recordType = 1;

  currentCategory: currentCategoryType = { text: '', value: '' };

  amount = 0;

  description = '';

  recordTypes = [
    { title: 'Income', value: 1 },
    { title: 'Expense', value: 2 },
  ];

  @Getter('getCategories') categories: any;

  // @Getter('getUserInfo') userInfo: any;

  @Action('createRecord') createRecord: any;

  // @Action('updateInfo') updateInfo: any;

  get categoriesList(): currentCategoryType[] {
    return this.categories.map((item: InterfaceCategory) => ({
      text: item.name,
      value: item.id,
    }));
  }

  get canCreateRecord(): boolean {
    if (this.recordType === 1) {
      return true;
    }
    return true;
    // return this.getUInfo.bill >= this.amount;
  }

  async formHandler() {
    try {
      if (this.canCreateRecord) {
        await this.createRecord({
          categoryId: this.currentCategory.value,
          type: this.recordType,
          amount: this.amount,
          description: this.description,
          date: new Date().toJSON(),
        });

        // const bill = this.recordType === 1
        //   ? this.userInfo.bill + this.amount
        //   : this.userInfo.bill - this.amount;
        //
        // await this.updateInfo({ bill });

        await this.resetForm();
        await this.$emit('updateCategoriesList');
      } else {
        console.warn('NOT CREATE RECORD');
      }
    } catch (e) {}
  }

  selectHandler(val: string): void {
    this.currentCategory = this.categoriesList.find((item: currentCategoryType) => item.value === val) || this.currentCategory;
  }

  private resetForm() {
    this.description = '';
    this.amount = 1;
  }
}

type currentCategoryType = { text: string; value: string };
</script>

<style lang="scss">

</style>
