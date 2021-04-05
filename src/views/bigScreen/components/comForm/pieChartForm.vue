<template>
    <div>
        <el-form label-width="70px" :model="form">
            <el-form-item label="标题">
                <el-input v-model="form.itemTitle"></el-input>
            </el-form-item>
            <el-form-item label="图表标题">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="圆环半径">
                内半径：
                <el-input v-model="form.inradius">
                    <template slot="append">%</template>
                </el-input>外半径：
                <el-input v-model="form.outradius">
                    <template slot="append">%</template>
                </el-input>
            </el-form-item>
            <el-form-item label="设备项">
                <div v-for="(item, index) in form.itemList" :key="index">
                    <el-row>项目{{index+1}}</el-row>
                    <el-row style="margin:10px 0 0 0">
                        <el-col :span="6">名称:</el-col>
                        <el-col :span="18">
                            <el-input v-model="item.label"></el-input>
                        </el-col>
                    </el-row>
                    <el-row style="margin:10px 0 0 0">
                        <el-col :span="6">颜色:</el-col>
                        <el-col :span="18">
                            <el-input v-model="item.color"></el-input>
                        </el-col>
                    </el-row>
                </div>
                <el-button @click="addItem" style="margin:20px 0 0 0">添加项</el-button>
            </el-form-item>
        </el-form>
        <el-button type="primary" @click="save">保存</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return{
            form: {
                itemTitle: '',
                title: '',
                inradius: '',
                outradius: '',
                itemList: [
                    {
                        label: '',
                        color: ''
                    }
                ]
            }
        }
    },
    methods: {
        addItem() {
            this.form.itemList.push(
                    {
                        color: '',
                        label: ''
                    })
        },
        save() {
            this.$emit('updateForm', this.form)
        }
    }
};
</script>

<style>
</style>