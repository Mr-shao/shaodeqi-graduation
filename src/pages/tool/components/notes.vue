<template>
    <div class="paper-label"
        :style="{'left': labelL, 'top': labelT}"  
        @mousedown="mousedown" 
        @mouseup="mouseup">
        <textarea @mousedown="textareaDown"
            @keydown.tab="keyTab"
            v-model="labelText"
            @blur="labelBlur">    
        </textarea>
        <span class="pull-right" style="font-size: 10px">便利签</span>
    </div>
</template>
<script>
import { getCookie, setCookie, stopBubble, stopDefault } from '../../../common/resource/js/method.js';
export default {
    data () {
        return {
            labelL: getCookie('labelLeft') || '600px',
            labelT: getCookie('labelTop') || '400px',
            labelText: unescape(getCookie('labelText')) || ''
        };
    },
    methods: {
        textareaDown () {
            stopBubble();
        },
        mousedown (e) {
            var lastL = this.labelL;
            var lastT = this.labelT;
            document.onmousemove = (a) => {
                this.labelL = (parseInt(lastL) + a.clientX - e.clientX) + 'px';
                this.labelT = (parseInt(lastT) + a.clientY - e.clientY) + 'px';
            };
        },
        mouseup (e) {
            document.onmousemove = '';
            setCookie('labelLeft', this.labelL, 100);
            setCookie('labelTop', this.labelT, 100);
        },
        labelBlur () {
            setCookie('labelText', this.labelText, 100);
        },
        keyTab (e) {
            stopDefault(e);
            this.labelText += '    ';
        }
    }
};
</script>
<style lang="scss" scoped>
    .paper-label{
        position: absolute;
        width: 250px;
        height: 250px;
        padding: 10px;
        background: #C9CC1B;
        font-size: 20px;
        box-shadow: 9px 9px 5px -5px #ccc;
        .icon-info{
            font-size: 14px;
            opacity: 0.6;
            color: #333;
        }
    }
    textarea{
        height: 215px;
        background: #C9CC1B;
    }
</style>