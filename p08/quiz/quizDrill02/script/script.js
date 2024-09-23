
function modalGo(id) {
    let imgId = id == "img1" ? "images/img_Stage.jpg" : "images/img_Flower.jpg";
    // let tag = "";
    let divEle = document.createElement('div');
    let imgEle = document.createElement('img');
    let closeX = document.createElement('span');

    divEle.id = "modal";
    imgEle.src = imgId
    closeX.id = "closeX"
    closeX.innerHTML = '&times;';

    divEle.appendChild(closeX);
    divEle.appendChild(imgEle);

    document.querySelector("#wrap").appendChild(divEle);
    // document.querySelector("#modal").appendChild(imgEle);
    // tag += "<img src='" + imgId + "' alt='' >";
    // tag += "<span id='closeX'>X<span>";
    // document.querySelector("#modal").innerHTML = tag;
    document.querySelector("#modal").style.display = "block";
    let closeBnt = document.querySelector("#closeX");

    closeBnt.addEventListener("click", function () {
        document.querySelector("#modal").remove();

    });
}