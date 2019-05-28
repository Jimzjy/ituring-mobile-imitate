<template>
  <div id="book">Book</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Book extends Vue {
}
</script>

<style lang="scss" scoped>

#book {
  background: #fff;
  border-radius: .5rem .5rem 0 0;
}

</style>
