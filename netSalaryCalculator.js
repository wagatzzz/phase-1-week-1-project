let input1 =  prompt("Enter your basicSalary:");
let input2 =  prompt("Enter your benefits:");
let basicSalary = parseInt(input1);
let benefits = parseInt(input2);
let grossSalary =  Math.floor(basicSalary + benefits);
let payee;
let nhif;
let nssf =  Math.floor(grossSalary * 0.05);
let netSalary;

document.getElementById("p1").innerHTML= "grossSalary:"+grossSalary;
document.getElementById("p2").innerHTML= "nssf:"+nssf;


function calc(){
    if(basicSalary < 24000){
        payee = basicSalary * 0.01;
    }else if(basicSalary < 32333){
        payee = basicSalary * 0.25;
    }else{
        payee = basicSalary *0.3;
    }
    document.getElementById("p3").innerHTML= "payee:"+payee;
    
}


function nhifdeductions(){
    if(grossSalary <= 5999){
        nhif = 150;
    }else if(grossSalary <= 7999){
        nhif = 300;
    }else if(grossSalary <= 11999){
        nhif = 400;
    }else if(grossSalary <= 14999){
        nhif = 500;
    }else if(grossSalary <= 19999){
        nhif = 600;
    }else if(grossSalary <= 24999){
        nhif = 750;
    }else if(grossSalary <= 29999){
        nhif = 850;
    }else if(grossSalary <= 34999){
        nhif = 900;
    }else if(grossSalary <= 39999){
        nhif = 950;
    }else if(grossSalary <= 44999){
        nhif = 1000;
    }else if(grossSalary <= 49999){
        nhif = 1100;
    }else if(grossSalary <= 59999){
        nhif = 1200;
    }else if(grossSalary <= 69999){
        nhif = 1300;
    }else if(grossSalary <= 79999){
        nhif = 1400;
    }else if(grossSalary <= 89999){
        nhif = 1500;
    }else if(grossSalary <= 99999){
        nhif = 1600;
    }else if(grossSalary >= 100000){
        nhif = 1700;
    }
    document.getElementById("p4").innerHTML= "nhif:"+nhif;
    
}

function calcNetSalary(){
    netSalary =  Math.floor(grossSalary - (payee+nhif+nssf));
    document.getElementById("p5").innerHTML= "netSalary:"+netSalary;
    

  }
  


calc();
nhifdeductions();
calcNetSalary();

//eventlistener button that refreshes the webpage
const refreshButton = document.getElementById('refreshButton');

refreshButton.addEventListener('click', function() {
  location.reload();
});