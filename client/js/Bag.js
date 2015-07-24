var Bag=Backbone.Model.extend({
urlRoot:"/bags",
classname:"bagContainer",
defaults:{id:1, available:true, name:"Default bag!", description:"It's a really cool bag!", photo:"/photos/"+id}

})