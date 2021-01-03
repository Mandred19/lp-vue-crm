<template>
  <v-container fluid class="app-container">
    <ScreenTitle/>

    <Preloader v-if="!info"/>

    <v-row v-else no-gutters>
      <v-col md="6" sm="12">
        <form @submit.prevent="formHandler" class="mb-4">
          <v-select
          @change="selectHandler($event, 'locale')"
          :items="locales"
          :value="locale"
          label="Language"
          title="Language"
          outlined/>

          <v-select
          @change="selectHandler($event, 'theme')"
          :items="themes"
          :value="themes[1].value"
          label="Theme"
          title="Theme"
          outlined/>

          <v-text-field
          v-model="name"
          label="Your name"
          title="Your name"
          outlined/>

          <v-text-field
          v-model="bill"
          label="Your bill"
          title="Your bill"
          type="number"
          outlined/>

          <v-btn
          :pending="false"
          :disabled="pending"
          type="submit"
          title="Update"
          color="blue-grey"
          class="white--text">
            Update
            <v-icon right>
              mdi-send-outline
            </v-icon>
          </v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import ScreenTitle from '@/components/ScreenTitle.vue';
import { Action, Getter } from 'vuex-class';
import { InterfaceInfo } from '@/store/modules/info/types';

@Component({
  name: 'Profile',
  components: { ScreenTitle },
})

export default class Profile extends Vue {
  pending = false;

  bill = 0;

  locale = '';

  name = '';

  theme = '';

  locales = [
    { value: 'en-US', text: 'English' },
    { value: 'ru-RU', text: 'Русский' },
  ];

  themes = [
    { value: 'light', text: 'Light' },
    { value: 'dark', text: 'Dark' },
  ];

  @Getter('getInfo') info: any;

  @Action('updateInfo') updateInfo: any;

  async formHandler() {
    try {
      this.pending = true;
      await this.updateInfo({ bill: this.bill, locale: this.locale, name: this.name/* , theme: this.theme */ });
      this.pending = false;
    } catch (e) {
      this.pending = false;
    }
  }

  selectHandler(val: string, prop: string): void {
    switch (prop) {
    case 'locale': this.locale = val; break;
    case 'theme': this.theme = val; break;
    default: break;
    }
  }

  @Watch('info', { immediate: true })
  changeInfoHandler(val: InterfaceInfo) {
    if (val) {
      const { bill, locale, name } = val;
      this.bill = bill;
      this.locale = locale;
      this.name = name;
    }
  }
}
</script>

<style lang="scss">

</style>
