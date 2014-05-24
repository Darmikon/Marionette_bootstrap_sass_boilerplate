//define([ '../../libs/backbone.marionette', 'jst'],
define(['marionette', 'jst'],
    function (Marionette, JST) {
	 console.log('123123');
        //ItemView provides some default rendering logic
        return Marionette.ItemView.extend({
            template:JST.header()
        });
    });