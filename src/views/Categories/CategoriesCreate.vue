<template>
  <v-row no-gutters>
    <v-col cols="12">
      <h3 class="mb-4">Create category</h3>

      <form @submit.prevent="formHandler" class="mb-4">
        <v-text-field
        label="Category name"
        title="Category name"
        outlined/>

        <v-text-field
        label="Category limit"
        title="Category limit"
        outlined/>

        <v-btn
        :loading="false"
        :disabled="false"
        type="submit"
        title="Create category"
        color="blue-grey"
        class="white--text">
          Create category
          <v-icon right>
            mdi-send-outline
          </v-icon>
        </v-btn>
      </form>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'CategoriesCreate',
  components: {},
})

export default class CategoriesCreate extends Vue {
  formHandler(): void {
    console.warn(111);
  }
}
</script>

<style lang="scss">

</style>
