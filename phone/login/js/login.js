function checkUaP(){
    let userName = document.getElementById('username').value;
    let psWord = document.getElementById('password').value;
    let info = JSON.parse(localStorage.getItem("user"));

    if ( userName == info.username && psWord == info.psw){
        alert("登录成功！")
        appcan.window.open({
                name: "index",
                dataType:0,
                anild: 8,
                data: "index.html",
            })
    }else {
        alert("账号或密码错误！")
    }
}
function pushToRegister() {
    appcan.window.open({
        name: "register",
        dataType:0,
        anild: 8,
        data: "register.html",
    });
}