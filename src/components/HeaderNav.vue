<template>
  <div id="header-nav">

  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { topicsUrl } from '@/service'

@Component
export default class HeaderNav extends Vue {
  $http!: any

  mounted () {
    console.log(this.$route)
    this.$http.get(topicsUrl).then((resposne: any) => {
      console.log(resposne)
    })
  }

  @Watch('$route')
  updateTopics () {
    console.log(this.$route)
    this.$http.get(topicsUrl).then((resposne: any) => {
      console.log(resposne)
    })
  }
}
</script>

<style lang="scss" scoped>

#header-nav {
  height: 3.05rem;
  padding: 0 0 1rem 0.9rem;
  box-sizing: border-box;
}

</style>
