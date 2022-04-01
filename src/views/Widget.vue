<template lang="pug">
  .widget
    SearchBar
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Temperature from './widget-info/Temperature.vue';
import Info from './widget-info/Info.vue';
import SearchBar from './SearchBar.vue';

@Component({
  components: {
    Info,
    Temperature,
    SearchBar,
  },
})
export default class Widget extends Vue {
  private API_KEY = 'APPID=027ee07fafd9a678d925c3a9220c1289';
}
</script>
<style lang="stylus">
.widget
  padding: 3rem 1rem
  margin: 0 auto
  min-width 200px
  width: 30%
  min-height: 200px
  background: rgba(150, 150, 150, 0.4)
  border-radius: 30px
</style>
