const a = document.getElementById("txt");

function fnType() {
    document.querySelector("#res").innerText = typeof (a.value);
}