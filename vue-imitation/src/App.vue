<template>
  <div id="app">
    <app-loading v-if="loading"></app-loading>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { mapState } from 'vuex'

@Component({
  computed: mapState(['loading'])
})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
