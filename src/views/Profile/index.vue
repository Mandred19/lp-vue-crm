<template>
  <v-container fluid class="app-container">
    <ScreenTitle/>

    <Preloader v-if="!info"/>

    <v-row v-else no-gutters>
      <v-col md="6" sm="12">
        <form @submit.prevent="formHandler('locale')" class="mb-4">
          <v-select
          @change="selectHandler($event, 'locale')"
          :items="locales"
          :value="userInfo.locale"
          label="Language"
          title="Language"
          outlined/>
        </form>

        <form @submit.prevent="formHandler('theme')" class="mb-4">
          <v-select
          @change="selectHandler($event, 'theme')"
          :items="themes"
          :value="themes[1].value"
          label="Theme"
          title="Theme"
          outlined/>
        </form>

        <form @submit.prevent="formHandler('info')" class="mb-4">
          <v-text-field
          :value="userInfo.name"
          label="Your name"
          title="Your name"
          outlined/>

          <v-text-field
          :value="userInfo.bill"
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
import { Component } from 'vue-property-decorator';
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

  get userInfo(): InterfaceInfo {
    return {
      bill: this.info?.bill,
      locale: this.info?.locale,
      name: this.info?.name,
    };
  }

  @Action('updateInfo') updateInfo: any;

  formHandler(prop: string): void {
    switch (prop) {
    case 'locale': this.updateLocale(); break;
    case 'theme': this.updateTheme(); break;
    case 'info': this.updateAllUserInfo(); break;
    default: break;
    }
  }

  selectHandler(val: string, prop: string): void {
    console.warn(val, prop);
  }

  private async updateAllUserInfo() {
    try {
      this.pending = true;
      console.warn(1);
      this.pending = false;
    } catch (e) {
      this.pending = false;
    }
  }

  private async updateLocale() {
    try {
      this.pending = true;
      console.warn(1);
      this.pending = false;
    } catch (e) {
      this.pending = false;
    }
  }

  private async updateTheme() {
    try {
      this.pending = true;
      console.warn(1);
      this.pending = false;
    } catch (e) {
      this.pending = false;
    }
  }
}
</script>

<style lang="scss">

</style>
