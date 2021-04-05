<template>
    <div :class="className" id="barchart" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import resize from "./mixins/resize";

export default {
    mixins: [resize],
    props: {
        className: {
            type: String,
            default: "chart"
        },
        width: {
            type: String,
            default: "90%"
        },
        height: {
            type: String,
            default: "calc(95% - 30px)"
        },
        autoResize: {
            type: Boolean,
            default: true
        },
        chartData: {
            type: Object
        },
        chartOpt: {
            type: Object,
            default: () => {
                return{
                    title: '',
                    radius: [],
                    color: [],
                    data: []
                }
            }
        }
    },
    watch: {
        chartOpt: {
            handler(form) {
                // console.log(val)
                let color = [], data = [];
                if(form.itemList) {
                    form.itemList.forEach(item => {
                        color.push(item.color);
                        data.push({name:item.label, value: Math.random()*100});
                    })
                    this.chartOption= {
                        title: form.title,
                        color: color,
                        data: data,
                        radius: [form.inradius, form.outradius]
                    }
                    console.log(this.chartOption)
                    this.initChart();
                }
            },
            immediate: true
        }
    },
    data() {
        return {
            chartOption: {
                title: '',
                radius: [],
                color: [],
                data: []
            }
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.initChart();
        });
    },
    methods: {
        initChart() {
            this.chart = echarts.init(this.$el, "macarons");
            this.setOptions(this.chartData);
        },
        setOptions() {
            if(!this.chartOption.radius.length) {
                this.$set(this.chartOption,'radius',[])
                this.$set(this.chartOption,'color',[])
                this.$set(this.chartOption,'data',[])
            }
            this.chart.setOption({
                title: {
                    text: this.chartOption.title||'设备',
                    textStyle: {
                        color: '#999',
                        fontSize: 16
                    }
                },
                tooltip: {
                    trigger: "item"
                },
                legend: {
                    top: "1%",
                    left: "right"
                },
                grid: {
                    left: 10,
                    right: 20,
                    bottom: 30,
                    top: 50,
                    containLabel: true
                },
                series: [
                    {
                        name: "设备：",
                        type: "pie",
                        radius: this.chartOption.radius.length?this.chartOption.radius:["40%", "70%"],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: "center"
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: "20",
                                fontWeight: "bold"
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: this.chartOption.data.length?this.chartOption.data:[
                            { value: 1048, name: "设备1" },
                            { value: 735, name: "设备2" }
                        ],
                        color: this.chartOption.color.length?this.chartOption.color:['#32DADD','#C8B2F4']
                    }
                ]
            });
        }
    }
};
</script>

<style scoped>
.chart {
    margin: 20px auto;
}
</style>