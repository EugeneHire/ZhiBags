var BagView=Backbone.View.extend({
	template:_.template('<div class="bag-photo"style="width:300px; height:300px; background-image:url(client/img/<%= imgUrl %>); display:inline-block;"></div><div style="width:50px; height:50px; display:inline-block;class="bag-id">Id:<%= id %></div><div class="bag-available">Available:<%= (quantity < 0) ? "yes" : "no" %></div><div  class="bag-name" style=" width:300px; height:100px; display:block; background-color:green; margin: auto;"><%= name %></div><div class="bag-description"  style=" width:400px; height:200px; display:block;background-color:black;  margin: auto; color:white"> <%= description %> </div>'),
	
	render:function(){
			this.$el.html(this.template(this.model.toJSON())); 
			return this;
	},

	events: {
		"click #add":"show_basket"
	}

});
 