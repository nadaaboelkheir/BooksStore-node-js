var randomstring = require("randomstring");
exports.generatestorecode = () => {
    return randomstring.generate({
        length: 5,
        charset: 'alphabetic',
        capitalization: 'uppercase'
    });
}
