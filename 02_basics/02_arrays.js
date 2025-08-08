const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //cancat spread operator[...]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

const nested = [1, [2, [3, [4, [5]]]]]; // it flat upto 0,1,2 nested list only
console.log(nested.flat(2));



console.log(Array.isArray("Hitesh")) // it check it array or not
console.log(Array.from("Hitesh")) // convert string to array
console.log(Array.from({name: "hitesh"})) // interesting

const obj = { name: "hitesh", age: 25, city: "Delhi" };
const keysArray = Object.keys(obj);
console.log(keysArray); // ['name', 'age', 'city'] //conter only keys to array

const valuesArray = Object.values(obj);
console.log(valuesArray); // ['hitesh', 25, 'Delhi'] // convert only values to array

const entriesArray = Object.entries(obj);
console.log(entriesArray); // [['name', 'hitesh'], ['age', 25], ['city', 'Delhi']] //convet entier key value pairs to array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); // Returns a new array from a set of elements it can be variables, or key value pairs
