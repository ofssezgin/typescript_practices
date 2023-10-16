function add(n1: number, n2: number){
    return n1+n2;
}

function printResult(num: number): void {    // void type fonksiyonun sonuna result eklenmez !!!
    console.log('Result: '+num)
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add(5,12));

let combineValues: (a: number, b: number) => number;   // fonksiyon type tanımlama !!!

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8,8));

// let someValue: undefined     // tanımsız type tanımlamak mümkün !!!

addAndHandle(10,20, (result) => {
    console.log(result);
    //return result;   // result'un typeı void olduğu için herhangi bir değer return etmez !!!
});