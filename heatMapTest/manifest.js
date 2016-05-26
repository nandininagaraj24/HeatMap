module.exports = {

    // used as display name for app
    "title": "Scorecard",

    // can bind specific color to your app, or leave blank
    "color": null,

    // list of params that your app supports/can support
    // changing params can at runtime change the behavior of app
    "params": {
        "period": "Daily"
    },

    // specify tilesets for the app
    // can specify a resource or leave null
    // in case of null will call your instance tilesets method
    "tilesets": null,

    // specify filters for the app
    // can specify a resource or leave null
    // in case of null will call your instance filters method
    "filters": null,

    // specify tiles for the app
    // can specify a resource or leave null
    // in case of null will call your instance tiles method
    "tiles": null,

    // specify container template for your app
    // can specify a resource or leave null
    // in case of null will try to load default (ctr.htm)
    "containerTemplate": null,

    // can specify header here for your app
    "header": null,

    // data points
    // list all data points you app supports here, specify parameters:
    //  name: [by which to refer this data point]
    //  func: [func in your instance that holds the logic to fetch data]
    //  tags (optional): [array of values where you would like to bucket your data point into]
    //  exportable (optional): true/false
    dps: {},

    // can specify options here
    // options are visible as options to user which he can modify from the UI
    options: {},
};