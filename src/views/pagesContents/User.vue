<template>
  <div>
    <div class="header">
      <div class="user-info">
        <img src="@/assets/img/avatar.png" class="avatar">
        <div class="info">
          <p class="name">{{ userInfo.userName }}</p>
          <p class="age">社区会龄 / {{ userInfo.membershipAge }} 年</p>
        </div>
      </div>
      <div class="page-button">个人主页 ></div>
    </div>
    <div class="actions">
      <div v-for="(item, index) in userInfo.actions" :key="index" class="action-item">
        <div class="action-item-action">{{ item }}</div>
        <div class="action-item-topic">{{ userInfo.actionTopics[index] }}</div>
      </div>
    </div>
    <sepline></sepline>
    <div class="message-wrapper">
      <div>新提醒</div>
      <div>短消息</div>
    </div>
    <sepline></sepline>
    <div v-for="(item0, index0) in components" :key="index0">
      <div v-for="(title, index1) in item0" :key="index1" class="components">
        <div class="title">
          <v-icon name="custom-test"/>
          <span>{{ title }}</span>
        </div>
        <v-icon name="custom-right"/>
      </div>
      <sepline></sepline>
    </div>
    <div class="logout-button" @click="onLogoutClick">登出</div>
    <div class="bottom-space"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { userInfoUrl } from '@/service'

@Component
export default class User extends Vue {
  $http!: any
  userInfo: any = {}
  components: Array<Array<string>> = [
    ['拥有的书', '我的订单', '兑换书袋', '兑换记录'],
    ['收藏夹', '我的关注', '我的银子', '刮刮卡'],
    ['个人设置', '修改密码', '地址管理']
  ]

  created () {
    this.$http.get(userInfoUrl).then((response: any) => {
      this.userInfo = response.data
    })
  }

  onLogoutClick () {
    this.$store.state.loginStatus = false
    this.$router.push('/')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/_global.scss';

$special-border: 1px solid #dae1e744;

.header {
  padding: 35px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: $special-border;

  .page-button {
    padding: 2px 6px;
    border-radius: 99px;
    background: $primary-color;
    font-size: 14px;
    color: #fff;
  }
}

.user-info {
  display: flex;

  .avatar {
    border-radius: 99px;
    max-height: 55px;
    box-shadow: 0 8px 12px -4px rgba(0,0,0,.07), 0 6px 6px -4px rgba(0,0,0,.08);
  }

  .info {
    display: inline-block;
    margin-left: 20px;

    .name {
      margin: 0;
      font-size: 20px;
      font-weight: bold;
    }

    .age {
      margin: 5px 0 0 0;
      font-size: 14px;
      color: $bluey-grey;
    }
  }
}

.actions {
  display: flex;
  justify-content: space-around;
  align-items: center;

  .action-item {
    margin: 15px 0;
    padding: 0 30px;
    display: inline-block;
    text-align: center;

    &:not(:last-child) {
      border-right: $special-border;
    }

    &-action {
      color: $primary-color;
      font-weight: bold;
    }

    &-topic {
      color: $bluey-grey;
      font-size: 14px;
    }
  }
}

.message-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16px 0;
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjEycHgiIGhlaWdodD0iMzFweCIgdmlld0JveD0iMCAwIDEyIDMxIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTIuNSAoNjc0NjkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPg0KICAgIDx0aXRsZT5iaWFzTGluZTwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGcgaWQ9IuiuvuiuoeWbviIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSI+DQogICAgICAgIDxnIGlkPSLkuKrkurrkuLvpobUt5pawIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTMuMDAwMDAwLCAtMjIxLjAwMDAwMCkiIHN0cm9rZT0iI0UzRTVFOCI+DQogICAgICAgICAgICA8ZyBpZD0i566A5LuLIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMTk0LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxnIGlkPSJpbmZvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNS4wMDAwMDAsIDIwLjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDksNyBMMzksMzgiIGlkPSJiaWFzTGluZSI+PC9wYXRoPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==');
  background-position: 50% 50%;
  background-repeat: no-repeat;

  div {
    display: inline-block;
    color: $primary-color;
    font-weight: 500;
  }
}

.components {
  padding: 15px;
  border-bottom: $special-border;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .fa-icon {
    width: 1.5rem;
    height: 1.5rem;
    fill: #bec4ca;
  }

  .title {
    display: flex;
    align-items: center;

    span {
      margin-left: 15px;
      font-size: 14px;
    }
  }
}

.logout-button {
  height: 54px;
  color: #ff0000aa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}

.bottom-space {
  height: $bottom-height;
}

</style>
