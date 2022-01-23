import { createHash } from "crypto";
export function passwordHasher(password) {
    var hash = createHash('sha512');
    hash.update(password);
    return hash.digest('hex');
}
export function comparePassword(hashed, password) {
    var newPassword = passwordHasher(password);
    return hashed === newPassword;
}
//# sourceMappingURL=passwordhasher.js.map