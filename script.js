// //Create'a'basic'HTML'page'with'no'styling'that'has'at'least'10'separate'
// //elements'on'it
// //Use'jQuery'to'create'an'animated'"show"!'Try'changing'an'element's'CSS,'
// //hiding,'showing,'fading,'and'sliding,'and'making'the'page'run'amok
// //Once'the'"show"'works,'rig'it'up'to'only'ﬁre'when'the'user'clicks'anywhere'
// //on'the'page
// //If'you'ﬁnish'this'exercise,'implement'jQuery'into'some'of'the'websites'you'
// //built'last'week'and'try'playing'around'with'some'other'funcKons:'hMp://
// //api.jquery.com/

////Belo: click on any picture and the paragraphs slid up

$(document).ready(function(){
// jquery magic happens here
	$('img').click(function(){
		$('p').slideUp(4000);
		// $('ul').fadeOut(6000);
	});

});

	////Below, when you click the h3 heading, the image fades out

$(document).ready(function(){
$('h3').click(function(){
		$('img').fadeOut(4000);
	});

});

	//// when you click h4, the picktures come back
$(document).ready(function(){
$('h4').click(function(){
		$('img').fadeIn(2000);
	});

});

	//// when you click the div for pback(h2), the pictures comes back
$(document).ready(function(){
$('.pback').click(function(){
		$('p').fadeIn(2000);
	});

});
////when you click the dive .2pig the second pic picture or the words below it
////, the alert of hey comes back
$(document).ready(function(){
$('.2pig').click(function(){
		alert("hey!");
	});

});
//// when you click h5, the words change to tell you it is changed
$(document).ready(function(){
$('h5').click(function(){
		$('h5').text("this has changed.");

	});

});


// //confused whats happening below

// 	// $(".menu").show(function(){
// 	// 	$(".menu").anumate({opacity:0.5});
// 	// };);



// //-----------lightbox try--------


$(document).ready(function() {

  // sets an event handler that responds to clicking an
  //  anchor
  $("a").on("click",function(){
    // gets the current element that was clicked
    //  then gets the value of the attribute "img-url"
    
    
    var imageUrl = $(this).data("img-url");

    $("#lightbox-image").attr('src', imageUrl);

    $(".lightbox").show();

    $(".lightbox").on("click",function(){
      $(".lightbox").hide();
    });

  });

});
