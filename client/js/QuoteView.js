var QuoteView = Backbone.View.extend({
	initialize: function (options) {
		console.log(this.model.get('name'));
		$('div.headerSection u-fullWidth').html(this.model.get('name'));
	}
});