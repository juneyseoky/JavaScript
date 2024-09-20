function change() {
    let val = document.getElementById("cm").value;
    let inc = val / 2.54;
    document.getElementById("res").innerText = val + " cm = " + inc.toFixed(1) + " inch";
}