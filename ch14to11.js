


// array

// var vclass = ["shair", "tahseen", "rizwan", true,896];

// vclass.splice(2,1)

// console.log(vclass);

// vclass.pop();
//  vclass.pop();
// console.log(vclass);

// vclass.push("smandar khan")
// console.log(vclass);

// vclass.shift();
// console.log(vclass)
// vclass.unshift("indi win the match");
// console.log(vclass);

// 1

// var vsahir=[];

// vsahir[0]=prompt("enter value")
// vsahir[1]=prompt("enter value")
// vsahir[2]=prompt("enter value")

// console.log(vsahir)

// 5

// var edq =  ["e.g.", "SSC", "HSC", "BCS",
//     "BS", "BCOM, MS", "M. Phil.", "PhD"];

//  document.write(edq);

// 8

var sname = ["sahir", "tahseen", "sharjeel"];
var score = [320, 230, 480];

var pcent = (score[0] / 500) * 100;
var pcent1 = (score[1] / 500) * 100;
var pcent2 = (score[2] / 500) * 100;
alert("score of " + sname[0] + " is " + score[0] + " and persontage " + pcent);

alert("score of " + sname[1] + " is " + score[1] + " and persontage " + pcent1);

alert("score of " + sname[2] + " is " + score[2] + " and persontage " + pcent2);

// 9

var colourname = ["black", "geen", "blue", "white"];
var vans = prompt("what colour you want begning");

colourname.unshift(vans);

console.log(colourname);

var vans = prompt("what colour you want end");

colourname.push(vans);

console.log(colourname);

//c

var vans = prompt("what colour you want begning is color");
var vans1 = prompt("what colour you want begning 2nd color");

colourname.unshift(vans, vans1);

console.log(colourname);

// d

colourname.shift();

console.log(colourname);

// e

var colourname = ["black", "geen", "blue", "white"];

colourname.pop()

//f

var vans = prompt("what colour  you want to add");
var vans1 = prompt("at what index you want to add");


colourname.splice(vans1,1,vans);

alert(colourname);


//g


var colourname = ["black", "geen", "blue", "white"];

var vans1 = prompt("at what index colour you want to del");

colourname.splice(vans1,1);

alert(colourname);
//q 10


var stdScor=[320,230,480,120];

stdScor.sort();

alert(stdScor);


//q 11

var  city1 =["khi", "lah","isb","quet","pesh"];

var city11= city1.slice(2,4);

alert(city11);


//q 12

var arr = ["This" ,"is", "my", "cat"];

var arr1=arr.join(" ");

alert (arr1);

//q13


var arr = [];

arr.push("keyboard");
arr.push("mouse");
arr.push("printer");
arr.push("monitor");


alert(arr);


arr.shift();
alert(arr);


arr.shift();
alert(arr);

arr.shift();
alert(arr);

arr.shift();
alert(arr);




//q14


var arr = [];

arr.push("keyboard");
arr.push("mouse");
arr.push("printer");
arr.push("monitor");


alert(arr);


arr.pop();
alert(arr);


arr.pop();
alert(arr);

arr.pop();
alert(arr);

arr.pop();
alert(arr);

//q15


var aarr=["apple","motorola","samsun","nokia","sony","haeir"];
var ar="sahir"

   document.getElementById("o1").innerHTML=aarr[0];
   document.getElementById("o2").innerHTML=aarr[1];
   document.getElementById("o3").innerHTML=aarr[2];
   document.getElementById("o4").innerHTML=aarr[3];
   document.getElementById("o5").innerHTML=aarr[4];
   document.getElementById("o66").innerHTML=aarr[5];
  



