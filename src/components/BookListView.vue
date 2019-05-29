<template>
  <div class="book-list-view">
    <div v-for="(book, index) in books" :key="index" class="book-item">
      <img :src="book.imgUrl" class="book-item-img"/>
      <p class="book-item-name">{{ book.name }}</p>
      <p class="book-item-author">{{ book.author }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Book } from '@/model'

@Component
export default class BookListView extends Vue {
  @Prop() readonly books!: Array<Book>
}
</script>

<style lang="scss" scoped>
.book-list-view {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
}

.book-item {
  max-width: 5.6rem;
  display: inline-block;
  padding: .6rem .9rem 0 0;
  margin-right: .5rem;

  .book-item-img {
    max-width: 5.5rem;
    box-shadow: 4px 4px 14px 0 rgba(0,0,0,.07), 2px 2px 6px 0 rgba(0,0,0,.08);
  }

  .book-item-name {
    white-space: normal;
    max-height: 2.5rem;
    margin: 4px 0 0 0;
    overflow: hidden;
    font-size: 14px;
    font-weight: bold;
  }

  .book-item-author {
    margin: 4px 0 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
  }
}

</style>
