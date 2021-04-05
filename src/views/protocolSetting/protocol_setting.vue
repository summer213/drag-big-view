<template>
    <div class="protocol-container">
        <h3>编辑协议标签</h3>
        <el-divider></el-divider>
        <div>
            <div class="row">
                <div class="label">当前协议：</div>
                <div class="text">{{nowProtocol||'-'}}</div>
            </div>
            <div class="row">
                <div class="label">编辑协议标签：</div>
                <div>
                    <el-tag
                        class="edit-tag"
                        size="big"
                        v-for="(item, index) in editItem"
                        :key="item.label+index"
                        :type="item.type"
                        effect="dark">
                        {{ item.text }}
                        <template v-if="item.iptType==1">
                            <el-input class="ipt" v-model="item.value"></el-input>
                        </template>
                        <template v-if="item.iptType==2">
                            <el-input class="ipt" v-model="item.value1"></el-input>
                            ]|
                            <el-input class="ipt" v-model="item.value2"></el-input>
                        </template>
                        <template v-if="item.iptText">{{item.iptText}}</template>
                        ]
                        <i class="el-icon-delete icon-delete" @click="deleteItem(index)"></i>
                    </el-tag>
                    <div>
                        <el-button v-if="editItem.length" size="small" type="primary" @click="saveProtocal">保存协议</el-button>
                    </div>
                </div>
            </div>
        </div>
        <h3 style="margin-top:50px">添加协议标签</h3>
        <el-divider></el-divider>
        <div>
            <div class="row">
                <div class="label">数据头标签：</div>
                <div>
                    <el-tag
                        class="tag"
                        v-for="(item, index) in headItem"
                        :key="item.label+index"
                        :type="item.type"
                        @click="add(item)"
                        effect="dark">
                        {{ item.label }}
                    </el-tag>
                </div>
            </div>
            <div class="row">
                <div class="label">分隔符标签：</div>
                <div>
                    <el-tag
                        class="tag"
                        v-for="(item,index) in splitItem"
                        :key="item.label+index"
                        :type="item.type"
                        @click="add(item)"
                        effect="dark">
                        {{ item.label }}
                    </el-tag>
                </div>
            </div>
            <div class="row">
                <div class="label">数据标签：</div>
                <div>
                    <el-tag
                        class="tag"
                        v-for="(item,index) in dataItem"
                        :key="item.label+index"
                        :type="item.type"
                        @click="add(item)"
                        effect="dark">
                        {{ item.label }}
                    </el-tag>
                </div>
            </div>
            <div class="row">
                <div class="label">结束符标签：</div>
                <div>
                    <el-tag
                        class="tag"
                        v-for="(item,index) in endItem"
                        :key="item.label+index"
                        :type="item.type"
                        @click="add(item)"
                        effect="dark">
                        {{ item.label }}
                    </el-tag>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'protocolSetting',
    components: {
    },
    data() {
        return{
            nowProtocol: '',
            editItem: [],
            headItem: [
                { type: 'success', label: '[H:数据]' , iptType: 1, text:'[H:', value: ''},
                { type: 'success', label: '[HE:数据]' , iptType: 1, text:'[HE:', value: ''},
            ],
            splitItem: [
                { type: 'info', label: '[S:数据]' , iptType: 1, text:'[S:', value: ''},
                { type: 'info', label: '[SE:数据]' , iptType: 1, text:'[SE:', value: ''},
                { type: 'info', label: '[SN[长度]]', iptType: 1, text:'[SN[' , value: '', iptText:']'},
                { type: 'info', label: '[S?]', text:'[S?' },
            ],
            dataItem: [
                { type: 'info', label: '[D?]' , text:'[D?'},
                { type: 'info', label: '[STR]', text:'[STR'},
                { type: 'info', label: '[D[长度]]', iptType: 1, text:'[D[', value: '', iptText:']' },
                { type: 'info', label: '[DE[长度]|数据]', iptType: 2, text:'[DE[', value1: '', value2: '' },
                { type: 'info', label: '[DEC[长度]|数据]', iptType: 2, text:'[DEC[', value1: '', value2: '' },
                { type: 'info', label: '[DF[长度]|数据]', iptType: 2, text:'[DF[', value1: '', value2: '' },
                { type: 'info', label: '[DSF[长度]|数据]', iptType: 2, text:'[DSF[', value1: '', value2: '' },
                { type: 'info', label: '[GPS]', text:'[GPS' },
            ], 
            endItem: [
                { type: 'warning', label: '[T:数据]', iptType: 1, text:'[T:' , value: ''},
                { type: 'warning', label: '[TE:数据]', iptType: 1, text:'[TE:', value: '' },
                { type: 'warning', label: '[CRC16]', text:'[CRC16' },
                { type: 'warning', label: '[CRC8]', text:'[CRC8' },
                { type: 'warning', label: '[回车换行]', text:'[回车换行'},
            ]
        }
    },
    mounted() {
    },
    methods: {
        deleteItem(index){
            this.editItem.splice(index,1);
        },
        add(item) {
            this.editItem.push(item);
        },
        saveProtocal() {
            let str =  '';
            this.editItem.forEach(item =>{
                if (item.iptType) {
                    if (item.iptType == 1) {
                        let iptText = item.iptText||'';
                        str += item.text + item.value + iptText + ']  '
                    } else if(item.iptType == 2) {
                        str += item.text + item.value1 + ']|' + item.value2 + ']  '
                    }
                } else {
                    str += item.label + '  '
                }
            })
            this.nowProtocol = str;
        }
    }
}
</script>
<style lang="scss" scoped>
.protocol-container{
    padding: 20px;
    .edit-tag{
        margin-right: 10px;
        margin-bottom: 10px;
        .icon-delete{
            cursor: pointer;
        }
    }
    .tag{
        margin-right: 10px;
        margin-bottom: 10px;
        cursor: pointer;
    }
    .ipt{
        width: 100px;
        height: 30px;
        line-height: 30px;
        ::v-deep{
            input{
                height: 20px;
                line-height: 20px;
            }
        }
    }
    .row{
        display: flex;
        margin-bottom: 10px;
        .label{
            margin-right: 10px;
            color: #909399;
            font-size: 14px;
            width: 120px;
        }
        .text{
            color: #909399;
            font-size: 14px;
        }
    }
}
</style>
