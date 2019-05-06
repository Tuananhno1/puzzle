function test1() {
    let element = document.getElementById("a1").getAttribute("src");

 if(element === "caheo1.PNG"){
     element= "daibang1.PNG";
 } else if(element === "daibang1.PNG"){
     element= "sutu1.PNG";
 } else if(element === "sutu1.PNG"){
     element= "caheo1.PNG";
 }
 document.getElementById("a1").src = element;
    check1();
    check2();
    check3();
}
function test2() {
    let element = document.getElementById("a2").getAttribute("src");
    if(element === "caheo2.PNG"){
        element= "daibang2.PNG";
    } else if(element === "daibang2.PNG"){
        element= "sutu2.PNG";
    } else if(element === "sutu2.PNG"){
        element= "caheo2.PNG";
    }
    document.getElementById("a2").src = element;
    check1();
    check2();
    check3();
}
function test3() {
    let element = document.getElementById("a3").getAttribute("src");
    if(element === "caheo3.PNG"){
        element= "daibang3.PNG";
    } else if(element === "daibang3.PNG"){
        element= "sutu3.PNG";
    } else if(element === "sutu3.PNG"){
        element= "caheo3.PNG";
    }
    document.getElementById("a3").src = element;
    check1();
    check2();
    check3();
}
function check1() {
    let e1 = document.getElementById("a1").getAttribute("src");
    let e2 = document.getElementById("a2").getAttribute("src");
    let e3 = document.getElementById("a3").getAttribute("src");
    if(e1 === "caheo1.PNG" && e2 === "caheo2.PNG" && e3 === "caheo3.PNG" ){
        thongBao();
    }
}
function check2() {
    let e1 = document.getElementById("a1").getAttribute("src");
    let e2 = document.getElementById("a2").getAttribute("src");
    let e3 = document.getElementById("a3").getAttribute("src");
    if(e1 === "daibang1.PNG" && e2 === "daibang2.PNG" && e3 === "daibang3.PNG" ){
        thongBao();
    }
}
function check3() {
    let e1 = document.getElementById("a1").getAttribute("src");
    let e2 = document.getElementById("a2").getAttribute("src");
    let e3 = document.getElementById("a3").getAttribute("src");
    if(e1 === "sutu1.PNG" && e2 === "sutu2.PNG" && e3 === "sutu3.PNG" ){
        thongBao();
    }
}

function thongBao() {
    document.getElementById('thongbao').innerHTML = 'đúng rồi';
}
