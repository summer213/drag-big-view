<template>
    <div class="container">
        <div class="bg">
            <div class="left">
                <div @click="setting(componentType.componentType1, 1)" class="l-1">
                    <dv-border-box-7 :color="['#162E79','#008ACD']" class="border">
                        <div class="box-title">{{comForm[1].itemTitle||'标题'}}</div>
                        <div class="droppable-box drop1">
                            <component :is="componentType.componentType1" :chartOpt="comForm[1].chartOpt">
                            </component>
                        </div>
                    </dv-border-box-7>
                </div>
                <div @click="setting(componentType.componentType2, 2)" class="l-2">
                    <dv-border-box-7 :color="['#162E79','#008ACD']" class="border">
                        <div class="box-title">{{comForm[2].itemTitle||'标题'}}</div>
                        <div class="droppable-box drop2">
                            <component :is="componentType.componentType2" :chartOpt="comForm[2].chartOpt">
                            </component>
                        </div>
                    </dv-border-box-7>
                </div>
                <div @click="setting(componentType.componentType3, 3)" class="l-3">
                    <dv-border-box-7 :color="['#162E79','#008ACD']" class="border">
                        <div class="box-title">{{comForm[3].itemTitle||'标题'}}</div>
                        <div class="droppable-box drop3">
                            <component :is="componentType.componentType3" :chartOpt="comForm[3].chartOpt">
                            </component>
                        </div>
                    </dv-border-box-7>
                </div>
            </div>
            <div class="center">
                <div class="title">
                    <Title></Title>
                </div>
                <div class="top">
                    <dv-border-box-7 :color="['#162E79','#008ACD']" class="c-1">
                        <div id="mapcontainer" class="map" tabindex="0"></div>
                        <dv-border-box-7 :color="['#162E79','#008ACD']" v-show="mapCard" class="box-card drop9">
                            <i class="close el-icon-close" @click="()=>{mapCard = false}"></i>
                            <template>
                                <div style="padding-top:20px">
                                    <el-row style="padding-top:10px">
                                        <el-col :span="5">温度：</el-col>
                                        <el-col :span="19">123℃</el-col>
                                    </el-row>
                                    <el-row style="padding-top:10px">
                                        <el-col :span="5">频率：</el-col>
                                        <el-col :span="19">123</el-col>
                                    </el-row>
                                    <el-row style="padding-top:10px">
                                        <el-col :span="5">电压：</el-col>
                                        <el-col :span="19">66v</el-col>
                                    </el-row>
                                </div>
                                <div v-for="(item, index) in componentType.componentType9" :key="index" @click="setting(componentType.componentType9, 9, index)">
                                    <component :is="item">
                                    </component>
                                </div>
                            </template>
                        </dv-border-box-7>
                    </dv-border-box-7>
                </div>
                <div class="bottom">
                    <div @click="setting(componentType.componentType4, 4)" class="c-2">
                        <dv-border-box-7 :color="['#162E79','#008ACD']" class="border">
                            <div class="box-title">{{comForm[4].itemTitle||'标题'}}</div>
                            <div class="droppable-box drop4">
                                <component :is="componentType.componentType4" :chartOpt="comForm[4].chartOpt">
                                </component>
                            </div>
                        </dv-border-box-7>
                    </div>
                    <div @click="setting(componentType.componentType8, 8)" class="c-3">
                        <dv-border-box-7 :color="['#162E79','#008ACD']" class="border">
                            <div class="box-title">{{comForm[8].itemTitle||'标题'}}</div>
                            <div class="droppable-box drop8">
                                <component :is="componentType.componentType8" :chartOpt="comForm[8].chartOpt">
                                </component>
                            </div>
                        </dv-border-box-7>
                    </div>
                </div>
            </div>
            <div class="right">
                <div @click="setting(componentType.componentType5, 5)" class="r-1">
                    <dv-border-box-7 :color="['#162E79','#008ACD']" class="border">
                        <div class="box-title">{{comForm[5].itemTitle||'标题'}}</div>
                        <div class="droppable-box drop5">
                            <component :is="componentType.componentType5" :chartOpt="comForm[5].chartOpt">
                            </component>
                        </div>
                    </dv-border-box-7>
                </div>
                
                <div @click="setting(componentType.componentType6, 6)" class="r-2">
                    <dv-border-box-7 :color="['#162E79','#008ACD']" class="border">
                        <div class="box-title">{{comForm[6].itemTitle||'标题'}}</div>
                        <div class="droppable-box drop6">
                            <component :is="componentType.componentType6" :chartOpt="comForm[6].chartOpt">
                            </component>
                        </div>
                    </dv-border-box-7>
                </div>
                <div @click="setting(componentType.componentType7, 7)" class="r-3">
                    <dv-border-box-7 :color="['#162E79','#008ACD']" class="border">
                        <div class="box-title">{{comForm[7].itemTitle||'标题'}}</div>
                        <div class="droppable-box drop7">
                            <component :is="componentType.componentType7" :chartOpt="comForm[7].chartOpt">
                            </component>
                        </div>
                    </dv-border-box-7>
                </div>
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
import scrollTable from './components/scrollTable.vue'
import dashboard from './components/dashboard.vue'
import RaddarChart from './components/RaddarChart.vue'
import btnItem from './components/btnItem.vue'
import switchBtn from './components/switchBtn.vue'
import capsuleChart from './components/capsuleChart.vue'

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
        zheChart,
        scrollTable,
        dashboard,
        RaddarChart,
        btnItem,
        switchBtn,
        capsuleChart
    },
    data() {
        return{
            lineChartData: lineChartData.newVisitis,
            map: null,
            mapCard: false
        }
    },
    watch: {
        comForm(val, old) {
            console.log(val)
        }
    },
    props: {
        componentType: {
            type: Object,
            default: () => {}
        },
        comForm: {
            type: Array,
            default: () => [
                {
                    itemTitle: '',
                    chartOpt: {
                        title: '',
                        radius: [],
                        color: []
                    }
                },
                {
                    itemTitle: '',
                    chartOpt: {
                        title: '',
                        radius: [],
                        color: []
                    }
                },
                {
                    itemTitle: '',
                    chartOpt: {
                        title: '',
                        radius: [],
                        color: []
                    }
                },
                {
                    itemTitle: '',
                    chartOpt: {
                        title: '',
                        radius: [],
                        color: []
                    }
                },
                {
                    itemTitle: '',
                    chartOpt: {
                        title: '',
                        radius: [],
                        color: []
                    }
                },
                {
                    itemTitle: '',
                    chartOpt: {
                        title: '',
                        radius: [],
                        color: []
                    }
                },
                {
                    itemTitle: '',
                    chartOpt: {
                        title: '',
                        radius: [],
                        color: []
                    }
                },
                {
                    itemTitle: '',
                    chartOpt: {
                        title: '',
                        radius: [],
                        color: []
                    }
                },
                {
                    itemTitle: '',
                    chartOpt: {
                        title: '',
                        radius: [],
                        color: []
                    }
                }
            ]
        }
    },
    mounted() {
        this.init(); 
    },
    methods: {
        init() {
            //初始化地图
            this.map = new AMap.Map('mapcontainer', {
                resizeEnable: true, //是否监控地图容器尺寸变化
                zoom: 11, //初始地图级别
                center: [121.498586, 31.239637], //初始地图中心点
                mapStyle:'amap://styles/0679b35057b17f85c303fed108deac10'
            });

            var icon = new AMap.Icon({
                size: new AMap.Size(26, 34),    // 图标尺寸
                image: "https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",  // Icon的图像
                imageSize: new AMap.Size(26, 34)   // 根据所设置的大小拉伸或压缩图片
            });
            let marker = new AMap.Marker({
                icon: icon,
                position: [121.406315,31.208775],
                offset: new AMap.Pixel(-13, -34)
            });
            marker.setMap(this.map);
            // 绑定点击事件
            marker.on('click', () =>{this.mapCard = true});
        },
        setting(val, index, itemIndex) {
            // console.log(val)
            if(index == 9) {
                console.log(val, itemIndex)
                this.$emit('setForm', val[itemIndex], index)
            } else {
                this.$emit('setForm', val, index)
            }
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
    .box-title{
        padding: 0 20px;
        height: 30px;
        line-height: 30px;
        color: #fff;
        text-align: center;
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
                position: relative;
            }
            .box-card{
                background-color: rgba(15, 17, 33, 0.8) !important;
                padding: 0 20px;
                width: 300px;
                height: 300px;
                position: absolute;
                right: 10px;
                bottom: 10px;
                color: #fff;
                ::v-deep{
                    .border-box-content{
                        padding-top: 1px;
                    }
                }
                .close{
                    position: absolute;
                    right: -10px;
                    top: 10px;
                    cursor: pointer;
                }
            }
        }
        .bottom{
            width: 100%;
            height: 30%;
            display: flex;
            justify-content: space-between;
            .c-2, .c-3{
                width: 48%;
            }
        }
    }
    .border{
        width: 100%;
        height: 100%;
    }
    .droppable-box{
        width: 100%;
        height: 100%;
    }
</style>
