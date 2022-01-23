import { createHash } from "crypto";
export var passwordHasher = function (password) {
    var hash = createHash('sha512');
    hash.update(password);
    return hash.digest('hex');
};
export var comparePassword = function (hashed, password) {
    var newPassword = passwordHasher(password);
    return hashed === newPassword;
};
//# sourceMappingURL=passwordhasher.js.map