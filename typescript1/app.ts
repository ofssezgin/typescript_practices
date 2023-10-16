// const userName = 'Furkan';
// // userName = 'Furkan2'   // const değişkenler değiştirilemez !!!
// let age = 30;

// age = 22;

// function add(a:number, b:number){
//     let result;
//     result = a + b;
//     return result;
// }

// if(age > 20){
//     let isOld = true;
// }

// console.log(isOld); // isOld burada tanımlı değil !!!

// console.log(result); // result burada tanımlı değil !!!

// const add2 = (a:number, b:number =1) => a + b;

// console.log(add2(2, 5));

// const printOutput: (a:number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if(button){
//     button.addEventListener('click', event => console.log(event));
// }

// printOutput(add2(5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);     // arraydaki bütün elemanları alır ve push eder !!!

const person = {
    firstName: 'Max',
    age: 30
};

const copiedPerson = {...person};  // tam kopya oluşturur !!!

const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies; // arrayden elemanları çıkarır !!!

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person; // objeden elemanları çıkarır !!!

console.log(userName, age, person);