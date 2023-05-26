<template>
  app
  <el-button type="primary">Primary</el-button>
  <router-view />
</template>
<script>
import { getListAPI } from '@/api'
export default ({
  data () {
    return {

    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {

    }
  }
})
</script>
<style lang="less">
</style>
