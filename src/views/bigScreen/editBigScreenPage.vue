<template>
    <div class="edit-page">
        <el-row class="edit-con">
            <el-col :span="3" class="edit-item">
                <div class="drag-list">
                    <h1>组件库</h1>
                    <el-divider></el-divider>
                    <div class="drag-item">
                        <div class="chart-item">
                            <PieChart height="200px"></PieChart>
                        </div>
                    </div>
                    <div class="drag-item">
                        <div class="chart-item">
                            <BarChart height="200px"></BarChart>
                        </div>
                    </div>
                    <div class="drag-item">
                        <div class="chart-item">
                            <zheChart height="200px"></zheChart>
                        </div>
                     </div>
                    <div class="drag-item">
                        <div class="chart-item">
                            <dashboard></dashboard>
                        </div>
                    </div>
                    <div class="drag-item">
                        <div class="chart-item">
                            <RaddarChart></RaddarChart>
                        </div>
                    </div>
                    <div class="drag-item">
                        <div class="chart-item">
                            <scrollTable></scrollTable>
                        </div>
                    </div>
                    <div class="drag-item">
                        <btnItem></btnItem>
                    </div>
                    <div class="drag-item">
                        <switchBtn></switchBtn>
                    </div>
                    <div class="drag-item">
                        <capsuleChart></capsuleChart>
                    </div>
                </div>
            </el-col>
            <el-col :span="17" class="edit-item">
                <EditBigScreen :componentType="componentType" :comForm="comForm" @setForm="setForm"></EditBigScreen>
            </el-col>
            <el-col :span="4" class="edit-item setting">
                <h1>配置项</h1>
                <el-divider></el-divider>
                <component :is="chartFormType" @updateForm="updateForm"></component>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { Drag, Drop } from "dnd.js";
import LineChart from './components/LineChart'
import BarChart from './components/barChart'
import PieChart from './components/pieChart'
import zheChart from './components/zheChart.vue'
import scrollTable from './components/scrollTable.vue'
import dashboard from './components/dashboard.vue'
import RaddarChart from './components/RaddarChart.vue'
import btnItem from './components/btnItem.vue'
import switchBtn from './components/switchBtn.vue'
import capsuleChart from './components/capsuleChart.vue'

import PieChartForm from './components/comForm/pieChartForm'
import scrollTableForm from './components/comForm/scrollTableForm'
import btnItemForm from './components/comForm/btnItemForm'
import switchBtnForm from './components/comForm/switchBtnForm'


import Title from './components/title.vue'
import EditBigScreen from './editBigScreen.vue'

// new Drag(element, options)
// new Drop(element, options)
export default {
    data() {
        return {
            // 编辑大屏页面组件
            componentType: {
                componentType1: '',
                componentType2: '',
                componentType3: '',
                componentType4: '',
                componentType5: '',
                componentType6: '',
                componentType7: '',
                componentType8: '',
                componentType9: []
            },
            form: {
                title: '',
                inradius: '',
                outradius: '',
                itemList: [
                    {
                        color: '',
                        label: ''
                    }
                ]
            },
            chartOpt: {
                title: '',
                radius: [],
                color: [],
                data: []
            },
            // 表单组件
            chartFormType: '',
            // 表单配置内容
            chartFormContent: [],
            itemIndex: '',
            comForm: [
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
                },
                {
                    itemTitle: '',
                    chartOpt: {
                        title: '',
                        radius: [],
                        color: []
                    }
                }]
        };
    },
    components: {
        LineChart,
        BarChart,
        PieChart,
        Title,
        zheChart,
        EditBigScreen,
        scrollTable,
        dashboard,
        RaddarChart,
        btnItem,
        switchBtn,
        capsuleChart,
        PieChartForm,
        scrollTableForm,
        btnItemForm,
        switchBtnForm
    },
    mounted() {
        this.initDrag();
    },
    methods: {
        change() {
            this.componentType.componentType = 'PieChart';
        },
        initDrag() {
            var draggableNodes = document.getElementsByClassName("drag-item");
            for (var i = 0; i < draggableNodes.length; i++) {
                new Drag(draggableNodes[i], {
                    data: i + 1,
                    onDragEnd: function(params) {
                        !params.target &&
                            params.methods.removeDragedNode("back");
                    }
                });
            }

            let _this = this;
            let comArr = ['', 'PieChart', 'BarChart', 'zheChart', 'dashboard', 'RaddarChart', 'scrollTable', 'btnItem', 'switchBtn', 'capsuleChart']
            for (let i = 1; i <= 9; i++) {
                new Drop(`.drop${i}`, {
                    onDragStart: function(params) {
                    },
                    onDragEnter: function(params) {
                        params.methods.showStateIcon("add");
                    },
                    onDragLeave: function(params) {
                        params.methods.hideStateIcon();
                    },
                    onDragEnd: function(params) {
                        // params.el.style.background = "#fff";
                        // this.componentType = 'PieChart'
                    },
                    onDrop: function(params) {
                        if(i == 9) {
                            _this.componentType[`componentType${i}`].push(comArr[params.data]);
                            console.log( _this.componentType[`componentType${i}`])
                            _this.$set(_this.comForm, i, {
                                componentType: _this.componentType[`componentType${i}`]
                            })
                            _this.$store.dispatch('chartForm/updateComForm', _this.comForm)
                        } else {
                            _this.componentType[`componentType${i}`] = comArr[params.data];
                            _this.$set(_this.comForm, i, {
                                componentType: _this.componentType[`componentType${i}`]
                            })
                            _this.$store.dispatch('chartForm/updateComForm', _this.comForm)
                        }
                        console.log(666)
                    }
                });
            }
        },
        updateForm(form) {
            // console.log(this.componentType[`componentType${this.itemIndex}`])
            this.$set(this.comForm, this.itemIndex, {
                componentType: this.componentType[`componentType${this.itemIndex}`],
                itemTitle: form.itemTitle,
                chartOpt: {...form}
            })
            this.$store.dispatch('chartForm/updateComForm', this.comForm)
        },
        setForm(val, index) {
            // 记录当前点配置的框的index
            this.itemIndex = index;
            this.chartFormType = val + 'Form';
            console.log(val, index, this.chartFormType);
        }
    }
};
</script>

<style lang="scss" scoped>
.edit-page{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    .edit-con, .edit-item{
        height: 100%;
    }
    .collapse{
        width: 100%;
    }
    .drag-list{
        padding: 0 20px;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        background: #0E1020;
        color: #fff;
        .chart-item{
            width: 200px;
            height: 200px;
        }
    }
    .setting{
        padding: 0 20px;
    }
}
</style>