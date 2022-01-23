import { createHash  } from "crypto"

export function passwordHasher (password: string): string {
    const hash = createHash('sha512');
    hash.update(password);
    return hash.digest('hex');
}

export function comparePassword( hashed: string, password: string){
    const newPassword = passwordHasher(password)
    return hashed === newPassword
}




