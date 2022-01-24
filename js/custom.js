$(document).ready(function(){
    
    
    
 $('#show-link').click(function(){
  $('#show').show('normal');
  $('.hideWrap').addClass('active');
   return false;
     
 });
     $('#hide-link').click(function(){
  $('#show').hide('normal');
  $('.hideWrap').removeClass('active');
  return false;
 });
    
    

$('.openTest').on("click", function() {
	$('#openModal').fadeIn();
});  
$('.close, .closeBg').on("click", function() {
	$('.modal').fadeOut();
});  
    
    
    
    $(function() {

			var $tabs = $('#tabs').tabs();
	
			$(".ui-tabs-panel").each(function(i){
	
			  var totalSize = $(".ui-tabs-panel").size() - 1;
	
			  if (i != totalSize) {
			      next = i + 2;
		   		  $(this).append("<a href='#' class='next-tab mover' rel='" + next + "'>Далее</a>");
			  }
			  else {
			  	$(this).append("<a class='otherButton finish'>Завершить</a>");
			  	$('.otherButton.finish').on("click", function() {
			  		$('#openModal').fadeOut();
			  		$('#openModal2').fadeIn();
			  	});
			  }
	  
//			  if (i != 0) {
//			      prev = i;
//		   		  $(this).append("<a href='#' class='prev-tab mover' rel='" + prev + "'>&#171; Prev Page</a>");
//			  }
   		
			});
	
			$('.next-tab, .prev-tab').click(function() { 
		           $tabs.tabs('select', $(this).attr("rel"));
		           return false;
		       });
       

		});
    
    
	var input = document.getElementById('inp'),
   		result = $('#result, #result_mini');
   //var result = document.getElementById('result'); 
    
    input.onkeyup =  input.oncopy = input.onpaste = input.oncut = (function() {
    return function() {
        //result.html(this.value);
        var text = this.value,
        	//textMass = text.split(' '),
        	textMass = [],
        	newStr = '';

		for (var i = 0; i < text.length; i+=10) {
		    textMass.push(text.slice(i, i + 10));
		}

        $.each(textMass,function(index,value){
        	if (index <=1) newStr = newStr + '<p>'+value+'</p><br>';
		});

		result.html(newStr);
    }
})();
    
    
    
    
    
    
    
    
    
    
    
});
