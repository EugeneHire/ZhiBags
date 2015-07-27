$(document).ready(function() {


$(".control").on("click", function(){

	var action=$(this).data("method")
	$.ajax({
		url:"/bags",
		type:action,
		data:"blah blah",
		success:function(data, textStatus, jqXHR){

			$("#post-result").html(data);
		}

		})
})




})