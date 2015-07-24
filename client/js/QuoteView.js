var QuoteView = Backbone.View.extend({
	initialize: function (options) {
		console.log(this.model.get('name'));
	},
	render: function () {
		var tpl = _.template('<h1 class="quotename">Quotename: <%= name %></h1>');
		this.$el.html(tpl({name: this.model.get('name')}));
		return this.$el;
	},
	events: {'click': 'remove'}
});