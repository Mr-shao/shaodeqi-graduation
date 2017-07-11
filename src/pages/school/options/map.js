import studentsList from './students.js';
import imgHaligong from '../image/haligong.png'

let planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
// let series = [];
let series = [{
    name: '哈尔滨理工大学',
    type: 'effectScatter',
    coordinateSystem: 'geo',
    zlevel: 2,
    rippleEffect: {
        scale: 1.6,
    },
    label: {
        normal: {
            show: true,
            position: 'right',
            formatter: '哈尔滨理工大学',
            textStyle: {
                color: '#fff'
            }
        }
    },
    symbol: 'image://' + imgHaligong,
    symbolSize: 22,
    data: [[126.616795, 45.713689]]
}];
let selected = {};
studentsList.forEach((obj) => {
    selected[obj.name] = true;
    series.push({
        name: obj.name,
        type: 'effectScatter',
        showEffectOn: 'emphasis',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}',
                textStyle: {
                    color: '#eee'
                }
            },
            emphasis: {
                textStyle: {
                    color: '#fff'
                }
            }
        },
        symbol: 'image://' + obj.data.image,
        symbolSize: 30,
        data: [{
            name: obj.name,
            value: obj.data.location.concat(obj.data.address, obj.data.telephone, obj.data.wechat, obj.data.qq, obj.data.image)
        }]

    },
    {
        name: 'line',
        type: 'lines',
        zlevel: 2,
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                color: '#eee',
                width: 1,
                opacity: 0.6,
                curveness: 0.2
            }
        },
        data: [{
            fromName: '哈尔滨理工大学',
            coords: [[126.616795, 45.713689], obj.data.location.slice(0, 2)]
        }]
    }
    )
});
let legendArr = function () {
    let arr = [];
    studentsList.forEach((val) => {
        arr.push(val.name)
    })
    return arr;
}


let option = {
    backgroundColor: '#ccc',
    // 标题设置
    title: {
        text: '哈理工电技13-3人员分布图',
        subtext: '邵德奇制作',
        sublink: 'http://atitle.cn',
        x:'center',
        textStyle: {
            color: '#000'
        },
        subtextStyle: {
            color: '#333'
        },
        top: 22
    },
    // toolbox: {
    //     show: true,
    //     bottom: 20,
    //     left: 20,
    //     feature: {
    //         saveAsImage: {
    //             type: 'png'
    //         },
    //         restore: {},
    //         dataView: {},
    //     }
    // },
    // 悬浮提示文字
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            if (params.seriesName === '哈尔滨理工大学' || params.componentSubType === 'lines') {
                return
            } else {
                return `<div>
                            <img src="${params.value && params.value[6]}" height="105px" style="float:left; padding-right: 4px"></img>
                            <div style="float: right">
                                <b>${params.seriesName}</b>
                                <div>地址:${params.value && params.value[2]}</div>
                                <div>电话:${params.value && params.value[3]}</div>
                                <div>微信:${params.value && params.value[4]}</div>
                                <div>QQ:${params.value && params.value[5]}</div>
                            </div>
                        </div>`;
            }
        }
    },
    // 地图基础组件
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: true,
                textStyle: {
                    color: '#2c5'
                }
            }
        },
        // 支持缩放
        roam: false,
        scaleLimit: {
            min: 0.5,
            max: 6
        },
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    // 右侧数据说明
    legend: {
		show: true,
        orient: 'vertical',
        top: 22,
        left: 22,
        data: legendArr(),
        itemGap: 12,
        itemHeight: 15,
        itemWidth: 15,
        textStyle: {
            color: '#000',
            fontSize: 15
        },
        tooltip: {
            show: true,
        },
        selectedMode: 'multiple',
        selected: selected
    },
    series: series
}
export default option;