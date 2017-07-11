<template>
<div>
    <div :style="{height: isExtend ? 50 * (list.length + 1) + 'px': 0}" style="overflow: hidden; transition: all 2s ease-in-out">
        <table class="table">
            <thead>
                <tr>
                    <td>序号</td>
                    <td>姓名</td>
                    <td width="30%">地址</td>
                    <td>电话</td>
                    <td>微信</td>
                    <td>QQ</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item, index in list">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.data.address }}</td>
                    <td>{{ item.data.telephone }}</td>
                    <td>{{ item.data.wechat }}</td>
                    <td>{{ item.data.qq }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div @click="changeExtend" class="text-center p10" style="background: #ccc">
        <a><h2>{{isExtend ? '收起数据列表⬆' : '展开数据列表⬇︎' }}</h2></a>
    </div>
</div>
</template>
<script>
import studentsList from '../options/students.js';

export default{
	data () {
		return {
            list: studentsList,
            isExtend: false
		};
	},
    methods: {
        changeExtend () {
            this.isExtend = !this.isExtend;
        }
    }
};
</script>
<style scoped>
a:hover{
    cursor: pointer;
}
</style>