var BagsCollectionView=Backbone.View.extend({
  
  render:function(){
    this.collection.forEach(this.addOne, this)
  },

  addOne: function(bag){
    var bagView =new BagView({model:bag});
    this.$el.append(bagView.render().el);

  },

  initialize: function() {
    this.collection.on("sync", this.render, this)
    this.collection.fetch();
  }
});