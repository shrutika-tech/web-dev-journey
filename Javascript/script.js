
/*let color= "red";

if (color== "red"){
    console.log("Stop");
}
if (color=="yellow"){
    console.log("Ready");
}
if (color=="green"){
    console.log("Go");
}*/

/*let size = "S";

if (size=== "XL"){
    console.log("price is 250");
}
else if(size=== "L"){
    console.log("price is 200");
}
else if(size=== "M"){
    console.log("price is 100");
}
else{
    console.log("price is 50");
}*/

/*let str="ball";

if((str[0]==="a") && (str.length>3)){
    console.log("good string");
}
else{
    console.log("not a good string");
}*/

/*let Day=1;

switch (Day){
    case 1:
        console.log("Sunday");
        break;

    case 2:
        console.log("Monday");
        break;

    case 3:
        console.log("Tuesday");
        break;

    case 4:
        console.log("Wed");
        break;

    case 5:
        console.log("Thu");
        break;

    case 6:
        console.log("Fri");
        break;
    
    case 7:
        console.log("Sat");
        break;
}*/

//1st Ques
let num=2;

if (num%10==0){
    console.log("good");
}
else{
    console.log("bad");
}

// 2nd Ques

let name = prompt("enter your name");
let age = prompt("enter your age");
alert(`${name} is ${age}years old`);

//3rd Ques

let Quarter = 1;

switch (Quarter){
    case 1:
        console.log("Jan,Feb,Mar");
        break;

    case 2:
        console.log("Apr,May,Jun");
        break;

    case 3:
        console.log("Jul,Aug,Sept");
        break;

    case 4:
        console.log("Oct,Nov,Dec");
        break;

    default:
        console.log("invalid choice");
        break;
}

let str="Apples";

if((str[0]== 'A' || str[0]== 'a') && (str.length>5)){
    console.log("golden string");
}
else{
    console.log("not a golden string");
}

let a= 5;
let b=3;
let c=4;

if(a > b){
    if(a>c){
        console.log(a, "is largest");
    }
    else{
        console.log( c, " is largest")
    }
}

else {
    if(b>c){
        console.log(b, "is largest");
    }
    else{
        console.log( c, " is largest")
    }
}

let num1 = 32;
let num2= 56532;

if ((num1%10 )== (num2%10)){
    console.log("Same last digit", num1%10);
}
else{
    console.log("not same last digits")
}