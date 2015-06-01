var QuotesCollection = Backbone.Collection.extend({
	model: Quote,
	url: "/quotes",
	initialize: function() {
		this.fetch();
	}
});