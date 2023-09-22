
// var vst=false;

// var cities =["khi","lhr","isb","mul","qta"];

// var vprom=prompt("enter city name");


// vprom=vprom.toLowerCase();


// for (u=0; u < cities.length; u++ ) {


//     if (vprom === cities[u]){

// vst=true;

//     }




// }

// if (vst){

// alert("match");


// }else{


// alert("not match");

// }



// for(var a=0; a<10;a++){


//     for(var a1=0; a1<5;a1++){

// console.log(a,a1)

//     }


// }




//  var vprom=prompt("enter  word of your choice");

//  var nn=""

//  for (i= vprom.length-1; i>=0; i-- ) {

//     nn=nn+vprom[i];
// console.log(nn)


//  }


//  if (vprom===nn){

// alert("matched")
//  }else{

//     alert("not mat")
//  }


 


// var vprom=prompt("enter  word of your choice");

// var nn=""

// for (i=0;i< vprom.length; i++ ) {


// if (vprom.slice(i,i+2)==="  ") {

//    console.log("double space")
// }else{


//    console.log("no double space")


// }
// }



var str="The New Yorker magazine doesn't allow the phrase World War II.They say it should be the Second World War. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers."



for (i=0;i< str.length; i++ ) {


   if (str.slice(i,i+12)==="World War II") {
   

str=str.slice(0,i)+"2nd world war" +str.slice(i+12);

     console.log(str)
   }else{
   
 //     console.log(str.slice(i,i+12))
      //console.log("no double space")
   
   
   }
   }
   



   var str="The New Yorker magazine doesn't allow the phrase World War II.They say it should be the Second World War. So let's search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers."


   var str1= str.indexOf("New")

   console.log(str1)


   var str2=str.slice(0,str1)
   
   var str3="Times"


   var str4=str.slice(str1+3,55)

console.log(str2+str3+str4);



str=str.replaceAll("New","New1")


console.log(str);



   var num1 ="2.43";

num1=num1.replace("2.43","2.6")


   console.log(Math.round(num1));
   console.log(Math.ceil(num1));
   console.log(Math.floor(num1));



