<template>
  <div :class="['book-list-view', wrap ? 'wrap-list' : '']">
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
  @Prop({ default: false }) readonly wrap!: boolean
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/_global.scss";

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
    max-width: 5.6rem;
    box-shadow: 4px 4px 14px 0 rgba(0,0,0,.07), 2px 2px 6px 0 rgba(0,0,0,.08);
  }

  .book-item-name {
    white-space: normal;
    height: 2.3rem;
    margin: .3rem 0 0 0;
    overflow: hidden;
    font-size: 14px;
    font-weight: bold;
  }

  .book-item-author {
    margin: .3rem 0 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
    color: $bluey-grey;
    font-size: 14px;
    height: 1.3em;
  }
}

.wrap-list {
  overflow: auto;
  white-space: normal;

  .book-item {
    margin: 0;
    padding: 0 .5rem 1rem 0;
    max-width: none;
    min-width: 5.8rem;
    box-sizing: border-box;
    width: 33.3%;

    .book-item-img {
      min-width: 5.8rem;
    }

    .book-item-author {
      white-space: nowrap;
    }
  }
}

</style>
