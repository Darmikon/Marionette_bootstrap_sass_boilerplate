this["JST"] = this["JST"] || {};

this["JST"]["header"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="navbar nav"><div class="navbar-inner"><a class="brand" href="#">Marionette-Almond-Compass-Boilerplate (MACB)</a><ul class="nav"><li class="active"><a href="#">Home</a></li><li><a href="#">Elsewhere</a></li></ul></div></div>';

}
return __p
};

this["JST"]["welcome"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="hero-unit">\n<h1>Marionette-Compass-Boilerplate Lite</h1>\n<p>Marionette Boilerplate application to get you off the ground fast.</p><p class="muted">\nYou are viewing this application on\n{{#if mobile}}\n<strong>Mobile</strong>\n{{else}}\n<strong>Desktop</strong>\n{{/if}}.\n</p>\n<br/>\n</div><table class="table table-bordered">\n<tr>\n<td>1</td>\n<td>2</td>\n<td>3</td>\n</tr>\n<tr>\n<td>1</td>\n<td>2</td>\n<td>3</td>\n</tr>\n<tr>\n<td>1</td>\n<td>2</td>\n<td>3</td>\n</tr>\n<tr>\n<td>1</td>\n<td>2</td>\n<td>3</td>\n</tr>\n</table>';

}
return __p
};