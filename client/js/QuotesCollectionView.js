var QuotesCollectionView = Backbone.View.extend({
	initialize: function() {
		this.collection = new QuotesCollection();
		this.render = function() {
			console.log("name")
		}
		this.collection.on('sync', this.render())
	}
})