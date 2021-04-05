<template>
    <dv-capsule-chart :config="config" style="width:100%;height:calc(100% - 30px)" />
</template>

<script>
export default {
    data() {
        return{
            config: {},
        }
    },
    mounted() {
        this.config = {
            unit: '℃',
            colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
            data: [
                {
                    name: '设备一',
                    value: 167
                },
                {
                    name: '设备二',
                    value: 67
                },
                {
                    name: '设备三',
                    value: 123
                },
                {
                    name: '设备四',
                    value: 55
                },
                {
                    name: '设备五',
                    value: 98
                }, 
            ]
        }
    }
}
</script>

<style>

</style>