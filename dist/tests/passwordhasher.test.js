import { comparePassword, passwordHasher } from "../passwordhasher";
test("hashing password meets constraints", function () {
    var password = "m8y09*Gik099Pt/";
    var hashedPassword = passwordHasher(password);
    console.log(hashedPassword);
    var hash = "d4b77bd79123c3cded49004b77ffae9aaca4d585f4a91c35d45d6ffdc0adb858e1c15a44aae681a2d2c1d98be670f0ef7133d5b0aea432a7befc61bf68e46544";
    expect(hashedPassword.length).toBe(128);
    var comparedPassword = comparePassword(hash, password);
    expect(comparedPassword).toBeTruthy();
});
//# sourceMappingURL=passwordhasher.test.js.map