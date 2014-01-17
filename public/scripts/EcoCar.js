var EcoCar = {
	render : function(app) {
		$.each(app.views, function(index, view) {
			$(document.body).append(view.el);
			view.render();
		});
	},

	parseID : function(app, string) {
		// if starts with #
		if (_.isString(string) && !string.indexOf("#") && string.indexOf('-') > 0) {
			var path = string.slice(1).split('-');
			if (app[path[0]+"s"] && app[path[0]+"s"][path[1]]) {
				return app[path[0]+"s"][path[1]];
			}
		}
		return string;
	},

	construct : function(data) {
		data = _.defaults(data, {
			models : {},
			collections : {},
			views : {},
			beforeRender : function(){},
			afterRender : function(){}
		});

		var app = {
			models : {},
			collections : {},
			views : {}
		}

		$.each(['models', 'collections', 'views'], function(index, property) {
			$.each(data[property], function(key, value) {
				if (!window[value.type]) {
					throw "Object " + value.type + ' is not defined.';
				} else if (app[property][key]) {
					throw value.type + ': ' + key + ' already exists.';
				} else {
					_.each(value.options, function(value, key, list) {
						list[key] = EcoCar.parseID(app, value);
					});

					app[property][key] = new window[value.type](value.options);
				}
			});
		});

		data.beforeRender(app);
		this.render(app);
		data.afterRender(app);
	}
}