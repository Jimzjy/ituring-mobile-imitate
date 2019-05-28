<template>
  <div id="article">Article</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Article extends Vue {
}
</script>

<style lang="scss" scoped>

#article {
  background: #fff;
  border-radius: .5rem .5rem 0 0;
}

</style>
