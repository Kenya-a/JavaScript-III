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
    greeting: '你好',
    sayGreeting: function(name){
        console.log(`${this.greeting} 我是 ${name}`);
        console.log(this); 
    }
};

somethingInteresting.sayGreeting('Cain');

// Principle 3

// code example for New Binding

function Language(sayHello) {
    this.hellospanish = "Hola ";
    this.sayHello = sayHello;
    this.speak = function() {
        console.log(this.hellospanish + this.sayHello);
        console.log(this)
    }
}

const mari = new Language('Kenya')
const kenya = new Language('Mari')

mari.speak();
kenya.speak();

// Principle 4

// code example for Explicit Binding

function Languagetwo(sayHi) {
    this.helloswedish = "Hejsan ";
    this.sayHi = sayHi;
    this.talk = function() {
        console.log(this.helloswedish + this.sayHi);
        console.log(this)
    }
}

const martin = new Languagetwo('John')
const john = new Languagetwo('Martin')

martin.talk.call(john); john.talk.apply(martin);

// martin.talk();
// john.talk();

