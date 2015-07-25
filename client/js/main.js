// var quotesCollectionView = new QuotesCollectionView({ 
// 		// el: $('.headerSection')
// 	});
$(document).ready(function(){
var bags=new BagsCollection;
var BagsCollectionView=Backbone.View.extend({});
var bagsCollectionView = new BagsCollectionView({
	collection:bags,
	// $el:"#lel",
	render:function(){

		this.collection.forEach(this.addOne, this);
		},
	addOne: function(bag){
		var bagView =new BagView({model:bag});
		console.log("hai")
		this.$el.append(bagView.render().el);

	},
	initialize: function(){
		console.log(this.collection);
	}
});

bags.fetch();
bagsCollectionView.render()
console.log(bagsCollectionView.el);


});
