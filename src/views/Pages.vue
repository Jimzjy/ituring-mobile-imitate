<template>
  <header>
    <div id="header-top">
      <header-menu></header-menu>
    </div>
    <div id="header-nav">

    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { HeaderMenu, HeaderNav } from '@/components';

@Component({
  components: {
    "header-menu": HeaderMenu,
    "header-nav": HeaderNav
  }
})
export default class Pages extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/style/_global.scss";

header {
  height: 7.8rem;
  background: $primary-color;

  #header-top {
    height: 4.75rem;
    padding: 1rem 0.9rem;
    box-sizing: border-box;
    background: url("../assets/img/logo.png") content-box no-repeat left / 180px
      35.8px;
  }

  #header-nav {
    height: 3.05rem;
    padding: 0 0 1rem 0.9rem;
    box-sizing: border-box;
  }
}
</style>
