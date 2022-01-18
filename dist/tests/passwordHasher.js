import { passwordHasher } from "../passwordhasher";
test("hashing password meets constraints", function () {
    var hashedPassword = passwordHasher("m7y09*Gik09K6t");
    console.log(hashedPassword);
    expect(hashedPassword.length).toBe(64);
    // expect(passwordChecker(passwordOptions, generatedPassword)).toEqual({
    //     smallLetter: true,
    //     capitalLetter: true,
    //     number: true,
    //     specialCharacter: true,
    //     length: true
    // })
});
//# sourceMappingURL=passwordHasher.js.map