import { createHash,pbkdf2Sync } from "crypto"

export const passwordHasher = (password: string): string => {
    const hash = createHash('sha512');
    hash.update('hello');
    return hash.digest('hex');


}
export const comparePassword = ( hashed: string, password: string) => {

    const newPassword = passwordHasher(password)
    return hashed === newPassword
}




