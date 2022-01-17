import { passwordChecker } from "../passwordchecker";
import { passwordGenerator } from "../passwordgenerator";
test("generating password meets constraints", function () {
    var passwordOptions = {
        smallLetter: 1,
        capitalLetter: 1,
        specialCharacter: 1,
        number: 1,
        length: 12
    };
    var generatedPassword = passwordGenerator(12);
    expect(generatedPassword.length).toBe(12);
    expect(passwordChecker(passwordOptions, generatedPassword)).toEqual({
        smallLetter: true,
        capitalLetter: true,
        number: true,
        specialCharacter: true,
        length: true
    });
});
//# sourceMappingURL=passwordgenerator.test.js.map