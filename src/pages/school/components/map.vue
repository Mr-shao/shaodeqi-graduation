<template>
	<div>
		<div ref="echarts" style="height: 700px; width: 100%">
        </div>
        <div style="position: absolute; left: 25px; transform: translateY(-300%)">
            <el-switch v-model="displayRoute"></el-switch>
            <span>迁移路径</span>
            &nbsp;&nbsp;
            <el-switch v-model="selectAll"></el-switch>
            <span>{{selectAll ? '全不选' : '全选'}}</span>
            &nbsp;&nbsp;
            <el-switch v-model="mapRoam"></el-switch>
            <span>地图缩放</span>
        </div>
	</div>
</template>
<script>
import echarts from 'echarts';

import '../../../common/resource/js/china.js';
import mapOption from '../options/map.js';
import studentsList from '../options/students.js';

let myChart;
export default{
	data () {
		return {
            displayRoute: true,
            selectAll: true,
            mapRoam: false
		};
	},
	mounted () {
        myChart = echarts.init(this.$refs.echarts);
		// 基于准备好的dom，初始化echarts实例
		// 绘制图表
		myChart.setOption(this.option);	
	},
    computed: {
        option () {
            if (this.displayRoute) {
                return mapOption;
            } else {
                let option1 = Object.assign({}, mapOption);
                option1.series = option1.series.filter((obj) => {
                    return obj.name !== 'line';
                });
                return option1;
            }
        }
    },
    watch: {
        displayRoute () {
            myChart.setOption(this.option, true);
        },
        selectAll () {
            for (let item in this.option.legend.selected) {
                this.option.legend.selected[item] = !this.option.legend.selected[item];
            };
            myChart.setOption(this.option, true);
        },
        mapRoam () {
            this.option.geo.roam = !this.option.geo.roam;
            myChart.setOption(this.option, true);
        }
    }
};
</script>
<style scoped>
 
</style>