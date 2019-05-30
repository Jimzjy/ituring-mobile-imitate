<template>
  <div class="topic-tab-view">
    <div class="topics">
      <span :class="['topics-item', topicChecked == index ? 'checked' : '']"
        v-for="(item, index) in topics"
        :key="index"
        @click="onTopicClick(index)"
      >
        {{ item }}
      </span>
    </div>
    <div class="action">更多筛选</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator'

@Component
export default class TopicTabView extends Vue {
  topics: Array<string> = ['最新', '热门', '推荐']
  topicChecked: number = 0

  @Emit()
  onTopicClick (n: number) {
    this.topicChecked = n
    return n
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/_global.scss';

.topic-tab-view {
  padding: 15px 15px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dae1e744;
}

.topics {
  &-item {
    margin-right: 20px;
    padding-bottom: 10px;
    font-size: 14px;
    display: inline-block;
    text-align: center;

    &.checked {
      font-weight: bold;
      border-bottom: 2px solid $primary-color;
    }
  }
}

.action {
  font-size: 14px;
  color: $primary-color;
  font-weight: 500;
}

</style>
