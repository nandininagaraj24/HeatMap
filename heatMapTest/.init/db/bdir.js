
module.exports = function (done) {

    // return an array of documents that need to be inserted for the app
    return done(null, [{
        '_name': 'config',
        'options': {
            'period': {
                'type': 'toggle',
                'represent': 'pop-button-group',
                'values': ['D', 'M', 'Q', 'Y']
            }
        }
    }], {
        removeAndInsert: false
    });
};