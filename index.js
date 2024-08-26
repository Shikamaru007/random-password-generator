const passwordLength = 12;
const incLowercase = true;
const incUppercase = true;
const incNumbers = true;
const incSymbols = true;


function randomPasswordGen(passwordLength, incLowercase, incUppercase, incNumbers, incSymbols){

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!#$%&()_{}[]:?";

    let allowedChar = "";
    let password = "";

    allowedChar += incLowercase ? lowercase : "";
    allowedChar += incUppercase ? uppercase : "";
    allowedChar += incNumbers ? numbers : "";
    allowedChar += incSymbols ? symbols : "";

    if(passwordLength <=5){
        return `(Password needs to be at least 5 characters)`;
    }
    if(allowedChar===0){
        return `(You need to select a group of characters)`;
    }
    for(i=0; i<passwordLength; i++){
        const allowedCharIndex = Math.floor(Math.random()*allowedChar.length);
        password = password + allowedChar[allowedCharIndex]
    }

    document.getElementById("result").textContent = password;

    return password;

    

    console.log(password);
}

password = randomPasswordGen(passwordLength, incLowercase, incUppercase, incNumbers,incSymbols);

