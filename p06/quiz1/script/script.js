let numAry = [];
let dom = document.querySelector("#bnt");
dom.addEventListener("click", function () {
    let sum = 0;
    for (i = 0; i < 4; i++) {
        numAry[i] = document.getElementById("in" + i).value;
        sum += parseInt(numAry[i]);
    }
    let avg = sum / numAry.length;
    console.log("입력한 배열 : " + numAry.toString());
    console.log("합계 : " + sum);
    console.log("평균 : " + avg.toFixed(1));
    console.log("오름차순 정렬 : " + numAry.sort((a, b) => a - b).toString());
    console.log("내림차순 정렬 : " + numAry.sort((a, b) => b - a).toString());
});