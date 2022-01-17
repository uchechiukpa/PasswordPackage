import { getRandom } from "./constant/getRandom";
import { smallLetters, capitalLetters, numbers, specialCharacters } from "./constant/passwordfeatures";
import { shuffle } from "./constant/shuffle";



export const passwordGenerator = (max: number = 10)=> {
    if(max < 9){
        return "password can't be less than 9"
    }
    let password: string = '';
    const letterLength = 26 
    const specialCharacterLength = specialCharacters.length
    const numberLength = numbers.length
    const randomSmallLetter = smallLetters[getRandom(letterLength)];
    const randomCapitalLetter = capitalLetters[getRandom(letterLength)];
    const randomNumber = numbers[getRandom(numberLength)];
    const myRandomSpecialLetters = specialCharacters[getRandom(specialCharacterLength)];

    password = `${randomSmallLetter}${randomCapitalLetter}${randomNumber}${myRandomSpecialLetters}`

    let combinedPasword = [...smallLetters.split(''), ...numbers,  ...capitalLetters.split(''), ...specialCharacters.split('')]
    combinedPasword = shuffle(combinedPasword)
    const newLength  = max - password.length
    let randomNumberUsed:number ;
        for(let i = 0; i < newLength; i++){
            randomNumberUsed = getRandom(combinedPasword.length)
            password += combinedPasword[randomNumberUsed]
    }

    return password



}


