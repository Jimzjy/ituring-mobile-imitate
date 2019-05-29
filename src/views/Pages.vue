<template>
  <div>
    <router-view/>
    <bottom-navbar></bottom-navbar>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { BottomNavbar } from '@/components'

@Component({
  components: {
    'bottom-navbar': BottomNavbar
  }
})
export default class PagesContent extends Vue {}
</script>
