let text = document.querySelector("div#ref").innerText;
let output = document.querySelector("div#output");

function func1() {
    document.querySelector("div#output").innerText = text;
    output.style.fontWeight = "normal";
    output.style.border = "1px solid #000";
}

function func2() {
    func1();
    output.style.fontWeight = "bold";
    output.style.border = "2px solid #f80";
}