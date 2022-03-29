var items = [

    {

        id: 1,

        name: "Laptop",

        price: 100000

    }, {

        id: 2,

        name: "Mouse",

        price: 50000,

    }

]
items[0].price = 5;
console.log(items[0].price);
console.log(items[1]["id"]);
// console.log(items[1].2);
console.log(items[0].id);
console.log(typeof items[0].name);
console.log(items[0]["1"]);