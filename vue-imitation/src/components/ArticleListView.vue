<template>
  <div>
    <div class="article-item" v-for="(article, index) in articles" :key="index">
      <div>
        <div class="title">{{ article.title }}</div>
        <div v-if="showTag">
          <span class="topic" v-for="topic in article.topics" :key="topic">
            <span class="line"></span>
            <span class="line" id="last"></span>
            {{ topic }}
          </span>
          <span class="tag" v-for="tag in article.tags" :key="tag">
            {{ tag }}
          </span>
          <div class="info">{{ article.date }} · {{ article.actions[0] }} 推荐 · {{ article.actions[1] }} 阅读</div>
        </div>
        <div v-if="!showTag">
          <div class="info">{{ article.author }} · {{ article.date }}</div>
        </div>
      </div>
      <div>
        <img :src="article.avatar" class="avatar"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Article } from '@/model'

@Component
export default class ArticleListView extends Vue {
  @Prop() articles!: Array<Article>
  @Prop({ default: true }) showTag!: boolean
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/_global.scss';

.article-item {
  padding: 15px 15px 15px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dae1e744;

  .title {
    margin-right: 20px;
  }

  .info {
    margin-top: 10px;
    font-size: 14px;
    color: $bluey-grey;
  }

  .tag, .topic {
    display: inline-block;
    font-size: 12px;
    margin-right: 10px;
    margin-top: 8px;
  }

  .tag {
    padding: 3px 10px;
    color: $primary-color;
    background: #E4F2FC;
    border-radius: 0 99px 99px 0;
  }

  .topic {
    padding: 2px 10px 2px 20px;
    background: #fcf8e3;
    border: 1px solid #fbcc66;
    color: #fbcc66;
    position: relative;

    .line {
      position: absolute;
      left: 6px;
      width: 1px;
      background: #fbcc66;
      height: 16px;

      &#last {
        left: 10px;
      }
    }
  }

  .avatar {
    border-radius: 99px;
    max-height: 36px;
    box-shadow: 0 8px 12px -4px rgba(0,0,0,.07), 0 6px 6px -4px rgba(0,0,0,.08);
  }
}

</style>
