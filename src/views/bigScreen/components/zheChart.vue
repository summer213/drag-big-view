<template>
    <div :class="className" id="echart" :style="{height:height,width:width}"></div>
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
            default: "95%"
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
        }
    },
    data() {
        return {};
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
            this.chart.setOption(
                {
                    grid: {
                        left: 10,
                        right: 20,
                        bottom: 30,
                        top: 20,
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
                    },
                    yAxis: {
                        type: 'value',
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(255,255,255,0.2)'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        splitArea: {
                            show: false
                        }
                    },
                    series: [{
                        data: [200, 1300, 126, 934, 1290, 358, 1320, 126, 934, 1290, 358, 1320],
                        type: 'line',
                        smooth: false, 
                        itemStyle: {
                            normal: {
                                color: "#FFCB8C",
                                lineStyle: {
                                    color: "#FFCB8C",
                                    width: 2
                                },
                                areaStyle: {
                                    color: "#FFCB8C"
                                }
                            }
                        }
                    }]
                }
            );
        }
    }
};
</script>

<style scoped>
.chart{
    margin: 20px auto;
}
</style>