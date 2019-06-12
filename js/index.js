framework1.onclick = function () {

    workBar.className = 'bar-inner state-1'
}
framework2.onclick = function () {

    workBar.className = 'bar-inner state-2'
}
framework3.onclick = function () {

    workBar.className = 'bar-inner state-3'
}

weixinBar.onmousemove = function () {
    let obj = this.getBoundingClientRect()
    if (obj.y < 76) {
        weixinImg.style.top = '80px';
    } else {
        weixinImg.style.top = '-80px';

    }
    weixinImg.style.display = 'block';

}
weixinBar.onmouseleave = function () {
    weixinImg.style.display = 'none';

}
qqBar.onmousemove = function () {
    let obj = this.getBoundingClientRect()
    if (obj.y < 76) {
        qqImg.style.top = '80px';
    } else {
        qqImg.style.top = '-80px';

    }
    qqImg.style.display = 'block'
}
qqBar.onmouseleave = function () {
    qqImg.style.display = 'none'
}

zhifubaoBar.onmousemove = function () {
    let obj = this.getBoundingClientRect()
    if (obj.y < 76) {
        zhifubaoImg.style.top = '80px';
    } else {
        zhifubaoImg.style.top = '-80px';

    }
    zhifubaoImg.style.display = 'block'
}
zhifubaoBar.onmouseleave = function () {
    zhifubaoImg.style.display = 'none'
}