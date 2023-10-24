// git id of sir faraz 

var std1 = {

    name: "sahir",
    age: 21,
    email: "dollar@getComputedStyle",
    address: "lasbela",

    getname: function () {

        return this.age;

    }


}



console.log(std1.getname())




var ddata = {

    sectionA: {

        usersA: {

            user1: {
                name: "sahir",
                age: 23,
                add: "isb",
                state: "capital"

            },

            user2: {
                name: "shahida",
                age: 29,
                add: "lhr"

            },


            user3: {
                name: "farah",
                age: 29,
                add: "khi"


            }

        }
    },




    sectionB: {
        usersB: {
            user1: {
                name: "sahirB",
                age: 231,
                add: "isbBB",
                state: "capitalB"

            },

            user2: {
                name: "shahidaB",
                age: 29,
                add: "lhrB"

            },


            user3: {
                name: "farahB",
                age: 29,
                add: "khiBB"


            }
        }

    }


}

for (var a in ddata) {

    for (var x in ddata[a]) {
        for (var y in ddata[a][x]) {
            for (var z in ddata[a][x][y]) {



                console.log(a + " " + x + " " + y + " " + z + " " + ddata[a][x][y][z]);




            }
        }
    }
}


function Stds(name, age, family, origin) {

    this.sname = name;
    this.sage = age;
    this.sfamily = family;
    this.sorgin = origin;
    this.getid = function () {

        var x = 1 + 2;
        return x;
    }

}

Stds.prototype.getname2 = function () {

    var y = 1 + 6;

    return y

}




var student1 = new Stds("shair", 23, "memon", "pak");


var student2 = new Stds("tahseen", 22, "pathan", "pak");


console.log(student1)
console.log(student2)


console.log(student1.getid())
console.log(student1.getname2())


try {

    alet("east or west")

} catch (ersa) {

    //  throw ersa.message;


    console.log(ersa.message);
    throw ersa;


    //window.location.href = "https://www.facebook.com"
}


