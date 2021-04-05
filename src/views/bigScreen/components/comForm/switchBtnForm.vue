<template>
    <div>
        <el-form label-width="70px" :model="form">
            <el-form-item label="开关指令内容">
                <el-input
                    v-model="form.send"
                    type="textarea"
                    :autosize="{ minRows: 5, maxRows: 6}"></el-input>
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
                send: ''
            }
        }
    },
    methods: {
        save() {
            this.$emit('updateForm', this.form)
        }
    }
};
</script>

<style>
</style>