<template>
  <form @submit.prevent="formHandler">
    <v-select
    @change="selectHandler($event)"
    :items="categories"
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
    label="Amount"
    title="Amount"
    type="number"
    outlined/>

    <v-text-field
    label="Description"
    title="Description"
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

@Component({
  name: 'RecordCreate',
  components: {},
})

export default class RecordCreate extends Vue {
  private recordType = 1;

  private categories = ['Foo', 'Bar', 'Fizz', 'Buzz'];

  private recordTypes = [
    { title: 'Income', value: 1 },
    { title: 'Expense', value: 2 },
  ];

  formHandler(): void {
    console.warn(111);
  }

  selectHandler(val: string): void {
    console.warn(val);
  }
}
</script>

<style lang="scss">

</style>
