<template>
	<div class="clear wrapper">
		<div class="nav-router col-sm-3">
			<router-link to="/teachers">
				<img style="width: 100%" src="../../../common/resource/img/n1.jpg" alt="">
			</router-link>
			<h2 class="word">师资力量</h2>
		</div>
		<div class="nav-router col-sm-3">
			<router-link to="/action">
				<img style="width: 100%" src="../../../common/resource/img/n2.jpg" alt="">
			</router-link>
			<h2 class="word">最新活动</h2>
		</div>
		<div class="nav-router col-sm-3">
			<router-link to="/teacher">
				<img style="width: 100%" src="../../../common/resource/img/n3.jpg" alt="">
			</router-link>
			<h2 class="word">我要做老师</h2>
		</div>
		<div class="nav-router col-sm-3">
			<router-link to="/student">
				<img style="width: 100%" src="../../../common/resource/img/n4.jpg" alt="">
			</router-link>
			<h2 class="word">我要找家教</h2>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	$theme-color: #eef1f6 !default;
	.wrapper{
		position: relative;
	}
	.nav-router img{
	    transition: all 0.5s ease 0s;
	    opacity: 0.5;
	    border-radius: 20px;
		&:hover{
		    opacity: 1;
			z-index: 99;
			transform: scale(1.1, 1.1);
		}
	}
	.word{
		// position: absolute;
		text-align: center;
		z-index: 100;
	}
</style>