var QuotesCollectionView = Backbone.View.extend({
	initialize: function () {
		this.collection = new QuotesCollection();
		this.collection.on('sync', this.render, this);
		this.collection.fetch();
	},
	render: function () {
		this.collection.each(function(quote) {
			var quoteView = new QuoteView({model: quote})
			quoteView.render();
		});
	}
})