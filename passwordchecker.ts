import { numbers, smallLetters, capitalLetters, specialCharacters} from "./constant/passwordfeatures";

let smallLetter: number = 0;
let capitalLetter: number = 0;
let number: number = 0;
let specialCharacter: number = 0;
let nonPassword: number = 0;
let passwordString: string;

const findpasswordLetter = (password: string) => {
    for(let i = 0; i < password.length; i++){
        console.log(password.charCodeAt(i))
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
// passwordOptions: passwordOptions,
export const  passwordChecker = ( passwordOptions: passwordOptions,  password: string) => {
    const passwordLetter =  findpasswordLetter(password)

    let requiredValue: string = "Password not strong";

    if(passwordLetter.smallLetter < passwordOptions.smallLetter)
        requiredValue += `\n password must have atLeast ${passwordOptions.smallLetter} small letters `
    if(passwordLetter.capitalLetter < passwordOptions.capitalLetter)
        requiredValue += `\n password must have atLeast ${passwordOptions.capitalLetter} capital letters `
    if(passwordLetter.number < passwordOptions.number)
        requiredValue += `\n password must have atLeast ${passwordOptions.smallLetter} numbers`
    if(passwordLetter.specialCharacter < passwordOptions.specialCharacter)
        requiredValue += `\n password must have atLeast ${passwordOptions.specialCharacter} specialCharacters`
    if(password.length < passwordOptions.length)
        requiredValue += `\n password must be greater than ${passwordOptions.length}`
    else
        requiredValue = "Password passed"

    // }

    console.log(requiredValue)
    // return requiredValue;
}

passwordChecker({
    smallLetter: 2,
    capitalLetter: 3,
    specialCharacter: 2, 
    number: 2,
    length: 12
},'abcD34HGQ!!')