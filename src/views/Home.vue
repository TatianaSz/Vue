<template lang="pug">
  .container
    SearchBar
    Widget
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import SearchBar from './SearchBar.vue';
import Widget from './Widget.vue';

@Component({
  components: {
    SearchBar,
    Widget,
  },
})
export default class Home extends Vue {
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
<style lang="stylus"></style>
