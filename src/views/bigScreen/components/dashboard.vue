<template>
    <div :class="className" id="dashbord" :style="{height:height,width:width}"></div>
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
            this.chart.setOption({
                series: [
                    {
                        type: "gauge",
                        axisLine: {
                            lineStyle: {
                                width: 10,
                                color: [
                                    [0.3, "#67e0e3"],
                                    [0.7, "#37a2da"],
                                    [1, "#fd666d"]
                                ]
                            }
                        },
                        pointer: {
                            itemStyle: {
                                color: "auto"
                            }
                        },
                        axisTick: {
                            distance: -10,
                            length: 5,
                            lineStyle: {
                                color: "#fff",
                                width: 2
                            }
                        },
                        splitLine: {
                            distance: -30,
                            length: 12,
                            lineStyle: {
                                color: "#fff",
                                width: 4
                            }
                        },
                        axisLabel: {
                            color: "auto",
                            distance: 10,
                            fontSize: 12
                        },
                        detail: {
                            valueAnimation: true,
                            formatter: "{value} ℃",
                            color: "auto",
                            fontSize: 16
                        },
                        data: [
                            {
                                value: 70
                            }
                        ]
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