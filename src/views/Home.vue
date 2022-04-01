<template lang="pug">
  .container(:class='temp>14?"warm" :"cold"')
    Widget
    .smth {{location}}
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Widget from './Widget.vue';

@Component({
  components: {
    Widget,
  },
})
export default class Home extends Vue {
  private temp: number = 15;
  private errorStr: string = '';

  private gettingLocation = false;

  private location: GeolocationPosition | '' = '';
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
  background-size: cover
  transition: .5s

.warm
  background-image: url('../images/warm.svg')

.cold
  background-image: url('../images/cold.svg')
</style>
