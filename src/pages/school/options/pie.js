import studentsList from './students.js';


let pieData = function () {
    let arr = [];
    let obj = {};
    studentsList.forEach((val) => {
        let arr1 = [];
        if (obj[val.data.province]) {
            obj[val.data.province].value++;
            obj[val.data.province].people.push(val.name);
        } else {
            obj[val.data.province] = {
                name: val.data.province,
                value: 1,
                people: [val.name]
            };
        }

    });
    for (let item in obj) {
        arr.push(obj[item]);
    }
    return arr;
};

let series = [];
series.push({
    name: 'pie',
    type: 'pie',
    zlevel: 2,
    z: 10,
    rippleEffect: {
        brushType: 'stroke'
    },
    label: {
        normal: {
            show: true,
            position: 'outside',
            formatter: function (val) {
                return val.name +'(' + val.data.people.length + '人)';
            },
            textStyle: {
                color: '#000',
                fontSize: 20
            }
        },
        emphasis: {
            show: true,
            formatter: function (val) {
                return val.data.people;
            },
            textStyle: {
                color: '#0af',
                fontSize: 20
            }
        }
    },
    symbolSize: 22,
    data: pieData()

})

let option = {
    backgroundColor: '#ccc',
    // 标题设置
    title: {
        text: '省份分布图',
        // subtext: '邵德奇制作',
        sublink: 'http://atitle.cn',
        x:'center',
        textStyle: {
            color: '#000'
        },
        subtextStyle: {
            color: '#333'
        }
    },
    series: series
}
export default option;