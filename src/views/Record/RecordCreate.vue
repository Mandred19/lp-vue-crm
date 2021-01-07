<template>
  <form @submit.prevent="formHandler">
    <v-select
    @change="selectHandler($event)"
    :items="categoriesList"
    :value="currentCategory"
    label="Categories"
    title="Categories"
    :error-messages="validateCurrentCategoryMessage"
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
    :error-messages="validateAmountMessage"
    outlined/>

    <v-text-field
    v-model="description"
    label="Description"
    title="Description"
    type="text"
    :error-messages="validateDescriptionMessage"
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
import { Action, Getter } from 'vuex-class';
import { validationMixin } from 'vuelidate';
import { minValue, required } from 'vuelidate/lib/validators';
import { InterfaceCategory } from '@/store/modules/category/types';

@Component({
  name: 'RecordCreate',
  components: {},
  validations: {
    amount: { required, minValue: minValue(1) },
    description: { required },
    currentCategory: { value: { required } },
  },
  mixins: [validationMixin],
})

export default class RecordCreate extends Vue {
  recordType = 1;

  currentCategory: currentCategoryType = { text: '', value: '' };

  amount = 0;

  description = '';

  readonly recordTypes = [
    { title: 'Income', value: 1 },
    { title: 'Expense', value: 0 },
  ];

  @Getter('getCategories') categories: any;

  @Getter('getInfo') info: any;

  @Action('createRecord') createRecord: any;

  @Action('updateInfo') updateInfo: any;

  async formHandler() {
    if (this.$v.$invalid) {
      this.$v.$touch();
      return;
    }

    try {
      if (this.canCreateRecord) {
        await this.createRecord({
          amount: this.amount,
          categoryId: this.currentCategory.value,
          date: new Date().toJSON(),
          description: this.description,
          type: this.recordType,
        });

        const bill = this.recordType ? this.info.bill + this.amount : this.info.bill - this.amount;

        await this.updateInfo({ bill });

        await this.resetForm();
        await this.$emit('updateCategoriesList');
      } else {
        console.warn('NOT CREATE RECORD');
      }
    } catch (e) {
      console.warn(e);
    }
  }

  selectHandler(val: string): void {
    this.currentCategory = this.categoriesList.find((item: currentCategoryType) => item.value === val) || this.currentCategory;
  }

  private resetForm() {
    this.description = '';
    this.amount = 1;
  }

  get categoriesList(): currentCategoryType[] {
    return this.categories.map((item: InterfaceCategory) => ({
      text: item.name,
      value: item.id,
    }));
  }

  get canCreateRecord(): boolean {
    return this.recordType ? true : this.info.bill >= this.amount;
  }

  get validateCurrentCategoryMessage(): string {
    return this.$v.currentCategory.value?.$dirty && !this.$v.currentCategory.value.required ? 'Set current category' : '';
  }

  get validateAmountMessage(): string {
    let str = '';
    if (this.$v.amount.$dirty && !this.$v.amount.required) {
      str = 'Enter record amount';
    } else if (this.$v.amount.$dirty && !this.$v.amount.minValue) {
      str = `Enter a minimum amount ${this.$v.amount.$params.minValue.min}`;
    }
    return str;
  }

  get validateDescriptionMessage(): string {
    let str = '';
    if (this.$v.description.$dirty && !this.$v.description.required) {
      str = 'Enter description';
    }
    return str;
  }
}

type currentCategoryType = { text: string; value: string };
</script>

<style lang="scss">

</style>
