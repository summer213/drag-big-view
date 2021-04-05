<template>
  <div class="title-con">
    <p class="title">数字大屏</p>
    <dv-decoration-5 :color="['#162E79', '#162E79']" :dur="2.2" :style="styleOwn" />
  </div>
</template>
<script>
export default {
  props: {
    styleOwn: {
      type: Object,
      default: () => {
         return{
            width:'600px',
            height:'40px',
            margin: '0 auto'
         }
      }
    }
  }
}
</script>

<style scoped>
.title-con{
  width: 100%;
  text-align: center;
  font-size: 50px;
  color: #fff;
  /* position: fixed; */
}
.title{
  margin: 0;
  margin-bottom: -25px;
}
</style>