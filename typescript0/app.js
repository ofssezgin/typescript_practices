var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') { // hangi değeri alacağı belli olmayan değişkenler ileride hata vermesin diye any yerine unknown olarak tanımlanır !!!
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while (true) {}
}
generateError('An error occured', 500);
