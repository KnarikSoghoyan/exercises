const animal = {
     name: "Ruby",
     color: "red",
     getColor:  function () {
        const getName = function(){
            return this.name
        }
        return `${this.color}, ${getName()}`      // returns getName()- undefined, because "this" is not working in "getName"
      }
}
console.log(animal.getColor());
// _____________________________________________________________________________


// Solution1

// const animal = {
//     name: "Ruby",
//     color: "red",
//     getColor:  function () {
//        let newThis = this               // write this to any variable and this variable will be available in the inner function
//        const getName = function(){
//            return newThis.name
//        }
//        return `${this.color}, ${getName()}`     
//      }
// }
// console.log(animal.getColor());
// _____________________________________________________________________________


// Solution2

// const animal = {
//     name: "Ruby",
//     color: "red",
//     getColor:  function () {
//        const getName = function(param){
//            return param.name
//        }
//        return `${this.color}, ${getName(this)}`     // make the function "getName" take a parameter, when calling pass "this" into it
//      }
// }
// console.log(animal.getColor());
// _____________________________________________________________________________


// Solution3

// const animal = {
//      name: "Ruby",
//      color: "red",
//      getColor:  function () {
//         const getName = () => {                 // make getName arrow function
//             return this.name
//         }
//         return `${this.color}, ${getName()}`     
//       }
// }
// console.log(animal.getColor());
// _____________________________________________________________________________


// Solution4

// const animal = {
//      name: "Ruby",
//      color: "red",
//      getColor:  function () {
//         const getName = function(){
//             return this.name
//         }
//         return `${this.color}, ${getName.call(this)}`          // "getName" will call her parent function and give her "this"
//         // return `${this.color}, ${getName.apply(this)}`      //  we can use "call, apply, bind"
//         // return `${this.color}, ${getName.bind(this)()}`      
//       }
// }
// console.log(animal.getColor());

// _____________________________________________________________________________
