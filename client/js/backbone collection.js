var Quote = Backbone.Model.extend({
	defaults: {
		ID: "",
		text: "",
		name: ""
	}
	urlRoot: 'http://localhost:8080'
})