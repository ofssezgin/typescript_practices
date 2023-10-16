let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {    // hangi değeri alacağı belli olmayan değişkenler ileride hata vermesin diye any yerine unknown olarak tanımlanır !!!
    userName = userInput;
}

function generateError(message: string, code: number): never {  // ne olursa olsun hiçbir zaman return etmemesi için never tanımlanır !!!
    throw {message: message, errorCode: code};
    // while (true) {}
}

generateError('An error occured', 500);