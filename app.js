function add(){
    var num1,num2,num3;
    num1 = Number(document.getElementById("fn").value);
    num2 = Number(document.getElementById("sn").value);
    num3 = num1 + num2;
    document.getElementById("res").value = num3;
}
function sub(){
    var num1,num2,num3;
    num1 = Number(document.getElementById("fn").value);
    num2 = Number(document.getElementById("sn").value);
    num3 = num1 - num2;
    document.getElementById("res").value = num3;
}
function mul(){
    var num1,num2,num3;
    num1 = Number(document.getElementById("fn").value);
    num2 = Number(document.getElementById("sn").value);
    num3 = num1 * num2;
    document.getElementById("res").value = num3;
}
function div(){
    var num1,num2,num3;
    num1 = Number(document.getElementById("fn").value);
    num2 = Number(document.getElementById("sn").value);
    num3 = num1 / num2;
    document.getElementById("res").value = num3;
}
function reset(){
    const t1 = document.getElementById("fn");
    const t2 = document.getElementById("sn");
    const t3 = document.getElementById("res");
    t1.value = "";
    t2.value = "";
    t3.value = "0";
}