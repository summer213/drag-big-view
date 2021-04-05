<template>
    <div>
        <el-form label-width="70px" :model="form">
            <el-form-item label="标题">
                <el-input v-model="form.itemTitle"></el-input>
            </el-form-item>
            <el-form-item label="表头1">
                <el-input v-model="form.col1"></el-input>
            </el-form-item>
            <el-form-item label="表头2">
                <el-input v-model="form.col2"></el-input>
            </el-form-item>
            <el-button style="margin-bottom:20px">添加表头</el-button>
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
                col1: '',
                col2: ''
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