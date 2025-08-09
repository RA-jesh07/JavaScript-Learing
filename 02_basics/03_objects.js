// singleton
// Object.create
// while creating an object then by default the key is stored as string. ** impotant
// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",name:"rajesh",
    [mySym]: "mykey1", // while appling ,[] breshes to mySym then it applicable as a obj value
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["name"])
// console.log(JsUser[mySym])
// console.log( typeof JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

//while ctraing a symbol value into an object and also retrive that value?
const my_Sym = Symbol("secret");
const obj = {
  name: "Raj",
  [my_Sym]: "hiddenValue"
};
// console.log(obj.name); // "Raj"
// console.log(obj[my_Sym]); // "hiddenValue"
// console.log(Object.keys(obj)); // ["name"]
// console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(secret)]


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);// string inter-polation
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());