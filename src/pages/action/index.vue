<template>
<div>
	<h2>校内活动:</h2>
	<div class="bordered">
		<div class="action" :style="{height: extend1 ? `${4 * 50}px` : `${actionList.length * 50}px` }">
			<p v-for="action in actionList" class="bor-bottom-dashed p10 m10">
				<a :href="action.href">
					{{action.name}}
					<span class="pull-right">{{action.date}}</span>
				</a>
			</p>
		</div>
		<p class="text-center"><a @click="extend1 = !extend1">{{extend1 ? '查看更多⇣' : '收起⇡'}}</a></p>
	</div>
	<h2>校外拓展:</h2>
	<div class="bordered">
		<div class="action" :style="{height: extend2 ? `${3 * 50}px` : `${actionList.length * 50}px` }">
			<p v-for="action in actionList" class="bor-bottom-dashed p10 m10">
				<a :href="action.href">
					{{action.name}}
					<span class="pull-right">{{action.date}}</span>
				</a>
			</p>
		</div>
		<p class="text-center"><a @click="extend2 = !extend2">{{extend2 ? '查看更多⇣' : '收起⇡'}}</a></p>
	</div>
</div>
</template>
<script>
export default {
	data () {
		return {
			extend1: true,
			extend2: true,
			actionList: [
				{
					name: '学习雷锋做好事',
					href: 'https://baidu.com',
					date: '2017-06-25'
				},
				{
					name: '成功举办了编程大赛',
					href: 'www.baidu.com',
					date: '2017-06-25'
				},
				{
					name: '大学生电子设计竞赛落下帷幕',
					href: 'www.baidu.com',
					date: '2017-06-25'
				},
				{
					name: '学习雷锋做好事',
					href: 'www.baidu.com',
					date: '2017-06-25'
				},
				{
					name: '我校学生成为省状元',
					href: 'www.baidu.com',
					date: '2017-06-25'
				},
				{
					name: '学习雷锋做好事',
					href: 'www.baidu.com',
					date: '2017-06-25'
				},
				{
					name: '学习雷锋做好事',
					href: 'www.baidu.com',
					date: '2017-06-25'
				},
				{
					name: '学习雷锋做好事',
					href: 'www.baidu.com',
					date: '2017-06-25'
				},
				{
					name: '学习雷锋做好事',
					href: 'www.baidu.com',
					date: '2017-06-25'
				},
				{
					name: '学习雷锋做好事',
					href: 'www.baidu.com',
					date: '2017-06-25'
				},
				{
					name: '学习雷锋做好事',
					href: 'www.baidu.com',
					date: '2017-06-25'
				},
				{
					name: '学习雷锋做好事',
					href: 'www.baidu.com',
					date: '2017-06-25'
				},
				{
					name: '学习雷锋做好事',
					href: 'www.baidu.com',
					date: '2017-06-25'
				},
				{
					name: '学习雷锋做好事',
					href: 'www.baidu.com',
					date: '2017-06-25'
				}
			]
		};
	}
};
</script>
<style scoped>
	.action{
		overflow: hidden;
		transition: all 0.5s ease-in-out;
	}
</style>

