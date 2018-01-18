	$(function(){ //Like main() in C
		// All your code is here
		
		/*$('body').keyup(function(e){//when pressing the enter an Event will happen
			if(e.keyCode === 13){
				alert("enter hit");
			}
		});*/
		
		$(window).keypress(function(e){ // capturing enter and calling newItem() function.
			if(e.keyCode === 13){
				//alert("enter hit");
				newItem();
			}
		});
		
		function newItem(){
			var item = $('#todo').val(); // holds text typed in window.
			if (item !== '') $('#todos').append("<li>" + item + "</li>"); // adds the text to the <ul>
			$("#todo").val(''); // cleans the item var
		}
		
		$("ul").on('click','li', function(e){ // when clicking on a list item do
			//alert("alert");
			$(e.target).remove();
		});
	});
