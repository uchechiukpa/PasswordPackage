import { passwordChecker } from '../passwordchecker';
test("check password meets constraints", function () {
    var passwordOptions = {
        smallLetter: 3,
        capitalLetter: 2,
        specialCharacter: 2,
        number: 3,
        length: 9
    };
    var password = "aDE45!*bcF6";
    expect(passwordChecker(passwordOptions, password)).toEqual({
        smallLetter: true,
        capitalLetter: true,
        number: true,
        specialCharacter: true,
        length: true
    });
});
test('check when password fails to meet constraints', function () {
    var passwordOptions = {
        smallLetter: 8,
        capitalLetter: 2,
        specialCharacter: 2,
        number: 3,
        length: 12
    };
    var password = "aDE45!*bcF6";
    expect(passwordChecker(passwordOptions, password)).toEqual({
        smallLetter: false,
        capitalLetter: true,
        number: true,
        specialCharacter: true,
        length: false
    });
});
//# sourceMappingURL=passwordchecker.test.js.map