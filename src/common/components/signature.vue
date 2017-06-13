<template>
	<div v-if="svgShow">
		<svg width="200" height="200" viewBox="0 0 350 350">
  			 <path id="svg_2" d="m21.5,35.4c-14,5 32,-16 47,-11c15,5 -22,35 -22.5,34.6c0.5,0.4 -7.5,-17.6 -3.5,-19.6c4,-2 -15,31 -24,31c-9,0 22,15 18,22c-4,7 -3,-23 6,-27c9,-4 22,4 16,15c-6,11 14,-38 16,-38c2,0 26,-5 22,4c-4,9 -16,18 -16.5,17.6c0.5,0.4 4.5,-3.6 14.5,3.4c10,7 1,17 -4,20c-5,3 -12,5 -13,4c-1,-1 -4,-18 -4.5,-18.4c0.5,0.4 -2.5,-15.6 0.5,-15.6c3,0 3,91 -1,97" stroke-width="2" stroke="#000" fill-opacity="0" :stroke-dasharray="dashArray" :stroke-dashoffset="dashOffset" ref="svgPath"/>
		</svg>

		<!-- :stroke-dasharray="dashArray" :stroke-dashoffset="dashOffset" ref="svgPath" fill-opacity="#fff"-->
	</div>
</template>
<script>
export default{
	data () {
		return {
			dashArray: 0,
			dashOffset: 540,
			svgShow: true
		};
	},
	mounted () {
		let pathLength = this.$refs.svgPath.getTotalLength();
		this.dashArray = pathLength;
		this.dashOffset = 0;
		// 自动删除
		// setTimeout(() => {
		// 	this.svgShow = false;
		// }, 10000)
	}
};
</script>
<style>
path{
	transition: stroke-dashoffset 6s ease 1s;
}
</style>