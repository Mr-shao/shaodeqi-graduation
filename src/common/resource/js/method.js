// 获取cookie
let getCookie = function (name) {
    let arr = document.cookie.split(';');
    let cookieValue = '';
    arr.forEach((value, index) => {
        if (name === value.split('=')[0].trim()) {
            cookieValue = value.split('=')[1];
        }
    });
    return cookieValue;
};
// 设置cookie
let setCookie = function (key, value, days) {
    let time = days;
    time = time || 0; // time有值就直接赋值，没有为0，这个根php不一样。
    let date = new Date();
    if (time) {
        date.setTime(date.getTime() + (time * 24 * 60 * 60 * 1000));
        document.cookie = key + '=' + escape(value) + '; expires=' + date.toGMTString();
    } else {
        document.cookie = key + '=' + escape(value) + '; expires=Session';
    }
};
// 清除cookie
let clearCookie = function (name) {
    setCookie(name, '', -1);
};
let stopBubble = function (e) {
    // 如果提供了事件对象，则这是一个非IE浏览器
    if (e && e.stopPropagation) {
        // 因此它支持W3C的stopPropagation()方法
        e.stopPropagation();
    } else {
        // 否则，我们需要使用IE的方式来取消事件冒泡
        window.event.cancelBubble = true;
    }
};
let stopDefault = function (e) {
     // 阻止默认浏览器动作(W3C)
    if (e && e.preventDefault) {
        e.preventDefault();
    } else {
        // IE中阻止函数器默认动作的方式
        window.event.returnValue = false;
    }
    return false;
};
let number = 1;
let plusNumber = function () {
    number++;
};
export {
    getCookie,
    setCookie,
    clearCookie,
    stopBubble,
    stopDefault,
    number,
    plusNumber
};
