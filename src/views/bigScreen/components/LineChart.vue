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
            type: Object,
            required: true
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
        setOptions({ expectedData, actualData } = {}) {
            this.chart.setOption({
                xAxis: {
                    data: [
                        "周一",
                        "周二",
                        "周三",
                        "周四",
                        "周五",
                        "周六",
                        "周日"
                    ],
                    boundaryGap: false,
                    axisTick: {
                        show: false
                    }
                },
                grid: {
                    left: 10,
                    right: 20,
                    bottom: 30,
                    top: 20,
                    containLabel: true
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "cross"
                    },
                    padding: [5, 10]
                },
                yAxis: {
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0.2)'
                        }
                    },
                    splitArea: {
                        show: false
                    }
                },
                legend: {
                    data: ["设备一", "设备二"]
                },
                series: [
                    {
                        name: "设备一",
                        itemStyle: {
                            normal: {
                                color: "#2E6175",
                                lineStyle: {
                                    color: "#2E6175",
                                    width: 2
                                }
                            }
                        },
                        smooth: true,
                        type: "line",
                        data: expectedData,
                        animationDuration: 2800,
                        animationEasing: "cubicInOut"
                    },
                    {
                        name: "设备二",
                        smooth: true,
                        type: "line",
                        itemStyle: {
                            normal: {
                                color: "#3888fa",
                                lineStyle: {
                                    color: "#3888fa",
                                    width: 2
                                },
                                areaStyle: {
                                    color: "#0F1C40"
                                }
                            }
                        },
                        data: actualData,
                        animationDuration: 2800,
                        animationEasing: "quadraticOut"
                    }
                ]
            });
        }
    }
};
</script>

<style scoped>
.chart{
    margin: 20px auto;
}
</style>