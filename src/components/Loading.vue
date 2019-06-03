<template>
  <div id="loading">
    <div class="loading-item-wrapper">
      <span v-for="(item, index) in items"
        :key="index"
        :class="['loading-item', item ? 'current' : '']"
      ></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Loading extends Vue {
  items: Array<boolean> = [true, false, false, false]
  private indexOrder = [0, 1, 3, 2]
  private itemIndex: number = 0
  private interval!: any

  private animate = () => {
    Vue.set(this.items, this.indexOrder[this.itemIndex], false)
    this.itemIndex = this.itemIndex < this.items.length - 1 ? this.itemIndex + 1 : 0
    Vue.set(this.items, this.indexOrder[this.itemIndex], true)
  }

  created () {
    this.interval = setInterval(this.animate, 150)
  }

  destroyed () {
    clearInterval(this.interval)
  }
}
</script>

<style lang="scss" scoped>
#loading {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background: hsla(0, 0, 100%, .85);
  display: flex;
  justify-content: center;
  align-items: center;

  $item-wrapper-size: 36px;
  $item-size: 14px;
  .loading-item-wrapper {
    width: $item-wrapper-size;
    height: $item-wrapper-size;
    white-space: nowrap;
    display: flex;
    flex-flow: wrap;
  }

  .loading-item {
    width: $item-size;
    height: $item-size;
    background: rgb(210, 234, 252);
    display: inline-block;
    margin: 2px;
    box-shadow: 0 0 8px -3px rgba(0, 0, 0, .5);

    &.current {
      background: rgb(36, 160, 248);
    }
  }
}

</style>
