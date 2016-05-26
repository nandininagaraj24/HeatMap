
var DSTile = require('ds-ui-block').Tile,
    util = require('util');

var Tile = module.exports = function (name, params, manifest) {

    DSTile.call(this, name, params, manifest);
}

util.inherits(Tile, DSTile);

// data
// (overriden data method)
(function () {

    this.data = function (res, e, context, callback) {

        callback(
            // error if any
            null,
            // data
            ["This is any", "sample data"]);
    };
}).call(Tile.prototype);

// other
(function () {

    // required MANDATORY
    this.folder = function () {

        return __dirname;
    }
}).call(Tile.prototype);