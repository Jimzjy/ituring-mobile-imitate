<template>
  <div class="bottom-navbar">
    <router-link v-for="(name, index) in navRouteName" :key="name" :to="{ name }" class="navbar-tab" exact>
      <v-icon :name="'custom-' + name"/>
      <div class="title">{{navTitle[index]}}</div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { routePageNames } from '@/router'

@Component
export default class BottomNavbar extends Vue {
  navTitle: Array<string> = ['首页', '图书', '观点', '我的']
  navRouteName: Array<string> = routePageNames
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/_global.scss';

$bottom-height: 3.2rem;
$icon-size: 1.4rem;

.bottom-navbar {
  position: fixed;
  display: flex;
  flex-direction: row;
  top: calc(100vh - #{$bottom-height});
  z-index: 1;
  width: 100%;
  height: $bottom-height;
  padding-top: .3rem;
  background: $accent-color;
  box-shadow: 0 -1.5px 2px -2px rgba(0, 0, 0, .2);

  .fa-icon {
    width: $icon-size;
    height: $icon-size;
    fill: #C8CDD4;
  }

  .navbar-tab {
    flex: 1;
    color: $bluey-grey;
    font-size: 12px;
    text-align: center;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;

    &.router-link-active {
      color: $primary-color;

      .fa-icon {
        fill: $primary-color;
      }
    }
  }
}
</style>
