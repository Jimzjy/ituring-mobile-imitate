<template>
  <div id="book">
    <topic-tab-view @on-topic-click="onTopicChange"></topic-tab-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { TopicTabView } from '@/components'

@Component({
  components: {
    'topic-tab-view': TopicTabView
  }
})
export default class Book extends Vue {
  subscription!: Function

  created () {
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
    console.log('update data')
  }
}
</script>

<style lang="scss" scoped>

#book {
  background: #fff;
  height: 100vh;
  border-radius: .5rem .5rem 0 0;
}

</style>
