<template>
	<div>
		<h1>企业简介：</h1>
		<about-us></about-us>
		<h1>企业介绍视频：</h1>
		<div class="text-center">
			<video width="60%" controls autoplay :src="videoSrc"></video>
		</div>
	</div>
</template>
<script>
import aboutUs from './components/about.vue';

export default{
	data () {
		return {
			videoSrc: "http://hc.yinyuetai.com/uploads/videos/common/E695015C9B064DC312CA5532B83EC102.mp4?sc=41248c5402a7795b"
		};
	},
	components: {
		aboutUs
	}
};
</script>
<style lang="scss" scoped>
.player{
	margin: 0 auto;

}
</style>