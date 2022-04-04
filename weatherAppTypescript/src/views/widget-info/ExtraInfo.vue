<template lang="pug">
  .extra
    .widget
      .data Pressure: {{getMainInfo.pressure}} hPa
      .data Humidity: {{getMainInfo.humidity}} %
      .data Wind speed: {{getWindInfo.speed}} meter/sec
      router-link(to="/" tag="button" class="extra-info") Get back?
</template>

<script lang="ts">
import { MainInfo, WindInfo } from '@/store/state.type';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Getter } from 'vuex-class';

@Component
export default class ExtraInfo extends Vue {
  @Getter('getMainInfo') getMainInfo: MainInfo;
  @Getter('getWindInfo') getWindInfo: WindInfo;
}
</script>
<style lang="stylus">
.extra
  min-height: 100vh
  width:100%
  background-image: url('../../images/cold.svg')
  background-size: cover
</style>
