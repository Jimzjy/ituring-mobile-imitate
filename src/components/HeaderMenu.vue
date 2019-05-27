<template>
  <div>
    <router-link to="/search">
      <img src="@/assets/icon/search.svg">
    </router-link>
    <router-link to="/cart" v-if="loginStatus">
      <img src="@/assets/icon/cart.svg">
    </router-link>
    <router-link to="/login" v-if="!loginStatus">
      <span id="login-button">登陆</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  computed: mapState(['loginStatus'])
})
export default class HeaderMenu extends Vue {
  loginStatus!: boolean;
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/_global.scss";

img {
  float: right;
  height: 1.2rem;
  width: 1.2rem;
  margin: 1.2rem 0 0 1.2rem;
}

#login-button {
  float: right;
  height: 1.2rem;
  margin: 1.2rem 0 0 1.2rem;
  font-size: 14px;
  text-decoration: none;
  color: $accent-color;
}
</style>
