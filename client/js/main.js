// var quotesCollectionView = new QuotesCollectionView({ 
// 		// el: $('.headerSection')
// 	});
$(document).ready(function(){
var bags=new BagsCollection;
var BagsCollectionView=Backbone.View.extend({});
var bagsCollectionView = new BagsCollectionView({
	collection:bags,
	render:function(){
		this.collection.forEach(this.addOne, this)
	},
	addOne: function(bag){
		var bagView =new BagView({model:bag});
		this.$el.append(bagView.render().el);

	},
	initialize: function() {
    this.listenTo(this.model, "change", this.render);
  }
});

bags.fetch();
 bagsCollectionView.render();


});
