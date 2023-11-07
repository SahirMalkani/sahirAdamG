

var firebaseConfig = {
  apiKey: "AIzaSyAo0iR8przglSEej7r78FDaiLzxFdvZNWY",
  authDomain: "sahirauth-b11f1.firebaseapp.com",
  projectId: "sahirauth-b11f1",
  storageBucket: "sahirauth-b11f1.appspot.com",
  messagingSenderId: "754045400356",
  appId: "1:754045400356:web:7cc9ea4df12ab6d9a9efb1"
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);



function clk(){

var inp=document.getElementById("t1")
var getdt =localStorage.getItem("name1")

var arr=JSON.parse(getdt)

if(!arr){
arr=[]


}


var obj ={
    name:inp.value,
age:21


    
}


arr.push(obj)

localStorage.setItem("name1",JSON.stringify(arr))

localStorage.setItem("name2",JSON.stringify(arr))

}



function signup(){

  var uu1 =document.getElementById("u1").value
  var pp1 =document.getElementById("p1").value


  firebase.auth().createUserWithEmailAndPassword(uu1, pp1)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    alert (user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert (errorMessage);
  });

  
}