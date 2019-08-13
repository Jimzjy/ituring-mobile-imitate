<template>
  <div id="login">
    <div>
      <img src="@/assets/img/logo.png" class="logo" />
    </div>
    <div class="tab-wrapper">
      <span class="tab-checked">登陆</span>
      <span>注册</span>
    </div>
    <div class="input-wrapper">
      <div class="input-field">
        <v-icon name="custom-mail" />
        <input type="text" placeholder="请输入邮箱"/>
      </div>
      <div class="input-field">
        <v-icon name="custom-lock" />
        <input type="password" placeholder="请输入密码"/>
      </div>
    </div>
    <div class="account-control">
      <span>查找邮箱</span>
      <span>找回密码</span>
    </div>
    <div class="login-button" @click="onLoginClick">登陆</div>
    <div class="nav">
      <router-link to="/"><span>随便逛逛 ></span></router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Login extends Vue {
  @Prop({ default: 'home' }) readonly to!: string

  onLoginClick () {
    this.$store.commit('login')
    this.$router.push({ name: this.to })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/_global.scss';

#login {
  height: 100vh;
  background: $primary-color;
  padding: 40px 30px 0;

  .tab-wrapper {
    padding-top: 40px;
    margin-bottom: 25px;

    span {
      color: #fff;
      opacity: .5;
      font-size: 20px;
      font-weight: bold;
      margin-right: 30px;
    }

    .tab-checked {
      opacity: 1;
      padding-bottom: 5px;
      border-bottom: 1px solid #fff;
    }
  }

  .input-wrapper {
    .input-field {
      border-radius: 4px;
      padding: 15px;
      background: hsla(0,0%,100%,.2);
      margin-bottom: 1px;
      height: 50px;
      box-sizing: border-box;
      display: flex;
      align-items: center;

      &:first-child {
        border-radius: 4px 4px 0 0;
      }

      &:last-child {
        border-radius: 0 0 4px 4px;
      }

      .fa-icon {
        height: 20px;
        fill: #fff;
        margin-right: 15px;
      }

      input {
        background: transparent;
        border: 0;
        padding: 0;
        color: #fff;
        font-size: 1rem;
        outline: none;
        flex: 1;

        &::placeholder {
          color: #fff;
          opacity: .5;
        }
      }
    }
  }

  .account-control, .nav {
    padding-top: 15px;
    display: flex;
    justify-content: flex-end;

    span {
      margin-left: 10px;
      font-size: 14px;
      color: #fff;
      opacity: .8;
      text-decoration: none;
    }
  }

  .login-button {
    background: #fff;
    border-radius: 4px;
    height: 50px;
    width: 100%;
    color: $primary-color;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
  }
}

.logo {
  width: 220px;
  height: 44px;
}

</style>
