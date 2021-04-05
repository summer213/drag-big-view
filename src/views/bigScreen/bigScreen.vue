<template>
    <div class="container">
        <div class="bg">
            <div class="left">
                <dv-border-box-7 :color="['#162E79','#008ACD']" class="l-1">
                    <LineChart :chart-data="lineChartData"></LineChart>
                </dv-border-box-7>
                <dv-border-box-7 :color="['#162E79','#008ACD']" class="l-2">
                    <BarChart></BarChart>
                </dv-border-box-7>
                <dv-border-box-7 :color="['#162E79','#008ACD']" class="l-3">
                    <PieChart></PieChart>
                </dv-border-box-7>
            </div>
            <div class="center">
                <div class="title">
                    <Title></Title>
                </div>
                <div class="top">
                    <dv-border-box-7 :color="['#162E79','#008ACD']" class="c-1">
                        <div id="mapcontainer" class="map" tabindex="0"></div>
                    </dv-border-box-7>
                </div>
                <div class="bottom">
                    <dv-border-box-7 :color="['#162E79','#008ACD']" class="c-2">
                        <zheChart></zheChart>
                    </dv-border-box-7>
                </div>
            </div>
            <div class="right">
                <dv-border-box-7 :color="['#162E79','#008ACD']" class="r-1">
                    <PieChart></PieChart>
                </dv-border-box-7>
                <dv-border-box-7 :color="['#162E79','#008ACD']" class="r-2">
                    <BarChart></BarChart>
                </dv-border-box-7>
                <dv-border-box-7 :color="['#162E79','#008ACD']" class="r-3">
                    <LineChart :chart-data="lineChartData"></LineChart>
                </dv-border-box-7>
            </div>
        </div>
    </div>
</template>

<script>
import LineChart from './components/LineChart'
import BarChart from './components/barChart'
import PieChart from './components/pieChart'
import zheChart from './components/zheChart.vue'
import Title from './components/title.vue'
const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}
export default {
    name: 'bigview',
    components: {
        LineChart,
        BarChart,
        PieChart,
        Title,
        zheChart
    },
    computed: {
        comForm() {
            return this.$store.getters.comForm
        }
    },
    data() {
        return{
            lineChartData: lineChartData.newVisitis,
            map: null
        }
    },
    mounted() {
        this.init(); 
    },
    methods: {
        init() {
            console.log(this.comForm)
            //初始化地图
            this.map = new AMap.Map('mapcontainer', {
                resizeEnable: true, //是否监控地图容器尺寸变化
                zoom: 11, //初始地图级别
                center: [121.498586, 31.239637], //初始地图中心点
                mapStyle:'amap://styles/c51eada8cb2a17ab1baf15bdb4013925'
            });
        }
    }
}
</script>
<style lang="scss" scoped>
div, p{
    box-sizing: border-box;
}
    .container{
        width: 100%;
        height: 100%;
    }
    .bg{
        width: 100%;
        height: 100%;
        background: #0E1020;
        display: flex;
        justify-content: space-around;
        padding: 30px 20px;
    }
    .left{
        width: 20%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    .l-1,.l-2,.l-3{
        width: 100%;
        height: 30%;
    }
    .right{
        width: 20%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    .r-1,.r-2,.r-3{
        width: 100%;
        height: 30%;
    }
    .center{
        width: 55%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    .center {
        .title{
            width: 100%;
            height: 10%;
        }
        .top{
            width: 100%;
            height: 50%;
            #mapcontainer{
                width: 100%;
                height: 100%;
            }
        }
        .bottom{
            width: 100%;
            height: 30%;
        }
    }
</style>
