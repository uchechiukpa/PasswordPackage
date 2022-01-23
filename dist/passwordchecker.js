var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var smallLetter = 0;
var capitalLetter = 0;
var number = 0;
var specialCharacter = 0;
var nonPassword = 0;
var passwordString;
var findpasswordLetter = function (password) {
    for (var i = 0; i < password.length; i++) {
        passwordString = password[i];
        if (password.charCodeAt(i) > 96 && password.charCodeAt(i) < 123)
            smallLetter += 1;
        else if (password.charCodeAt(i) > 64 && password.charCodeAt(i) < 89)
            capitalLetter += 1;
        else if (password.charCodeAt(i) > 47 && password.charCodeAt(i) < 58)
            number += 1;
        else if (password.charCodeAt(i) > 31 && password.charCodeAt(i) != 127)
            specialCharacter += 1;
        else
            nonPassword += 1;
    }
    return {
        smallLetter: smallLetter,
        capitalLetter: capitalLetter,
        number: number,
        specialCharacter: specialCharacter,
        nonPassword: nonPassword
    };
};
export function passwordChecker(passwordOptions, password) {
    var _a = findpasswordLetter(password), smallLetter = _a.smallLetter, capitalLetter = _a.capitalLetter, number = _a.number, specialCharacter = _a.specialCharacter;
    var reqLowerCase = passwordOptions.smallLetter, reqCapitalCase = passwordOptions.capitalLetter, reqSpecialCharacter = passwordOptions.specialCharacter, reqNumber = passwordOptions.number, length = passwordOptions.length;
    var returnValue = {};
    if (smallLetter < reqLowerCase)
        returnValue = __assign(__assign({}, returnValue), { "smallLetter": false });
    else
        returnValue = __assign(__assign({}, returnValue), { "smallLetter": true });
    if (capitalLetter < reqCapitalCase)
        returnValue = __assign(__assign({}, returnValue), { "capitalLetter": false });
    else
        returnValue = __assign(__assign({}, returnValue), { "capitalLetter": true });
    if (number < reqNumber)
        returnValue = __assign(__assign({}, returnValue), { "number": false });
    else
        returnValue = __assign(__assign({}, returnValue), { "number": true });
    if (specialCharacter < reqSpecialCharacter)
        returnValue = __assign(__assign({}, returnValue), { "specialCharacter": false });
    else
        returnValue = __assign(__assign({}, returnValue), { "specialCharacter": true });
    if (password.length < length)
        returnValue = __assign(__assign({}, returnValue), { "length": false });
    else
        returnValue = __assign(__assign({}, returnValue), { "length": true });
    return returnValue;
}
//# sourceMappingURL=passwordchecker.js.map