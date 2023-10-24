var obj = {

    name: "sahir",
    email: "sahir@gmail.com",
    age: 30,
    address: {
        apartment: "star residency",
        area: "lasbela"
    },

    city: "karachi",
    hobbies: ["hangout", "movies"]







}


document.getElementById("east").innerHTML = obj.name


document.write(obj.age)


var liel = document.createElement("li");

var txt = obj.address.area

var listvalue = document.createTextNode(txt);

liel.appendChild(listvalue);

var listv = document.getElementById("l1");
listv.appendChild(liel);



var liel = document.createElement("li");

var txt = obj.address.apartment

var listvalue = document.createTextNode(txt);

liel.appendChild(listvalue);

var listv = document.getElementById("l1");
listv.appendChild(liel);


for (var i = 0; i <= 1; i++) {

    var liel = document.createElement("li");

    var txt = obj.hobbies[i]

    var listvalue = document.createTextNode(txt);

    liel.appendChild(listvalue);

    var listv = document.getElementById("l1");
    listv.appendChild(liel);

}




//console.log(obj.name)