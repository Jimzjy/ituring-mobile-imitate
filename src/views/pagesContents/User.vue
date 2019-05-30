<template>
  <div>
    <div class="header">
      <div class="user-info">
        <div class="avatar">
          <img src="@/assets/img/avatar.png" class="avatar-img" />
          <img class="badge" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjE5cHgiIGhlaWdodD0iMTlweCIgdmlld0JveD0iMCAwIDE5IDE5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTIuNSAoNjc0NjkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPg0KICAgIDx0aXRsZT5iYWRnZV9sMTwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+DQogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMTQuNjAyMDY2NiUiIHkxPSIxMy43MzU2MTAxJSIgeDI9IjgzLjE4MTA3MTYlIiB5Mj0iODguMjk4ODI2MiUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4NCiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM1NTg2RUQiIG9mZnNldD0iMCUiPjwvc3RvcD4NCiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxMTNCOTEiIG9mZnNldD0iMTAwJSI+PC9zdG9wPg0KICAgICAgICA8L2xpbmVhckdyYWRpZW50Pg0KICAgICAgICA8Y2lyY2xlIGlkPSJwYXRoLTIiIGN4PSI3LjUiIGN5PSI3LjUiIHI9IjcuNSI+PC9jaXJjbGU+DQogICAgICAgIDxmaWx0ZXIgeD0iLTIwLjAlIiB5PSItMjAuMCUiIHdpZHRoPSIxNDAuMCUiIGhlaWdodD0iMTQwLjAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJmaWx0ZXItMyI+DQogICAgICAgICAgICA8ZmVPZmZzZXQgZHg9IjAiIGR5PSIwIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIj48L2ZlT2Zmc2V0Pg0KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlR2F1c3NpYW5CbHVyPg0KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAuMzM2MjIyNDM4ICAgMCAwIDAgMCAwLjUyMjU0NDUxNyAgIDAgMCAwIDAgMC45MTE3NTA2MzggIDAgMCAwIDEgMCIgdHlwZT0ibWF0cml4IiBpbj0ic2hhZG93Qmx1ck91dGVyMSI+PC9mZUNvbG9yTWF0cml4Pg0KICAgICAgICA8L2ZpbHRlcj4NCiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSIxMDcuMzY2MDgxJSIgeTE9IjExNC41NjEyNTElIiB4Mj0iLTMwLjg4NDk0MiUiIHkyPSItMjIuNDQzNTI3NyUiIGlkPSJsaW5lYXJHcmFkaWVudC00Ij4NCiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM1NTg2RUQiIG9mZnNldD0iMCUiPjwvc3RvcD4NCiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxMTNCOTEiIG9mZnNldD0iMTAwJSI+PC9zdG9wPg0KICAgICAgICA8L2xpbmVhckdyYWRpZW50Pg0KICAgICAgICA8cGF0aCBkPSJNMTMsNi4yNjI3NTk5MiBDMTMsNi4zODc1MjM2MyAxMi45MTQwNjI1LDYuNTA1MzU2MDIgMTIuODI4MTI1LDYuNTk1NDYzMTQgTDEwLjQyODQ4NTYsOS4wNDkxNDkzNCBMMTAuOTk2OTk1MiwxMi41MTQ4MDc4IEMxMS4wMDM2MDU4LDEyLjU2MzMyNyAxMS4wMDM2MDU4LDEyLjYwNDkxNDkgMTEuMDAzNjA1OCwxMi42NTM0MzQyIEMxMS4wMDM2MDU4LDEyLjgzMzY0ODQgMTAuOTI0Mjc4OCwxMyAxMC43MzI1NzIxLDEzIEMxMC42NDAwMjQsMTMgMTAuNTQ3NDc2LDEyLjk2NTM0MzQgMTAuNDY4MTQ5LDEyLjkxNjgyNDIgTDcuNSwxMS4yODEwMzM0IEw0LjUzMTg1MDk2LDEyLjkxNjgyNDIgQzQuNDQ1OTEzNDYsMTIuOTY1MzQzNCA0LjM1OTk3NTk2LDEzIDQuMjY3NDI3ODgsMTMgQzQuMDc1NzIxMTUsMTMgMy45ODk3ODM2NSwxMi44MzM2NDg0IDMuOTg5NzgzNjUsMTIuNjUzNDM0MiBDMy45ODk3ODM2NSwxMi42MDQ5MTQ5IDMuOTk2Mzk0MjMsMTIuNTYzMzI3IDQuMDAzMDA0ODEsMTIuNTE0ODA3OCBMNC41NzE1MTQ0Miw5LjA0OTE0OTM0IEwyLjE2NTI2NDQyLDYuNTk1NDYzMTQgQzIuMDg1OTM3NSw2LjUwNTM1NjAyIDIsNi4zODc1MjM2MyAyLDYuMjYyNzU5OTIgQzIsNi4wNTQ4MjA0MiAyLjIwNDkyNzg4LDUuOTcxNjQ0NjEgMi4zNzAxOTIzMSw1Ljk0MzkxOTM0IEw1LjY4ODcwMTkyLDUuNDM3OTMzMjEgTDcuMTc2MDgxNzMsMi4yODQxODM5OSBDNy4yMzU1NzY5MiwyLjE1MjQ4ODk3IDcuMzQ3OTU2NzMsMiA3LjUsMiBDNy42NTIwNDMyNywyIDcuNzY0NDIzMDgsMi4xNTI0ODg5NyA3LjgyMzkxODI3LDIuMjg0MTgzOTkgTDkuMzExMjk4MDgsNS40Mzc5MzMyMSBMMTIuNjI5ODA3Nyw1Ljk0MzkxOTM0IEMxMi43ODg0NjE1LDUuOTcxNjQ0NjEgMTMsNi4wNTQ4MjA0MiAxMyw2LjI2Mjc1OTkyIFoiIGlkPSJwYXRoLTUiPjwvcGF0aD4NCiAgICAgICAgPGZpbHRlciB4PSItMTEuNCUiIHk9Ii0xMS40JSIgd2lkdGg9IjEyMi43JSIgaGVpZ2h0PSIxMjIuNyUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImZpbHRlci02Ij4NCiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjAuNSIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd0JsdXJJbm5lcjEiPjwvZmVHYXVzc2lhbkJsdXI+DQogICAgICAgICAgICA8ZmVPZmZzZXQgZHg9IjEiIGR5PSIwIiBpbj0ic2hhZG93Qmx1cklubmVyMSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRJbm5lcjEiPjwvZmVPZmZzZXQ+DQogICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49InNoYWRvd09mZnNldElubmVyMSIgaW4yPSJTb3VyY2VBbHBoYSIgb3BlcmF0b3I9ImFyaXRobWV0aWMiIGsyPSItMSIgazM9IjEiIHJlc3VsdD0ic2hhZG93SW5uZXJJbm5lcjEiPjwvZmVDb21wb3NpdGU+DQogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMC4wNDY1NDE0MDIxICAgMCAwIDAgMCAwLjEwODM3NDM0NCAgIDAgMCAwIDAgMC4yMzk3NjkzNDUgIDAgMCAwIDAuMzcxNzQ0NzkyIDAiIHR5cGU9Im1hdHJpeCIgaW49InNoYWRvd0lubmVySW5uZXIxIj48L2ZlQ29sb3JNYXRyaXg+DQogICAgICAgIDwvZmlsdGVyPg0KICAgICAgICA8ZmlsdGVyIHg9Ii0xMS40JSIgeT0iLTExLjQlIiB3aWR0aD0iMTIyLjclIiBoZWlnaHQ9IjEyMi43JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iZmlsdGVyLTciPg0KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMC41IiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93Qmx1cklubmVyMSI+PC9mZUdhdXNzaWFuQmx1cj4NCiAgICAgICAgICAgIDxmZU9mZnNldCBkeD0iMSIgZHk9IjAiIGluPSJzaGFkb3dCbHVySW5uZXIxIiByZXN1bHQ9InNoYWRvd09mZnNldElubmVyMSI+PC9mZU9mZnNldD4NCiAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93T2Zmc2V0SW5uZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgazI9Ii0xIiBrMz0iMSIgcmVzdWx0PSJzaGFkb3dJbm5lcklubmVyMSI+PC9mZUNvbXBvc2l0ZT4NCiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwLjA0NjU0MTQwMjEgICAwIDAgMCAwIDAuMTA4Mzc0MzQ0ICAgMCAwIDAgMCAwLjIzOTc2OTM0NSAgMCAwIDAgMC4zNzE3NDQ3OTIgMCIgdHlwZT0ibWF0cml4IiBpbj0ic2hhZG93SW5uZXJJbm5lcjEiPjwvZmVDb2xvck1hdHJpeD4NCiAgICAgICAgPC9maWx0ZXI+DQogICAgPC9kZWZzPg0KICAgIDxnIGlkPSLorr7orqHlm74iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0i6KGl5YWFIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzIwLjAwMDAwMCwgLTQyLjAwMDAwMCkiPg0KICAgICAgICAgICAgPGcgaWQ9ImJhZGdlX2wxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMjIuMDAwMDAwLCA0NC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0iT3ZhbCI+DQogICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMSIgZmlsdGVyPSJ1cmwoI2ZpbHRlci0zKSIgeGxpbms6aHJlZj0iI3BhdGgtMiI+PC91c2U+DQogICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgZmlsbC1ydWxlPSJldmVub2RkIiB4bGluazpocmVmPSIjcGF0aC0yIj48L3VzZT4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgPGcgaWQ9IlN0YXItLS1Gb250QXdlc29tZSI+DQogICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iIzE4NDhBOSIgZmlsbC1ydWxlPSJldmVub2RkIiB4bGluazpocmVmPSIjcGF0aC01Ij48L3VzZT4NCiAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIxIiBmaWx0ZXI9InVybCgjZmlsdGVyLTYpIiB4bGluazpocmVmPSIjcGF0aC01Ij48L3VzZT4NCiAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIxIiBmaWx0ZXI9InVybCgjZmlsdGVyLTcpIiB4bGluazpocmVmPSIjcGF0aC01Ij48L3VzZT4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="/>
        </div>
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
    this.$store.commit('logout')
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
    position: relative;

    .avatar-img {
      border-radius: 99px;
      max-height: 55px;
      box-shadow: 0 8px 12px -4px rgba(0,0,0,.07), 0 6px 6px -4px rgba(0,0,0,.08);
    }

    .badge {
      width: 15px;
      z-index: 99;
      position: absolute;
      right: 0;
      bottom: 5px;
    }
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
