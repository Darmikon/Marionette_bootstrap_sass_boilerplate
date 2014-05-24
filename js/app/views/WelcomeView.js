//define( [ 'App', '../../libs/backbone.marionette', 'handlebars', 'models/Model', 'text!templates/welcome.html'],
define( [ 'App', 'marionette', 'handlebars', 'models/Model', 'text!templates/welcome.html'],
    function( App, Marionette, Handlebars, Model, template) {
        //ItemView provides some default rendering logic
        return Marionette.ItemView.extend( {
            //Template HTML string
            template: Handlebars.compile(template),
            model: new Model({
                mobile: App.mobile
            }),

            // View Event Handlers
            events: {

            }
        });
    });