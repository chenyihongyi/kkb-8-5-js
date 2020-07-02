var plus = document.querySelectorAll('.plus');
var minus = document.querySelectorAll('.minus');
var ns = document.querySelectorAll('.n');
var price = document.querySelectorAll('.price');
var count = document.querySelectorAll('.strong');

var len = ns.length;

//批量元素添加事件
for (var i = 0; i < len; i++) {
    todo(i);
}

function todo(index) {
    //控制+号
    plus[index].onclick = function () {
        changeNum(index, +1);
    }
    //控制-号
    minus[index].onclick = function () {
        changeNum(index, -1);
    }
}

//控制数量变化的封装函数 , index指的是下标,change指的是加还是减
function changeNum(index, change) {
    var num = +ns[index].innerHTML + change;
    switch (true) {
        case num > 10;
            alert('最大限购10件');
            num = 10;
            return;
        case num < 0;
            alert('已经不能再少了哦');
            num = 0;
            return;
    }
    ns[index].innerHTML = num;
    count[index].innerHTML = num * (price[index].innerHTML * 10) / 10;
    total();
}

//求总数
function total() {
    //总件数
    var subTotal = 0;
    //总花费
    var numTotal = 0;
    //找到已选商品中，单价最高的
    var max = 0;
    for (var i = 0; i < len; i++) {
        subTotal += +ns[i].innerHTML;
        numTotal += +count[i].innerHTML;
        if (ns[i].innerHTML != 0) {
            console.log(price[i].innerHTML);
            max = price[i].innerHTML > max ? price[i].innerHTML : max;
        }
    }
    strong[0].innerHTML = subTotal;
    strong[1].innerHTML = numTotal;
    strong[2].innerHTML = max;
}