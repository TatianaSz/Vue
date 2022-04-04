<template lang="pug">
  .widget(v-if="getPlace!==''&&fetchFailed===''")
    SearchBar(:url='url' :apikey='apikey')
    Temperature(:temp="getMainInfo.temp")
    Info(:info="getWeatherDesc" :town="getPlace")
  .widget(v-else="fetchFailed!==''") 
    SearchBar(:url='url' :apikey='apikey')
    .oops {{fetchFailed}}
  .widget(v-else)
    SearchBar(:url='url' :apikey='apikey')
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Temperature from './widget-info/Temperature.vue';
import Info from './widget-info/Info.vue';
import SearchBar from './SearchBar.vue';
import { Getter } from 'vuex-class';
import { Prop } from 'vue-property-decorator';
import { Errors, MainInfo, PlaceName, Weather, WindInfo } from '@/store/state.type';

@Component({
  components: {
    Info,
    Temperature,
    SearchBar,
  },
})
export default class Widget extends Vue {
  @Prop({ required: true }) readonly url!: string;
  @Prop({ required: true }) readonly apikey!: string;

  @Getter('getMainInfo') getMainInfo: MainInfo;
  @Getter('getWindInfo') getWindInfo: WindInfo;
  @Getter('getWeatherDesc') getWeatherDesc: Weather[];
  @Getter('getPlace') getPlace: PlaceName;
  @Getter('fetchFailed') fetchFailed: Errors;
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

.oops
  justify-content: center
  text-align: center
  font-size: 2rem
  color: #EF5350
</style>
