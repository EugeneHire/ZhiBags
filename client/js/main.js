var quotesCollectionView = new QuotesCollectionView({ 
		el: $('.headerSection')
	});

var bags=new BagsCollection;
var BagsCollectionView=Backbone.View.extend({});
var bagsCollectionView = new BagsCollectionView({
	collection:bags,
	render:funcion(){
		this.collection.forEach(this.addOne, this)
	},
	addOne: function(bag){
		var bagView =new BagView({model:bag});
		this.$el.append(bagView.render().el);

	}
});
