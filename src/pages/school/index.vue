<template>
    <div v-if="!loginFlag" style="display: flex">
        <div id="login" class="p20" style="margin: auto">
            <p>请输入电技13-3验证信息</p>
            <input type="text" v-model="loginNum" @keyup.enter="login" class="pull-left" style="width: 60%">
            <button class="btn btn-primary" @click="login">进入</button>
        </div>
	</div>
	<div v-else class="p10">
        <s-map></s-map>
        <s-pie></s-pie>
        <s-list></s-list>
        <s-imgpage></s-imgpage>
        <div id="comment">
            <s-comment></s-comment>
        </div>
	</div>
</template>
<script>
import sMap from './components/map.vue';
import sPie from './components/pie.vue';
import sList from './components/list.vue';
import sImgpage from './components/img-page.vue';
import sComment from '../../common/components/comment.vue';
import { getCookie, setCookie } from '../../common/resource/js/method.js';


export default{
	data () {
		return {
            loginFlag: false,
            loginNum: ''
		};
	},
	created () {
        if (getCookie('_gocumeyuiasd') && getCookie('_gocumeyuiasd') === 'sddgasdhjkasdion') {
            this.loginFlag = true;
        }
	},
    methods: {
        login () {
            if (this.loginNum === '1312020300') {
                this.loginFlag = true;
                setCookie('_gocumeyuiasd', 'sddgasdhjkasdion', 100);
            } else {
                this.$message('验证内容不对哦');
            }
        }
    },
    components: {
        sMap,
        sPie,
        sList,
        sImgpage,
        sComment
    }
};
</script>
<style scoped>
    #comment{
        padding: 60px 40px;
    }
    #login{
        /*flex: 1;*/
        justify-content: center;
        align-items: center;
    }
</style>