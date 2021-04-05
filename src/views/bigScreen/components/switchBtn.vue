<template>
  <div class="btn">
      <el-switch
        v-model="value"
        active-text="开"
        inactive-text="关">
</el-switch>
  </div>
</template>

<script>
export default {
    data() {
        return{
            value: true
        }
    }
}
</script>

<style lang="scss" scoped>
.btn{
  margin: 20px 0;
}
::v-deep{
  .el-switch__label{
    color: grey;
  }
  .el-switch__label.is-active{
      color: #1890ff;
  }
}
</style>