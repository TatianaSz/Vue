<template lang="pug">
  .container(:class='getMainInfo.temp=="" || getMainInfo.temp > 15?"warm" :"cold"')
    Widget(:url='URL' :apikey='API_KEY' )
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Widget from './Widget.vue';
import { Action, Getter } from 'vuex-class';
import { MainInfo } from '@/store/state.type';
import { fetchGeoPayload } from '@/store/modules/widgets';

@Component({
  components: {
    Widget,
  },
})
export default class Home extends Vue {
  private gotWeather: boolean = false;
  private errorStr: string = '';
  private gettingLocation = false;
  private location: GeolocationPosition | '' = '';
  private readonly API_KEY = '29602fe3815d11d02340cf3792d890c5';
  private readonly URL = 'https://api.openweathermap.org/data/2.5/';

  @Action('weatherGeolocationAction') weatherGeolocationAction: (
    a: fetchGeoPayload
  ) => Promise<void>;
  @Getter('getMainInfo') getMainInfo: MainInfo;
  created() {
    if (!('geolocation' in navigator)) {
      this.errorStr = 'Geolocation is not available.';
      return;
    }

    this.gettingLocation = true;

    navigator.geolocation.getCurrentPosition(
      pos => {
        this.gettingLocation = false;
        this.location = pos;

        this.weatherGeolocationAction({
          api: this.URL,
          lat: this.location.coords.latitude,
          lon: this.location.coords.longitude,
          key: this.API_KEY,
        }).then(() => {
          this.gotWeather = true;
        });
      },
      err => {
        this.gettingLocation = false;
        this.errorStr = err.message;
      }
    );
  }
}
</script>
<style lang="stylus">
.container
  min-height: 100vh
  width:100%
  background-image: url('../images/warm.svg')
  background-size: cover
  transition: background-image 0.3s ease-in-out;

.warm
  background-image: url('../images/warm.svg')

.cold
  background-image: url('../images/cold.svg')
</style>
