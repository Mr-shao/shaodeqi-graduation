<template>
	<div>
		<s-news></s-news>
		<!-- <side-bar></side-bar> -->
		<img-page></img-page>
		<nav-bar></nav-bar>
		<s-telephone></s-telephone>
		<s-about></s-about>
	</div>
</template>
<script>
import imgPage from './components/img-page.vue';
import sNews from './components/news.vue';
import navBar from './components/nav-bar.vue';
import sTelephone from './components/telephone.vue';
import sAbout from '../about/index.vue';
import sideBar from '../../common/components/side-bar.vue';
export default{
	components: {
		'imgPage': imgPage,
		'sideBar': sideBar,
		'sNews': sNews,
		'navBar': navBar,
		'sTelephone': sTelephone,
		'sAbout': sAbout
	}
};
</script>