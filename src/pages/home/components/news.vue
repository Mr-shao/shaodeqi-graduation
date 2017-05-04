<template>
	<div class="ad pr20">
		<router-link class="pull-right" :to="adObj[adIndex].href">{{adObj[adIndex].title}}</router-link>
	</div>
</template>
<script>
export default {
	data () {
		return {
			adIndex: 0,
			adObj: [{
				title: '祝贺我校学员唐帅奇考入剑桥大学',
				href: ''
			},{
				title: '我校教师风采',
				href: '/teachers'
			},{
				title: '现加入好学生教育送价值1880课程',
				href: ''
			}]
		};
	},
	mounted () {
		let newsLength = this.adObj.length;
		let newsInterval = setInterval(() => {
			if (this.adIndex < newsLength - 1) {
				this.adIndex ++;
			} else {
				this.adIndex = 0;
			}
		}, 5000)
	}	
}
</script>
<style>
	.ad{
		line-height: 30px;
		height: 30px;
	}
</style>