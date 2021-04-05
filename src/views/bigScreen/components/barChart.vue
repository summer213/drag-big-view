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
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                grid: {
                    left: 10,
                    right: 20,
                    bottom: 30,
                    top: 20,
                    containLabel: true
                },
                yAxis: {
                    type: 'value',
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0.2)'
                        }
                    },
                },
                series: [{
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar',
                    showBackground: true,
                    backgroundStyle: {
                        color: 'rgba(180, 180, 180, 0.6)'
                    }
                },{
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar',
                    showBackground: true,
                    backgroundStyle: {
                        color: 'rgba(180, 180, 180, 0.2)'
                    }
                }]
            })
        }
    }
};
</script>

<style scoped>
.chart{
    margin: 20px auto;
}
</style>