var QuoteView = Backbone.View.extend({
	initialize: function (options) {
		this.model = options.model;
		console.log(this.model.name);
	}
});