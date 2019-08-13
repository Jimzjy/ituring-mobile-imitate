<template>
  <div id="page-content">
    <header>
      <header-menu></header-menu>
      <header-nav></header-nav>
    </header>
    <router-view/>
    <div id="bottom-space"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { HeaderMenu, HeaderNav, BottomNavbar } from '@/components'

@Component({
  components: {
    'header-menu': HeaderMenu,
    'header-nav': HeaderNav
  }
})
export default class Pages extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/assets/style/_global.scss';

#page-content {
  background: $primary-color;

  header {
    height: 7.8rem;
  }

  #bottom-space {
    height: $bottom-height;
    background: #fff;
  }
}

</style>
