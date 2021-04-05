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
            default: "calc(90% - 30px)"
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
                title: {
                    text: "对比"
                },
                tooltip: {},
                legend: {
                    data: [
                        "预算分配（Allocated Budget）",
                        "实际开销（Actual Spending）"
                    ]
                },
                radar: {
                    // shape: 'circle',
                    name: {
                        textStyle: {
                            color: "#fff",
                            backgroundColor: "#999",
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    },
                    indicator: [
                        { name: "温度", max: 6500 },
                        { name: "湿度", max: 16000 },
                        { name: "频率", max: 30000 },
                        { name: "声音", max: 38000 },
                        { name: "电流", max: 52000 },
                        { name: "电压", max: 25000 }
                    ]
                },
                series: [
                    {
                        name: "设备一/设备二",
                        type: "radar",
                        areaStyle: { normal: {} },
                        data: [
                            {
                                value: [
                                    4300,
                                    10000,
                                    28000,
                                    35000,
                                    50000,
                                    19000
                                ],
                                name: "设备一"
                            },
                            {
                                value: [
                                    5000,
                                    14000,
                                    28000,
                                    31000,
                                    42000,
                                    21000
                                ],
                                name: "设备二"
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