<template>
  <div class="swiper">
    <swipe :showIndicators=false :speed=3000>
      <swipe-item v-for="(item, index) in data" :key="index" class="swipe-item">
        <p class="title">{{ item.title }}</p>
        <p class="content">{{ item.content }}</p>
      </swipe-item>
    </swipe>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Swipe from 'vue-swipe/src/swipe.vue'
import SwipeItem from 'vue-swipe/src/swipe-item.vue'
import { InfoSwipe } from '@/model'

@Component({
  components: {
    'swipe': Swipe,
    'swipe-item': SwipeItem
  }
})
export default class Swiper extends Vue {
  @Prop() readonly data!: Array<InfoSwipe>
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/_global.scss';

.swiper {
  height: 4.5rem;
}

.swipe-item {
  padding: .6rem 1rem;

  .title {
    margin: .2rem 0 0 0;
    font-size: 16px;
  }

  .content {
    margin: .2rem 0 0 0;
    font-size: 14px;
    color: $bluey-grey;
  }
}
</style>
