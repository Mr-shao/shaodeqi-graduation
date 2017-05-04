<template>
	<div>
	    <el-menu style="" theme="" class="el-menu-demo bor-bottom" :router="true" mode="horizontal">
	        <el-menu-item index="home">
	        	<img src="../resource/img/domain.png" width="140" alt="">
        	</el-menu-item>
	        <el-menu-item index="home">首页</el-menu-item>
	        <el-menu-item index="tool">工具桌面</el-menu-item>
	        <el-submenu index="3">
	            <template slot="title">入口</template>
	            <el-menu-item index="student">我要找家教</el-menu-item>
	            <el-menu-item index="teacher">我要做家教</el-menu-item>
	        </el-submenu>
	        <el-menu-item index="about">关于我们</el-menu-item>
	        <el-menu-item index="contact">联系我们</el-menu-item>
	    </el-menu>
	</div>
</template>
<script>
    export default{
        methods: {
            handleSelect () {
                return;
            }
        }
    };
</script>