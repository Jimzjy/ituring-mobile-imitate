<template>
  <div id="article">
    <topic-tab-view @on-topic-click="onTopicChange"></topic-tab-view>
    <article-list-view :articles="articles" class="articles"></article-list-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { TopicTabView, ArticleListView } from '@/components'
import { articlesUrl } from '@/service'

@Component({
  components: {
    'topic-tab-view': TopicTabView,
    'article-list-view': ArticleListView
  }
})
export default class Article extends Vue {
  $http!: any
  subscription!: Function
  articles = []

  created () {
    this.updateData()
    this.subscription = this.$store.subscribe(mutation => {
      if (mutation.type === 'changeCurrentHeaderNav') {
        this.updateData()
      }
    })
  }

  destroyed () {
    this.subscription()
  }

  onTopicChange (n: number) {
    this.updateData()
  }

  updateData () {
    this.$store.commit('loading', true)
    this.$http.get(articlesUrl).then((response: any) => {
      this.articles = response.data
      this.$store.commit('loading', false)
    })
  }
}
</script>

<style lang="scss" scoped>

#article {
  background: #fff;
  min-height: 100vh;
  border-radius: .5rem .5rem 0 0;

  .articles {
    padding-left: 15px;
  }
}

</style>
