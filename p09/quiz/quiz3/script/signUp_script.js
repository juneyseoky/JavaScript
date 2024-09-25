let inArea = document.querySelectorAll("div.inputArea");
inArea[3].style.width = "470px";

function accountChkOpen(userId) {
    let chkRes = chkIdValidation(userId);
    if (!chkRes) {
        return
    }
    let scrWid = screen.width;
    let scrHei = screen.height;
    let wid = 400;
    let hei = 300
    let url = `../accountChk.html?userId=${userId}`;
    let winName = "아이디 중복체크 창"
    let attr = `id=${userId},
                width=${wid},
                height=${hei}, 
                left=${(scrWid - wid) / 2}, 
                top=${(scrHei - hei) / 2}
                `;
    window.open(url, winName, attr);
}

function chkIdValidation(userId) {
    let chkReg = /[^a-z|A-Z|0-9]/;
    let res;
    if ((userId.length < 6 && userId.length > 1) || (userId.length > 20)) {
        alert("ID는 6 ~ 20자리로 만들어야 합니다.")
        res = false;
        return res;
    }
    if (chkReg.test(userId)) {
        alert("영어와 숫자만 입력가능")
        res = false;
    } else if (userId == "") {
        alert("아이디를 입력하세요")
        res = false;
    } else {
        alert("OK!!!")
        res = true;
    }


    return res;
}
function passVali() {
    let userPass = document.querySelector("#passChk").value;
    let chkReg = /[^a-z|A-Z|0-9|_@]/;
    console.log(chkReg.test(userPass));
    if (!chkReg.test(userPass)) {
        if (pass1.length < 6) {
            alert("길게 써라잉?")
            document.querySelector("#passChk").focus();
        }

        alert("영어와 숫자, 특수기호 _, @만 입력가능");
    }

}

function checkPass() {
    let pass1 = document.querySelector("#pass").value;
    let pass2 = document.querySelector("#passChk").value;
    let chkRes = document.querySelector("#chkRes");
    if (pass1.length < 6 && pass1.length > 1) {
        alert("길게 써라잉?")
        document.querySelector("#pass").focus();
    }
    if (pass1 != pass2) {
        chkRes.innerText = "불일치";
        chkRes.style.color = "red";
    } else if (pass1 == pass2) {
        chkRes.innerText = "일치";
        chkRes.style.color = "blue";
    }
    chkRes.style.fontSize = "12px";
    chkRes.style.marginLeft = "10px";
}

function emailAdd() {
    let emailDomain = document.querySelector("#domain").value;
    document.querySelector("#emailDomain").value = emailDomain;
}

function emailVali(userEmail) {
    if (/\s+/g.test(userEmail) || userEmail == null) {
        alert("이메일에는 공백을 사용할 수 없습니다.");
    }
}
