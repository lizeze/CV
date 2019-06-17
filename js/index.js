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

window.onscroll = function () {

    if (window.scrollY > 100) {
        topNavBar.classList.add('sticky')
    } else
        topNavBar.classList.remove('sticky')

}


let navItems = document.querySelectorAll('#topNavBar nav ul li a');
for (let i = 0; i < navItems.length; i++) {

    navItems[i].onclick = function (e) {
        e.preventDefault();
        let href = e.target.getAttribute('href');
        let element = document.querySelector(href);
        let top = element.offsetTop;
        let currentTop = window.scrollY;
        let targetTop = top - 80;

        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }

        requestAnimationFrame(animate);

        const coords = {y: currentTop};
        let s = Math.abs((targetTop - currentTop) / 100 * 300);
        console.log(s)
        const tween = new TWEEN.Tween(coords)
            .to({y: targetTop}, s >= 500 ? 500 : s)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(() => {
                window.scroll(0, coords.y)

            })
            .start(); // Start the tween immediately

    }
}