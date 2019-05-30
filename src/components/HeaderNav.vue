<template>
  <div class="header-nav">
    <div class="home-topics" v-if="isHome">
      <span v-for="topic in topicsData" :key="topic">
        <router-link :to="{ name: 'search', query: { placeholder: topic } }" class="topic-content">{{ topic }}</router-link>
      </span>
    </div>
    <div class="other-topics" v-if="!isHome">
      <span v-for="topic in topicsData" :key="topic">
        <div :class="[topicFocused === topic ? 'topic-content-foucused' : 'topic-content']" @click="onTopicClick(topic)">{{ topic }}</div>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { topicsUrl } from '@/service'
import { routePageNames } from '@/router'

@Component
export default class HeaderNav extends Vue {
  $http!: any
  topicsData: Array<string> = []
  isHome: boolean = true
  topicFocused: string = '所有'

  created () {
    this.updateTopics()
  }

  @Watch('$route')
  updateTopics () {
    this.isHome = this.$route.name === routePageNames[0]
    this.$http.get(`${topicsUrl}/${this.$route.name}`).then((resposne: any) => {
      this.topicsData = resposne.data
    })
  }

  onTopicClick (topic: string) {
    this.topicFocused = topic
  }
}
</script>

<style lang="scss" scoped>
.header-nav {
  height: 3.05rem;
  padding: 0 0 1rem 0.9rem;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }

  .home-topics {
    span {
      display: inline-block;
      padding: .3rem .7rem;
      margin-right: .3rem;
      background: #1D469D;
      border-radius: .2rem;
      text-align: center;

      .topic-content {
        color: hsla(0,0%,100%,.54);
        font-size: 14px;
        text-decoration: none;
      }
    }
  }

  .other-topics {
    span {
      display: inline-block;
      margin-right: 1.5rem;
      text-align: center;

      .topic-content {
        padding-top: .3rem;
        color: hsla(0,0%,100%,.54);
        font-size: 14px;
      }

      .topic-content-foucused {
        padding-top: .3rem;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
}

</style>
