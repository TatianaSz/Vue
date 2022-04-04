<template lang="pug">
  .temperature {{temp}}°C
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class Temperature extends Vue {
  @Prop({ required: true }) readonly temp!: number | string;
}
</script>
<style lang="stylus">
.temperature
  margin: 1rem auto
  text-align: center
  justify-content: center
  font-size: 5rem
  color:white
  font-weight: bold
</style>
