
var DSApp = require('ds-ui-block').App,
    util = require('util');

var App = module.exports = function (name, params, manifest) {

    DSApp.call(this, name, params, manifest);
}

util.inherits(App, DSApp);

// tilesets
// (overriden tilesets method)
(function () {

    this.tilesets = function (res, e, context, callback) {

        callback(null, [{
            // name of tileset
            name: "main"
        }]);
    };
}).call(App.prototype);

// tiles
// (overriden tiles method)
(function () {

    this.tiles = function (res, e, context, callback) {

        e.user(context.user).adapter(e, {}, function (err, adapter) {

            callback(null, [{
				// name of tile
				widget: "grid",
				// while tileset it belongs to
				goto: "tileset.main",
				// overriding title
				title: 'Getting Lazy Data',
				// override some params of tile from here
				params: {
					dataProcess: "url",
					target: "/me/data/position/group/StrategyID,AnalystID?_pred=fx.select('StrategyID','AnalystID','sum:TotalBaseDTD','sum:MarketValueBaseEOD')",
					//dataProcess: "data",
					//data: data,
					width: "400px",
					height: "200px",
					theme: 'ssrs'
				}
			}, {
				// name of tile
				widget: "grid",
				// while tileset it belongs to
				goto: "tileset.main",
				// override title from manifest
				title: 'Getting Data from SQL Server',
				// override some params of tile from here
				params: {
					//dataProcess: "url",
					//target: "/me/data/position/group/StrategyID,AnalystID?_pred=fx.select('StrategyID','AnalystID','sum:TotalBaseDTD','sum:MarketValueBaseEOD')",
					dataProcess: "data",
					data: [],
					width: "400px",
					height: "200px"
				}
			}, {
				// name of tile
				path: "hello-world",
				// name of app which tile belongs to
				app: null,
				// while tileset it belongs to
				goto: "tileset.main",
				// override some params of tile from here
				params: {
					name: "Mike"
				}
			}]);
        });
    };
}).call(App.prototype);

// other
(function () {

    // required MANDATORY
    this.folder = function () {

        return __dirname;
    };
}).call(App.prototype);