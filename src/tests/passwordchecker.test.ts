import { passwordChecker } from '../passwordchecker'


test("check password meets constraints", () => {
    
    const passwordOptions = {
        smallLetter: 3,
        capitalLetter: 2,
        specialCharacter: 2,
        number: 3,
        length: 9
    }

    const password = "aDE45!*bcF6"

    expect(passwordChecker(passwordOptions, password)).toEqual({
        smallLetter: true,
        capitalLetter: true,
        number: true,
        specialCharacter: true,
        length: true
      })
    
})

test('check when password fails to meet constraints', () => {
    const passwordOptions = {
        smallLetter: 8,
        capitalLetter: 2,
        specialCharacter: 2,
        number: 3,
        length: 12
    }

    const password = "aDE45!*bcF6"
    expect(passwordChecker(passwordOptions, password)).toEqual({
        smallLetter: false,
        capitalLetter: true,
        number: true,
        specialCharacter: true,
        length: false
    })
})