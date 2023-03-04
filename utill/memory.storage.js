var MemoryStorage = require('memorystorage');
var store = new MemoryStorage('Nota-app');
exports.getkeys = (store) => {
    var keys = []
    for (var i = 0; i < store.length; i++) {
        var key = store.key(i);
        keys.push(key)
    }
    return keys
}
exports.getvalues = (store) => {
    var values = []
    for (var i = 0; i < store.length; i++) {
        var key = store.key(i);
        var value = store.getItem(key);
        values.push(value)
    }
    return values
}

exports.store = store;