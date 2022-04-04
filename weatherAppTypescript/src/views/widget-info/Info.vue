<template lang="pug">
  .info
    .data.town {{town}}
    .data(v-for="i in info")
      .row {{i.main.toUpperCase()}}
      .row {{i.description.toUpperCase()}}
    router-link(to="/extra" tag="button" class="extra-info") More information?
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import ExtraInfo from './ExtraInfo.vue';
import { Prop } from 'vue-property-decorator';
import { Weather } from '@/store/state.type';

@Component({
  components: {
    ExtraInfo,
  },
})
export default class Info extends Vue {
  @Prop({ required: true }) readonly info!: Array<Weather>;
  @Prop({ required: true }) readonly town!: string;
}
</script>
<style lang="stylus">
.data
  margin: .5rem auto
  text-align: center
  justify-content: center
  color:white
  font-size: 2rem

.town
  border-bottom: 2px solid white
  width:90%

.extra-info
  display:block
  margin: 1rem auto
  padding: .5rem
  border-radius:6px
</style>
