var QuoteView = Backbone.View.extend({
	initialize: function (options) {
		console.log(this.model.get('name'));
	},
	render: function () {
		this.$el.html(this.model.get('name'));
	}
});