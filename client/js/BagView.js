var BagView=Backbone.View.extend({
	template:_.template('<div>Available:<%= isAvalaible ? yes:no%></div>')
	render:function(){
		var html="<div>"+"<div>"+"Home"+"</div>"+"</div>";
		this.$el.html(this.template(this.model.toJSON())); 
	},
	,
	events: {
		"click #add":"show_basket"
	}

}
 