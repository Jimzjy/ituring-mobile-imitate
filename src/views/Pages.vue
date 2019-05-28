<template>
  <div>
    <header>
      <header-menu></header-menu>
      <header-nav></header-nav>
    </header>
    <router-view/>
    <bottom-navbar></bottom-navbar>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { HeaderMenu, HeaderNav, BottomNavbar } from '@/components'

@Component({
  components: {
    'header-menu': HeaderMenu,
    'header-nav': HeaderNav,
    'bottom-navbar': BottomNavbar
  }
})
export default class Pages extends Vue {}
</script>

<style lang="scss" scoped>

header {
  height: 7.8rem;
}

</style>
