<template>
  <div id="book">
    <topic-tab-view @on-topic-click="onTopicChange"></topic-tab-view>
    <div class="books">
      <book-list-view :books="books" :wrap=true></book-list-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { TopicTabView, BookListView } from '@/components'
import { moreBooksUrl } from '@/service'
import { Book as IBook } from '@/model'

@Component({
  components: {
    'topic-tab-view': TopicTabView,
    'book-list-view': BookListView
  }
})
export default class Book extends Vue {
  subscription!: Function
  $http!: any
  books: Array<IBook> = []

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
    this.$http.get(moreBooksUrl).then((response: any) => {
      this.books = response.data
      this.$store.commit('loading', false)
    })
  }
}
</script>

<style lang="scss" scoped>

#book {
  background: #fff;
  min-height: 100vh;
  border-radius: .5rem .5rem 0 0;

  .books {
    padding: 15px 0 0 15px;
  }
}

</style>
