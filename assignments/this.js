/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function fox(sound){
    console.log(this);
    return sound;
}
console.log(fox("What does the fox say?"))


// Principle 2

// code example for Implicit Binding

const somethingInteresting = {
    greeting: '大家好',
    sayGreeting: function(name){
        console.log(`${this.greeting} 我叫 ${this.name}`);
        console.log(this); 
    }
};

somethingInteresting.sayGreeting('Kenya');

// Principle 3

// code example for New Binding

function 

// soundOne.dog();
// soundTwo.dog();


// Principle 4

// code example for Explicit Binding