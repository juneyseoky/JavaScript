function calc() {
    let res = "";
    let goods = document.querySelector("select#goods").value;
    let price = document.querySelector("select#price").value;
    let count = document.querySelector("select#count").value;
    if (goods == "none") {
        res = "상품을 선택하세요";
    } else if (price == "none") {
        res = "가격을 선택하세요";
    } else if (count == "none") {
        res = "수량을 선택하세요";
    } else {
        res = goods + " " + count + "개 " + (price * count) + " 원";
    }

    document.getElementById("res").innerText = res;
}