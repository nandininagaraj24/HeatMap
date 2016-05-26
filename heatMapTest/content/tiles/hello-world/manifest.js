module.exports = {

    // used as display name for app
    title: "Hello World DS Widget",

    // list of params that your app supports/can support
    // changing params can at runtime change the behavior of tile/widget
    params: {
        name: "John"
    },

    // specify how to uniquely identify your tile
    // can be a function or null
    // ex: function(params){ return params.name; },
    guid: null,

    // specify data for the app
    // can specify a resource or leave null
    // in case of null will call your instance data method
    data: null,

    // specify container template for your app
    // can specify a resource or leave null
    // in case of null will try to load default (ctr.htm)
    view: null,

    // specify container template for your app
    // can specify a resource or leave null
    // in case of null will try to load default (ctr.htm)
    containerTemplate: null
};