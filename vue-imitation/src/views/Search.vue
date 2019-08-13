<template>
  <div>{{ placeholder }}</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Search extends Vue {
  @Prop({ default: '' }) readonly placeholder!: string;
}
</script>

<style lang="scss" scoped>

</style>
