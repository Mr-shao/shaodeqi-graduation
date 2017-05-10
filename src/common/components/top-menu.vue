<template>
	<div class="top-menu">
	    <el-menu style="" theme="" class="el-menu-demo bor-bottom" :router="true" mode="horizontal">
	        <el-menu-item index="home" :class="{'is-phone': !IsPC}">
	        	<img src="../resource/img/domain.png" width="140" alt="">
        	</el-menu-item>
	        <el-menu-item index="home">
	        	<span :class="{'is-phone': !IsPC}">首页</span>
        	</el-menu-item>
	        <el-menu-item index="tool">
	        	<span :class="{'is-phone': !IsPC}">工具桌面</span>
	        </el-menu-item>
	        <el-menu-item index="student">
	        	<span :class="{'is-phone': !IsPC}">家长/学生入口</span>
	        </el-menu-item>
	        <el-menu-item index="teacher">
	        	<span :class="{'is-phone': !IsPC}">教师入口</span>
	        </el-menu-item>
	        <el-menu-item index="about">
	        	<span :class="{'is-phone': !IsPC}">关于我们</span>
	        </el-menu-item>
	        <!-- <el-menu-item index="contact"><span></span>联系我们</el-menu-item> -->
        	<el-menu-item index="">
        		<a href="contact" style="text-decoration: none">
        			<span :class="{'is-phone': !IsPC}">联系我们</span>
        		</a>
    		</el-menu-item>
	    </el-menu>
	</div>
</template>
<script>
import { IsPC } from '../../common/resource/js/method.js';
    export default{
    	data () {
    		return {
    			IsPC: IsPC()
    		};
    	},
        methods: {
            handleSelect () {
                return;
            }
        }
    };
</script>
<style scoped lang="scss">
	@media screen and (max-width: 815px) {
	    .top-menu {
	        img{
	        	display: none;
	        }
	    }
	}
	.is-phone{
		img{
        	display: none;
        }
    	font-size: 26px;
    	font-weight: bold;
    }
</style>