<template lang="pug">
  .search-bar
    input.search(type="text" placeholder="Search town:" name="search-town" id='search-town')
    label.search-label(for="search-town") Search town
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class SearchBar extends Vue {}
</script>

<style lang="stylus">
$main = #37474F
$grey = #ECEFF1

.search-bar
  padding: 3rem auto
  position:relative
  width:90%
  margin: 0 auto

.search
  width: 100%
  border: 0
  border-bottom: 2px solid $grey
  outline: 0
  font-size: 1.3rem
  color: $main
  padding: 14px 0 0 0
  background: transparent
  transition: border-color 0.3s
  &::placeholder
    color: transparent
  &:placeholder-shown ~ .search-label
    font-size: 1.3rem;
    cursor: text;
    top: 20px;

.search-label
  position: absolute
  top: 0
  display: block
  transition: 0.3s
  font-size: 1rem
  color: $grey

.search:focus
  ~ .search-label
    position: absolute
    top: 0
    display: block
    transition: 0.3s
    font-size: 1rem
    color: $main
    font-weight:700;
  font-weight: 700
  border-width: 3px
  border-color: $main

.search{
  &:required,&:invalid { box-shadow:none; }
}
</style>
