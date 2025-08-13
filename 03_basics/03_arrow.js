const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);// it will return empty '{}' becz this this-keyword represent the node environment because this this-keyword definine globally in this code their is no more global var declade,

//function declaration , :- it shoe the error
// function chai(){
    // let username = "hitesh"
    // console.log(this.username);
// }
// chai()

// function expression ,:- it show the error 
// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

//arrow function ,:- error this is not defined
// const chai =  () => {
//     let username = "hitesh"
//     console.log(This.username);//we cant use this keyword in arrow fuction
// }
// chai()

const parent={
        child1:12,
        child2:23,
        child3:45,
        child4: ()=>{
            console.log(this.child1);   
        },
        child5: function raj(){
            console.log(this.child2);   
        },
        child6: raj=function(){
            console.log(this.child3);
            console.log(this);
            
            
        }
        
    }
    // console.log(parent); //o/p key value pairs
    // parent.child4() // undifined, becz this represent the globally
    // parent.child5() // return the o/p of that key value
    // parent.child6() // reurn the o/p of that key value
    


// #########################################

// const addTwo = (num1, num2) => {  // it use the curly breshes retun will be in next line
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // called as implicit return, no need to require curly breshes return it inline

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()