import { comparePassword, passwordHasher } from "../passwordhasher"

test("hashing password meets constraints", () => {
    const password = "m8y09*Gik099Pt/"

    const hashedPassword = passwordHasher(password)
    console.log(hashedPassword)

    const hash = "9ec56e4d82c78c56395774dde7862a1a61ad6c153597a773d0c8581600572475a31dd9f24114461ede3111e6ad862c18048f435c43b21408b56d6a194b17123e"

    expect(hashedPassword.length).toBe(128)
    const comparedPassword = comparePassword(hash, password)
    expect(comparedPassword).toBeTruthy()
})