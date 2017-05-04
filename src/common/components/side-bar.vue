<template>
	<!-- <div class="col-md-2 padding0" style="background-color: #eef1f6; height: 500px"> -->
	<div class="col-md-2 col-sm-2 padding0 bor-right">
		<el-row class="tac">
		  <el-col>
		    <el-menu default-active="2" class="el-menu-vertical-demo" :router="true">
		      <el-submenu index="1">
		        <template slot="title"><i class="el-icon-message"></i>最新活动</template>
		        <el-menu-item-group>
		          <template slot="title">校内活动</template>
		          <el-menu-item index="1-1">我校喜讯</el-menu-item>
		          <el-menu-item index="1-2">最新优惠</el-menu-item>
		        </el-menu-item-group>
		        <el-menu-item-group title="校外活动">
		          <el-menu-item index="1-3">课外实践</el-menu-item>
		          <el-menu-item index="1-3">师生风采</el-menu-item>
		        </el-menu-item-group>
		      </el-submenu>
		      <el-menu-item index="10"><i class="el-icon-menu"></i>找家教</el-menu-item>
		      <el-menu-item index="9"><i class="el-icon-edit"></i>学生成长</el-menu-item>
		      <el-menu-item index="teachers"><i class="el-icon-search"></i>师资力量</el-menu-item>
		      <el-menu-item index="3"><i class="el-icon-setting"></i>加入我们</el-menu-item>
		    </el-menu>
		  </el-col>
		</el-row>
	</div>
</template>
<script>
import sSignature from './signature.vue';
export default {
};
</script>