<template>
  <div id="home">
    <swiper :data="data.infoSwipe"></swiper>
    <sepline></sepline>
    <div v-for="(item, index) in data.booksWithTitle" :key="index" >
      <special-view :title="item.title" :more="item.books.length > 4">
        <book-list-view :books="item.books"></book-list-view>
      </special-view>
      <sepline></sepline>
    </div>
    <special-view title="推荐文章">
      <article-list-view :articles="data.articles" :showTag=false></article-list-view>
    </special-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Swiper, SpecialView, BookListView, ArticleListView } from '@/components'
import { homeDataUrl } from '@/service'
import { HomeData } from '@/model'

@Component({
  components: {
    'swiper': Swiper,
    'special-view': SpecialView,
    'book-list-view': BookListView,
    'article-list-view': ArticleListView
  }
})
export default class Home extends Vue {
  $http!: any
  data: HomeData = {}

  created () {
    this.updateData()
  }

  updateData () {
    this.$http.get(homeDataUrl).then((resposne: any) => {
      this.data = resposne.data
    })
  }
}
</script>

<style lang="scss" scoped>

#home {
  background: #fff;
  min-height: 100vh;
}

</style>
