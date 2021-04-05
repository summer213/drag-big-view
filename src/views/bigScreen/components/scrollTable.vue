<template>
    <dv-scroll-board :config="config" style="width:100%;height:calc(100% - 30px)" />
</template>

<script>
export default {
    data() {
        return{
            config: {},
        }
    },
    props: {
        chartOpt: {
            type: Object,
            default: () => {
                return {
                    col1: '',
                    col2: ''
                }
            }
        }
    },
    watch: {
        chartOpt(val) {
            console.log(val, 9999)
            this.init();
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.config = { 
                headerBGC: '#121E49',
                oddRowBGC: '#031C41',
                evenRowBGC: '#152D77',
                header: [this.chartOpt.col1||'日期', this.chartOpt.col2||'备注'],
                data: [
                    ['2021-4-1', 'xx异常1'],
                    ['2021-4-1', 'xx异常2'],
                    ['2021-4-1', 'xx异常3'],
                    ['2021-4-1', 'xx异常4'],
                    ['2021-4-1', 'xx异常5'],
                    ['2021-4-1', 'xx异常6'],
                    ['2021-4-1', 'xx异常7'],
                    ['2021-4-1', 'xx异常8'],
                    ['2021-4-1', 'xx异常9'],
                    ['2021-4-1', 'xx异常10']
                ]
            }
        }
    }
}
</script>

<style>

</style>