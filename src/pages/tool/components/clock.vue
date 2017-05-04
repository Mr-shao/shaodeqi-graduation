<template>
    <div>
        <div class="clock clear"
            :style="{'left': clockL, 'top': clockT}" 
            @mousedown="mousedown" 
            @mouseup="mouseup" 
            :title="new Date()">
            <div class="col-xs-8 time">
                <span class="hour">{{ nowDate.getHours() | addZero }}:</span>
                <span class="minute">{{ nowDate.getMinutes() | addZero }}</span>
                <span class="second">{{ nowDate.getSeconds() | addZero }}</span>
            </div>
            <div class="col-xs-4 date">
                <div class="month">{{ options.month[nowDate.getMonth()] }}</div>
                <div class="day">{{ nowDate.getDate() | addZero }}</div>
                <div class="week">{{ options.week[nowDate.getDay()] }}</div>
            </div>
        </div>
    </div>
</template>
<script>
import {getCookie, setCookie} from '../../../common/resource/js/method.js';
export default{
    data () {
        return {
            clockL: getCookie('clockLeft') || '600px',
            clockT: getCookie('clockTop') || '200px',
            nowDate: new Date(),
            options: {
                week: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
                month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
            }
        };
    },
    created () {
        setInterval(() => {
            this.nowDate = new Date();
        }, 500);
    },
    methods: {
        mousedown (e) {
            var lastL = this.clockL;
            var lastT = this.clockT;
            document.onmousemove = (a) => {
                this.clockL = (parseInt(lastL) + a.clientX - e.clientX) + 'px';
                this.clockT = (parseInt(lastT) + a.clientY - e.clientY) + 'px';
            };
        },
        mouseup (e) {
            document.onmousemove = '';
            setCookie('clockLeft', this.clockL, 100);
            setCookie('clockTop', this.clockT, 100);
        }
    },
    filters: {
        addZero (num) {
            return (num < 10 ? '0' + num : num);
        }
    }
};
</script>
<style lang="scss" scoped>
    .clock{
        position: absolute;
        width: 310px;
        padding: 8px;
        border-radius: 10px;
        background: #222;
        box-shadow: 9px 9px 5px -5px #ccc;
    }
    .time{
        height: 90px;
        border-radius: 5px;
        background: #fff;
        .hour, .minute{
            font-size: 55px;
        }
        .second{
            opacity: 0.6;
        }
    }
    .date{
        text-align: center;
        height: 90px;
        color: #eee;
        .day{
            font-size:40px;
        }
        .month{
            text-align: left;
        }
        .week{
            text-align: right;
        }
    }
</style>