<template>
  <router-view></router-view>
</template>

<script>
import { getUser } from '@/services/'
export default {
  name: 'app',
  mounted () {
    getUser()
    console.log(this.$emun('communityStatus'))
  }
}
</script>

<style>
</style>
