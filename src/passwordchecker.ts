import { numbers, smallLetters, capitalLetters, specialCharacters} from "./constant/passwordfeatures";

let smallLetter: number = 0;
let capitalLetter: number = 0;
let number: number = 0;
let specialCharacter: number = 0;
let nonPassword: number = 0;
let passwordString: string;

const findpasswordLetter = (password: string) => {
    for(let i = 0; i < password.length; i++){
        passwordString = password[i]
        if (password.charCodeAt(i) > 96 && password.charCodeAt(i) < 123)
            smallLetter += 1
        else if (password.charCodeAt(i) > 64 && password.charCodeAt(i) < 89)
            capitalLetter += 1  
        else if (password.charCodeAt(i) > 47 && password.charCodeAt(i) < 58)
            number += 1  
        else if (password.charCodeAt(i) > 31 && password.charCodeAt(i) != 127)
            specialCharacter += 1
        else
            nonPassword += 1

    }
    return {
        smallLetter,
        capitalLetter,
        number,
        specialCharacter,
        nonPassword
    }
}
interface passwordOptions {
    smallLetter: number,
    capitalLetter: number,
    specialCharacter: number, 
    number: number,
    length: number
}
export function passwordChecker ( passwordOptions: passwordOptions,  password: string){
    const {smallLetter, capitalLetter, number, specialCharacter}  =  findpasswordLetter(password)
    const {smallLetter: reqLowerCase, capitalLetter: reqCapitalCase, specialCharacter: reqSpecialCharacter, number: reqNumber, length} = passwordOptions

    let returnValue = {}

    if(smallLetter < reqLowerCase )
        returnValue = {...returnValue, "smallLetter": false}
    else returnValue = {...returnValue, "smallLetter": true}

    if(capitalLetter < reqCapitalCase)
        returnValue = {...returnValue, "capitalLetter": false}
    else returnValue = {...returnValue, "capitalLetter": true}
    
    if(number < reqNumber)
        returnValue = {...returnValue, "number": false}
    else returnValue = {...returnValue, "number": true}


    if(specialCharacter < reqSpecialCharacter)
        returnValue = {...returnValue, "specialCharacter": false}
    else returnValue = {...returnValue, "specialCharacter": true}


    if(password.length < length)
        returnValue = {...returnValue, "length": false}
    else returnValue = {...returnValue, "length": true}


    return returnValue


}
