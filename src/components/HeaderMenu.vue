<template>
  <div id="header-menu">
    <router-link to="/search">
      <v-icon name="custom-search" />
    </router-link>
    <router-link to="/cart" v-if="loginStatus">
      <v-icon name="custom-cart" />
    </router-link>
    <router-link to="/login" v-if="!loginStatus">
      <span id="login-button">登陆</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { mapState } from 'vuex'

@Component({
  computed: mapState(['loginStatus'])
})
export default class HeaderMenu extends Vue {
  loginStatus!: boolean;
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/_global.scss";

#header-menu {
  height: 4.75rem;
  padding: 1rem 0.9rem;
  box-sizing: border-box;
  background: url("../assets/img/logo.png") content-box no-repeat left / 180px 35.8px;

  .fa-icon {
    float: right;
    height: 1.1rem;
    width: 1.1rem;
    margin: 1.2rem 0 0 1.2rem;
    fill: $accent-color;
  }

  #login-button {
    float: right;
    height: 1.2rem;
    margin: 1.2rem 0 0 1.2rem;
    font-size: 14px;
    text-decoration: none;
    color: $accent-color;
  }
}
</style>
