### *PASSWORD LITE*

## Installation
```bash
$ npm install password-lite 
```

## Features

  * Password Generator
  * Password Checker
  * Password Hasher
  * Password Compare

## Quick Start

# Password generator 


```bash
    Import { passwordGenerator } from "passwordGenerator"
    // pass in an argument for the length of password you want

    //Generates 12 characters including at least one lowerCase, upperCase, number and special Character 
    passwordGenerator(12)
```
# Password Checker
```bash
    Import { passwordChecker } from "passwordChecker"
    // pass in an argument for the parameters you wan

    //example 

    const passwordOptions = {
        smallLetter: 3,
        capitalLetter: 2,
        specialCharacter: 2,
        number: 3,
        length: 9
    }

    const password = "aDE45!*bcF6"
    # return Object
    passwordChecker(passwordOptions, password))

    # returns
    {
      smallLetter: true,
      capitalLetter: true,
      number: true,
      specialCharacter: true,
      length: true
    }

    # smallLetter returns true because password has atleast 3 smallLetters, likewise the rest, if the characters of the password are less than the PasswordOption it will return false 
```
# Password Hasher 


```bash
    Import { passwordHasher } from "passwordHasher"
    // pass in an argument password

    const password = "m8y09*Gik099Pt/"

    passwordHasher(password)

    # It's returns a hashed password 
    # d4b77bd79123c3cded49004b77ffae9aaca4d585f4a91c35d45d6ffdc0adb858e1c15a44aae681a2d2c1d98be670f0ef7133d5b0aea432a7befc61bf68e46544
```

# Compare password


```bash
    Import { comparePassword } from "passwordHasher"
    // pass in an argument password and the hashed password

    const password = "m8y09*Gik099Pt/"
    const hashedPassword = "d4b77bd79123c3cded49004b77ffae9aaca4d585f4a91c35d45d6ffdc0adb858e1c15a44aae681a2d2c1d98be670f0ef7133d5b0aea432a7befc61bf68e46544"

    comparePassword(hashedPassword, password)

    # Returns true if the password's match and false if they don't
```


## Tests

  To run the test suite, run `npm test`:

```bash
$ 
$ npm test
```

## License

  [MIT](LICENSE)


