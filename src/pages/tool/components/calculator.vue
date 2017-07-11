<template>
    <div class="calculator clear" 
        :style="{'left': calculatorL, 'top': calculatorT}" 
        @mousedown="mousedown"
        @mouseup="mouseup">
        <div class="col-xs-12 mt10 bor-bottom clear">
            <textarea class="screen" 
                @keyup.enter="inp('=')" 
                v-model="text"
                @mousedown=" textareaDown "
                >
            </textarea>
            <label class="pull-right msg mt5 text-danger">{{ msg }}</label>
            <span 
                :class="keyFlag === true ? 'icon-minus-circle' : 'icon-plus-circle'" 
                class="ml5 calculator-icon" 
                @click="keyFlag = !keyFlag">
            </span>
        </div>
        <div class="col-xs-12 keyboard clear" 
        :style="{height: keyFlag ? '250px' : 0}">
            <div class="col-xs-3" v-for="(item, index) in btns">
                <button 
                    class="btn" 
                    :class=" index <= 10 ? 'btn-primary' : 'btn-warning'" 
                    @click="inp(item)">{{ item }}
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import { getCookie, setCookie, stopBubble } from '../../../common/resource/js/method.js';
export default {
    data () {
        return {
            calculatorL: getCookie('calculatorLeft') || '100px',
            calculatorT: getCookie('calculatorTop') || '200px',
            keyFlag: true,
            btns: ['1', '2', '3', '0', '4', '5', '6', '.', '7', '8', '9', '=', 'x', '÷', '-', '+', '(', ')', '⟵', '清零'],
            text: '',
            msg: '可在键盘输入'
        };
    },
    methods: {
        inp (value) {
            switch (value) {
                case '清零':
                    this.text = this.msg = '';
                    break;
                case '⟵':
                    this.msg = '可在键盘输入';
                    this.text = this.text.substr(0, this.text.length - 1);
                    break;
                /*eslint-disable*/
                case '=':
                    if (this.text !== '') {
                        try {
                            this.text = window.eval(this.text.replace('x', '*').replace('÷', '/').replace('）', ')').replace('（', '('))+'';
                        } catch (e) {
                            this.msg = '提示:语法错误';
                        }
                    }
                    break;
                /*eslint-enable*/
                default:
                    this.text += value;
                    break;
            }
        },
        textareaDown () {
            stopBubble();
        },
        mousedown (e) {
            var lastL = this.calculatorL;
            var lastT = this.calculatorT;
            document.onmousemove = (a) => {
                this.calculatorL = (parseInt(lastL) + a.pageX - e.pageX) + 'px';
                this.calculatorT = (parseInt(lastT) + a.pageY - e.pageY) + 'px';
            };
        },
        mouseup (e) {
            document.onmousemove = (a) => {
                document.onmousemove = '';
            };
            setCookie('calculatorLeft', this.calculatorL, 100);
            setCookie('calculatorTop', this.calculatorT, 100);
        }
    }
};
</script>
<style lang="scss" scoped>
    .calculator{
        position: absolute;
        padding: 5px;
        width: 275px;
        border: 2px solid #383D56;
        border-radius: 10px;
        background: rgb(54,133,144);
        box-shadow: 9px 9px 5px -5px #ccc;
    }
    .screen{
        width: 258px;
        height:60px;
        margin: 2px;
        border-radius: 2px;
        box-shadow: 0 3px 3px -2px rgba(0,0,0,0.75);
        background: #DBF0BA;
    }
    .msg{
        width: 100px;
        text-align: center;
        margin-right: 2px;
        height: 20px;
        line-height: 20px;
        background: #BACCC3;
    }
    div[class^="col-xs-"]{
        padding-left: 0;
        padding-right: 0;
    }
    .keyboard{
        transition: all 1s ease-in-out;
        overflow: hidden;
    }
    .btn{
        width:60px;
        height:40px;
        margin: 2px;
        box-shadow: 0 3px 3px -2px rgba(0,0,0,0.75);
    }
    .btn-max{
        width:125px;
    }
</style>