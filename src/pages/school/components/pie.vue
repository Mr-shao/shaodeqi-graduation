<template>
<div>
    <div ref="echars" style="height: 400px; width: 100%; float: left;">
    </div>
    <div class="clear"></div>
</div>
    
</template>
<script>
import echarts from 'echarts';

import '../../../common/resource/js/china.js';
import option from '../options/pie.js';
import studentsList from '../options/students.js';

let myChart;
export default{
	data () {
		return {
		};
	},
	mounted () {
        myChart = echarts.init(this.$refs.echars);
		// 基于准备好的dom，初始化echarts实例
		// 绘制图表
		myChart.setOption(option);	
	},
    computed: {
    },
    watch: {
    }
};
</script>
<style scoped>
</style>