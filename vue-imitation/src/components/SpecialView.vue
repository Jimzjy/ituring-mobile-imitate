<template>
  <div class="special-view">
    <div class="title">
      <div class="title-content">
        <img src="data:image/png;base64,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" class="icon" />
        <span>{{ title }}</span>
      </div>
      <router-link class="more" v-if="more" :to="{ name: 'more-books', query: { title } }">更多</router-link>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class SpecialView extends Vue {
  @Prop({ default: '' }) readonly title!: string
  @Prop({ default: false }) readonly more!: boolean
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/_global.scss";

.special-view {
  padding: 1.5rem 0 1.5rem 1rem;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 .8rem 1rem 0;

    .title-content {
      display: flex;
      align-items: center;

      span {
        font-weight: bold;
      }

      .icon {
        height: 1.5rem;
        margin-right: .4rem;
      }
    }

    .more {
      padding: .2rem .8rem;
      background: #f8f8f8;
      border-radius: 99px;
      color: $bluey-grey;
      font-size: 14px;
      text-decoration: none;
      display: inline-block;
      text-align: center;
    }
  }
}

</style>
