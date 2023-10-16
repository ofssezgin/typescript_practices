// type AddFn = (a: number, b: number) => number;
interface AddFn {  // interface javascriptte yoktur !!!
    (a: number, b: number): number; 
}

let add: AddFn;

interface Named {
    readonly name?: string; // ? => optional !!!
    outputName?: string; 
}


interface Greetable extends Named {
    // readonly name: string;
    // age: number;
    greet(phrase: string): void;
}

class person implements Greetable {
    name?: string;
    age = 22;
    constructor(n?: string) {
        if(n) {
        this.name = n;
        }
    }
    
    greet(phrase: string) {
        if (this.name) {
        console.log(phrase + ' ' + this.name);
        } else{
            console.log('Hi!');
        }
    }   
}

let user1: Greetable;

user1 = new person();
// user1.name = 'Furkan';    // readonly olduğu için hata verir !!!

user1.greet('Hi there, I am');
console.log(user1);