var app = {
	models : {
		"slider" : {
			type : "SliderModel",
			options : {
				value : .5
			}
		}
	},

	collections : {
		"list" : {
			type : "ListItemCollection",
			options : {}
		}
	},

	views : {
		"slider" : {
			type : "SliderView",
			options : {
				model : "#model-slider",
				top : 10,
				left : 10,
				width : 600,
				height : 100,
				diameter : 30,
				equation : function(x) {return (Math.cos( x * Math.PI * 2 + Math.PI ) / 2 + .5)}
			}
		},

		"list" : {
			type : "ListView",
			options : {
				data: "#collection-list",
				slider: "#model-slider",
				top: 100,
				left: 200,
				width: 300,
				height: 200
			}
		}
	},

	beforeRender : function(app) {
		app.collections.list.set([
			{text: 'First'},
			{text: 'Second'},
			{text: 'Third'},
			{text: 'Fourth'},
			{text: 'Fifth'},
			{text: 'Sixth'},
			{text: 'Seventh'},
			{text: 'Eighth'},
			{text: 'First'},
			{text: 'Second'},
			{text: 'Third'},
			{text: 'Fourth'},
			{text: 'Fifth'},
			{text: 'Sixth'},
			{text: 'Seventh'},
			{text: 'Eighth'},
			{text: 'First'},
			{text: 'Second'},
			{text: 'Third'},
			{text: 'Fourth'},
			{text: 'Fifth'},
			{text: 'Sixth'},
			{text: 'Seventh'},
			{text: 'Eighth'}
		]);
	},

	afterRender : function(app) {
		
	}
}