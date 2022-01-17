var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { getRandom } from "./constant/getRandom";
import { smallLetters, capitalLetters, numbers, specialCharacters } from "./constant/passwordfeatures";
import { shuffle } from "./constant/shuffle";
export var passwordGenerator = function (max) {
    if (max === void 0) { max = 10; }
    if (max < 9) {
        return "password can't be less than 9";
    }
    var password = '';
    var letterLength = 26;
    var specialCharacterLength = specialCharacters.length;
    var numberLength = numbers.length;
    var randomSmallLetter = smallLetters[getRandom(letterLength)];
    var randomCapitalLetter = capitalLetters[getRandom(letterLength)];
    var randomNumber = numbers[getRandom(numberLength)];
    var myRandomSpecialLetters = specialCharacters[getRandom(specialCharacterLength)];
    password = "".concat(randomSmallLetter).concat(randomCapitalLetter).concat(randomNumber).concat(myRandomSpecialLetters);
    var combinedPasword = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], smallLetters.split(''), true), numbers, true), capitalLetters.split(''), true), specialCharacters.split(''), true);
    combinedPasword = shuffle(combinedPasword);
    var newLength = max - password.length;
    var randomNumberUsed;
    for (var i = 0; i < newLength; i++) {
        randomNumberUsed = getRandom(combinedPasword.length);
        password += combinedPasword[randomNumberUsed];
    }
    return password;
};
//# sourceMappingURL=passwordgenerator.js.map