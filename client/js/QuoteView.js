var QuoteView = Backbone.View.extend({
	initialize: function (options) {
		console.log(this.model.get('name'));
		$('.headerSection').html(this.model.get('name'));
	}
});