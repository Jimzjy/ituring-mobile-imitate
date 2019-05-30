<template>
  <div>
    <header>
      <div @click="navBack"><v-icon name="custom-left" /></div>
      <div class="title">{{ title }}</div>
      <div></div>
    </header>
    <div class="books">
      <book-list-view :books="books" :wrap=true></book-list-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { BookListView } from '@/components'
import { moreBooksUrl } from '@/service'
import { Book } from '@/model'

@Component({
  components: {
    'book-list-view': BookListView
  }
})
export default class MoreBooks extends Vue {
  @Prop({ default: '' }) readonly title!: string
  $http!: any
  books: Array<Book> = []

  created () {
    this.$http.get(moreBooksUrl).then((response: any) => {
      this.books = response.data
    })
  }

  navBack () {
    this.$router.go(-1)
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/_global.scss";

header {
  height: 3.2rem;
  padding: .9rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    flex: 1;
  }

  .fa-icon {
    fill: $bluey-grey;
    height: .85rem;
  }

  .title {
    display: inline-block;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.books {
  padding: .9rem;
}

</style>
