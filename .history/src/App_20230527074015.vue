<template>
  app
  <el-button type="primary">Primary</el-button>
  <router-view />
</template>
<script>
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
