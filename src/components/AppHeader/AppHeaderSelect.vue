<template>
  <div class="d-flex align-center">
    <v-select
    :items="items"
    label="User name"
    class="header-select"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'AppHeaderSelect',
  components: {},
})

export default class AppHeaderSelect extends Vue {
  items = ['Foo', 'Bar', 'Fizz', 'Buzz'];
}
</script>

<style lang="scss">

</style>

<style lang="scss" scoped>
  .header-select {
    & .v-text-field__details {
      display: none;
    }
  }
</style>
