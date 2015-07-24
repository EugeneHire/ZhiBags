var QuotesCollectionView = Backbone.View.extend({
	initialize: function () {
		this.collection = new QuotesCollection();
		this.collection.on('sync', this.render, this);
		this.collection.fetch();
	},
	render: function () {
		_.each(this.collection.models, function(quote) {
			var quoteView = new QuoteView({model: quote})
			this.$el.append(quoteView.render());
		}, this);
	}
})