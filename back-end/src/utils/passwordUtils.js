const bcrypt = require('bcryptjs');

exports.hashPassword = password => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

exports.isMatch = (hashedPassword, password) => {
    const match = bcrypt.compareSync(password, hashedPassword);
    return match;
}