require.config({
    baseUrl:"./js/app",
    // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
    // probably a good idea to keep version numbers in the file names for updates checking
    paths:{
        // Core Libraries
        "jquery":"../libs/jquery",
        //"jqueryui":"../libs/jqueryui",
        "underscore":"../libs/lodash",
        "backbone":"../libs/backbone",
		'backbone.wreqr' : '../libs/backbone.wreqr',
		'backbone.babysitter' : '../libs/backbone.babysitter',
        "marionette":"../libs/backbone.marionette",
        "handlebars":"../libs/handlebars",
		
		//JST Templates
		"jst": "jst/templates",

        // Plugins
        "backbone.validateAll":"../libs/plugins/Backbone.validateAll",
        //"bootstrap":"../libs/plugins/bootstrap",
        "text":"../libs/plugins/text"
    },
    // Sets the configuration for your third party scripts that are not AMD compatible
    shim:{
        //"bootstrap":["jquery"],
        //"jqueryui":["jquery"],
        "backbone":{
            "deps":["underscore"],
            // Exports the global window.Backbone object
            "exports":"Backbone"
        },
		"backbone.babysitter":{
			"deps":["backbone"],
			"exports":"backbone.babysitter"
		},
		"backbone.wreqr":{
			"deps":["backbone"],
			"exports":"backbone.wreqr"
		},
        "handlebars":{
            "exports":"Handlebars"
        },
        // Backbone.validateAll plugin (https://github.com/gfranko/Backbone.validateAll)
        "backbone.validateAll":["backbone"],
		//JST templates
		"jst":{
            "exports": "JST"
        }
    }
});

// Includes Desktop Specific JavaScript files here (or inside of your Desktop router)
requirejs(["App", "routers/AppRouter", "controllers/Controller",  "jquery", /*"jqueryui",*/ /*"bootstrap",*/ "backbone.validateAll"],
    function (App, AppRouter, Controller) {
        App.appRouter = new AppRouter({
            controller:new Controller()
        });
        App.start();
    });