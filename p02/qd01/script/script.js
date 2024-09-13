function fn1(a, b) {
    let res = b / a * 100;
    document.querySelector('#res').innerText = res.toFixed(1) + "%";
}