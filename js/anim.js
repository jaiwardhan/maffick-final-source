$(document).ready(function() {

	/** scroll refresh **/
	$(window).on('beforeunload', function() {
		$(this).scrollTop(0);
		$(this).scrollLeft(0);
	});
	/**/


   	$("#menucontainer a, #cssmenu a").bind("click",function(event){
       event.preventDefault();
       var target = $(this).attr("href");

       /********* MENU CONTROLLER ***********/
			if(target!='#home'){
       		//console.log('home is not here');
           	var winheight =  0.94*$(window).height();
           	//console.log('height is '+winheight);
           	$("#cssmenu").stop().animate({
           		top:winheight
           	}, 700);
           	
       }else{
       		//console.log('home IS here');
       		var winheight =  $(window).height();
           	//console.log('height is '+winheight);
           	$("#cssmenu").stop().animate({
           		top:winheight
           	}, 700);
           	
       }
       
	    /******** cssmenu active class controller ********/
	   	var ta;
	   	if(target=='#home'){
	   		ta=0;
	   	}else if(target=='#events'){
	   		ta=1;
	   	}else if(target=='#registration'){
	   		ta=2;
	   	}else if(target=='#pronites'){
	   		ta=3;
	   	}else if(target=='#sponsors'){
	   		ta=4;
	   	}else if(target=='#contact'){
	   		ta=5;
	   	}else{
	   		//do nothing
	   	}

	   	$('#cssmenu ul li').eq(ta).addClass('active');
	   	for (var i = 0; i < 6; i++) {
	   		if(i!=ta){
	   			$('#cssmenu ul li').eq(i).removeClass('active');
	   		}
	   	};

       /************ BOARD CONTROLLER ****************/
       if(target!='#events'){
       		var bheight = $(".board").offset().top;
       		//console.log('panel top height '+bheight);
       		$(".board").stop().animate({
       			top:-100
       		},1500);
       }else{
       		$(".board").stop().animate({
       			top:0
       		},2500);
       }	


       $("html, body").stop().animate({
           scrollLeft: $(target).offset().left,
		   scrollTop: $(target).offset().top
       }, 800);


       /***** Wave Motions Control ******/

       //console.log($(window).width()+"-->"+$(target).offset().left);
       var shiftWave1 = 0.1*$(window).width();
       var offsetWave1 = $(target).offset().left * 0.2;
       //console.log(-offsetWave1-shiftWave1);
       $(".wave1").stop().animate({
       		left : -offsetWave1-shiftWave1
       }, 1500);

       var shiftWave2 = 0.07*$(window).width();
       var offsetWave2 = $(target).offset().left * 0.05; 
       //console.log(-offsetWave2-shiftWave2);
       $(".wave2").stop().animate({
       		left : -offsetWave2-shiftWave2
       }, 1500);

       $(".island").stop().animate({left: -$(target).offset().left},1200);
       $(".social_baloon").stop().animate({left: -$(target).offset().left},1200);
    });
		
		
	/****** Home Slider Motion *********/
    $("#hometabs a").bind("click", function(event) {
    	event.preventDefault();
    	var holder = $(this).attr("href");
    	var adjust = 0.12*$(window).width();
    	console.log(adjust);
    	console.log($(holder).offset().left-adjust);
    	$("#overflow-wrapper").stop().animate({
    		left: "-="+($(holder).offset().left-adjust)
    	},800);
    });  


	/******* Home Page Menu Control ******/
	$("#box1").hover(
	function() {
		$(this).css("height","34%");
		$("#box2, #box3, #box4, #box5").css("height","15%");
	}, function () {
		$("#box1, #box2, #box3, #box4, #box5").css("height","19.0%");
		}
	);

	$("#box2").hover(
		function() {
			$(this).css("height","34%");
			$("#box1, #box3, #box4, #box5").css("height","15%");
		}, function () {
			$("#box1, #box2, #box3, #box4, #box5").css("height","19.0%");
		}
	);

	$("#box3").hover(
		function() {
			$(this).css("height","34%");
			$("#box1, #box2, #box4, #box5").css("height","15%");
		}, function () {
			$("#box1, #box2, #box3, #box4, #box5").css("height","19.0%");
		}
	);

	$("#box4").hover(
		function() {
			$(this).css("height","33%");
			$("#box1, #box2, #box3, #box5").css("height","15%");
		}, function () {
			$("#box1, #box2, #box3, #box4, #box5").css("height","19.0%");
		}
	);

	$("#box5").hover(
		function() {
			$(this).css("height","34%");
			$("#box1, #box2, #box3, #box4").css("height","15%");
		}, function () {
			$("#box1, #box2, #box3, #box4, #box5").css("height","19.0%");
		}
	);
	

	/** Events Page Top panel control ***/
	$("#pbox1 a").bind("click",function(event){
		event.preventDefault();
	   	/* up working **/
		var nhei = (((-1)*$("#pbox2").offset().top)-(2*$(window).height()));
		$("#pbox2,#pbox3,#pbox4,#pbox5").animate({
			top:nhei
		},600);
		var x=(-1)*($("#pbox1").offset().left-$("#panelcontainer").offset().left);
		$("#pbox1").stop().animate({
			left:x

		},600);
		console.log("dist from left is "+$("#pbox2").offset().left+' dist of panel is '+$("#secondpanel").offset().left+' dist of board is '+$("#board2").offset().left);
		/**/
	});
	$("#pbox2 a").bind("click",function(event){
		event.preventDefault();
	   	/* up working **/
		var nhei = (((-1)*$("#pbox1").offset().top)-(2*$(window).height()));
		$("#pbox1,#pbox3,#pbox4,#pbox5").stop().animate({
			top:nhei
		},600);
		//$("#pbox2,#secondpanel").css("z-index",6015);
		//$("#board2").css("z-index",6016);
		var x=(-1)*($("#pbox2").offset().left-$("#panelcontainer").offset().left);
		$("#pbox2").stop().animate({
			left:x
		},600);
		console.log("dist from left is "+$("#pbox2").offset().left+' dist of panel is '+$("#secondpanel").offset().left+' dist of board is '+$("#board2").offset().left);
		/**/
	});
	$("#pbox3 a").bind("click",function(event){
		event.preventDefault();
	   	/* up working **/
		var nhei = (((-1)*$("#pbox1").offset().top)-(2*$(window).height()));
		$("#pbox1,#pbox2,#pbox4,#pbox5").stop().animate({
			top:nhei
		},600);
		var x=(-1)*($("#pbox3").offset().left-$("#panelcontainer").offset().left);
		$("#pbox3").stop().animate({
			left:x
		},600);
		/**/
	});
	$("#pbox4 a").bind("click",function(event){
		event.preventDefault();
	   	/* up working **/
		var nhei = (((-1)*$("#pbox1").offset().top)-(2*$(window).height()));
		$("#pbox1,#pbox2,#pbox3,#pbox5").stop().animate({
			top:nhei
		},600);
		var x=(-1)*($("#pbox4").offset().left-$("#panelcontainer").offset().left);
		$("#pbox4").stop().animate({
			left:x
		},600);
		/**/
	});
	$("#pbox5 a").bind("click",function(event){
		event.preventDefault();
	   	/* up working **/
		var nhei = (((-1)*$("#pbox1").offset().top)-(2*$(window).height()));
		$("#pbox1,#pbox2,#pbox3,#pbox4").stop().animate({
			top:nhei
		},900);
		var x=(-1)*($("#pbox5").offset().left-$("#panelcontainer").offset().left);
		$("#pbox5").stop().animate({
			left:x
		},900);
		/**/
	});

	/***** Events Page Panel Description Display Control *********/

	$("#panelcontainer a").bind("click", function(event) {
		event.preventDefault();

		var targetpanel = $(this).attr("href");
		var target2 = $("#funevents");
		console.log($(targetpanel).css("top")); 

		if($(targetpanel).css("top")<"0")
		{
			$(targetpanel).stop().animate({
				top: "0%"
			}, 600);

			if(targetpanel=='#eventlist_other')
			{
				$(target2).stop().animate({
					top: "0%"
				}, 600);
			}
		}	
		else
		{
			$(targetpanel).stop().animate({
				top: "-100%"
			}, 600);

			if(targetpanel=='#eventlist_other')
			{
				$(target2).stop().animate({
					top: "-100%"
				}, 600);
			}

			close_accordion_section();
		}

	});



	/**** register button control *****/
	$("#regbutton").bind("click",function(event){
		event.preventDefault();
		//console.log('the top value is '+$("#regbutton").offset().top);
		//console.log('the outertrue form is '+$("#reg_embeddform").outerHeight(true)+' and outerh is '+$("#reg_embeddform").outerHeight());
		if($("#reg_embeddform").css('display')=='none')
			$("#reg_embeddform").css('display','block');
		else
			$("#reg_embeddform").css('display','none');

	});



	/** ripple plugin **/
	$('body').on( 'click', '.ripple-effect', function(e){
		// Ignore default behavior
		e.preventDefault();

		// Cache the selector
		var the_dom = $(this);

		// Get the limit for ripple effect
		var limit = the_dom.attr( 'data-ripple-limit' );

		// Get custom color for ripple effect
		var color = the_dom.attr( 'data-ripple-color' );
		if( typeof color == 'undefined' ){
			var color = 'rgba( 0, 0, 0, 0.5 )';
		}

		// Get ripple radius
		var radius = the_dom.attr( 'data-ripple-wrap-radius' );
		if( typeof radius == 'undefined' ){
			var radius = 0;
		}

		// Get the clicked element and the click positions
		if( typeof limit == 'undefined' ){	
			var the_dom_limit = the_dom;
		} else {
			var the_dom_limit = the_dom.closest( limit );
		}

		var the_dom_offset = the_dom_limit.offset();		
		var click_x = e.pageX;
		var click_y = e.pageY;

		// Get the width and the height of clicked element
		var the_dom_width = the_dom_limit.outerWidth();
		var the_dom_height = the_dom_limit.outerHeight();

		// Draw the ripple effect wrap
		var ripple_effect_wrap = $('<span class="ripple-effect-wrap"></span>');
		ripple_effect_wrap.css({
			'width' 			: the_dom_width,
			'height'			: the_dom_height,
			'position' 			: 'absolute',
			'top'			 	: the_dom_offset.top,
			'left'	 			: the_dom_offset.left,
			'z-index' 			: 100,
			'overflow' 			: 'hidden',
			'background-clip'	: 'padding-box',
			'-webkit-border-radius' : radius,
			'border-radius'		: radius
		});

		// Adding custom class, it is sometimes needed for customization
		var ripple_effect_wrap_class = the_dom.attr( 'data-ripple-wrap-class' );

		if( typeof ripple_effect_wrap_class != 'undefined' ){
			ripple_effect_wrap.addClass( ripple_effect_wrap_class );
		}

		// Append the ripple effect wrap
		ripple_effect_wrap.appendTo('body');
		
		// Determine the position of the click relative to the clicked element
		var click_x_ripple = click_x - the_dom_offset.left;
		var click_y_ripple = click_y - the_dom_offset.top;
		var circular_width = 1000;
		
		// Draw the ripple effect
		var ripple = $('<span class="ripple"></span>');
		ripple.css({
			'width' 						: circular_width,
			'height'						: circular_width,
			'background'					: color,
			'position'						: 'absolute',
			'top'							: click_y_ripple - ( circular_width / 2 ),
			'left'							: click_x_ripple - ( circular_width / 2 ),
			'content'						: '',
		    'background-clip' 				: 'padding-box',
		    '-webkit-border-radius'     	: '50%',
		    'border-radius'             	: '50%',
		    '-webkit-animation-name'		: 'ripple-animation',
		    'animation-name'              	: 'ripple-animation',
		    '-webkit-animation-duration'  	: '0.5s',
		    'animation-duration'          	: '0.5s',
		    '-webkit-animation-fill-mode' 	: 'both',
		    'animation-fill-mode'         	: 'both'  			
		});
		$('.ripple-effect-wrap:last').append( ripple );

		// Remove rippling component after half second
		setTimeout( function(){
			ripple_effect_wrap.fadeOut(function(){
				$(this).remove();
			});
		}, 100 );	

		// Get the href
		var href = the_dom.attr('href');

		// Safari appears to ignore all the effect if the clicked link is not prevented using preventDefault()
		// To overcome this, preventDefault any clicked link
		// If this isn't hash, redirect to the given link
		if( typeof href != 'undefined' && href.substring(0, 1) != '#' ){
			setTimeout( function(){
				window.location = href;
			}, 200 );
		}

		// Ugly manual hack to fix input issue
		if( the_dom.is('input') || the_dom.is('button') ){
			setTimeout( function(){
				the_dom.removeClass('ripple-effect');
				the_dom.trigger('click');
				the_dom.addClass('ripple-effect');
			}, 200 );
		}

	});	

	/** sponsor animations **/
	$(".sponsor-logo").bind("click",function(event){
		/** first hide all exisiting visible panels **/
		for(i=0;i<=10;++i){
			$("#desc"+i).addClass('sponsor-hide-panel');
		}
		clicked = $(this).attr('id');
		lastchar = clicked.charAt(7);
		secondlastchar= clicked.charAt(6);
		lastchar = parseInt(secondlastchar)*10+parseInt(lastchar);
		console.log("the clicked name is "+clicked);
		console.log("the last char is "+lastchar);
		$("#sponsor-control-panel").animate({
			marginLeft:"-1%"
		},50);
		$("#sponsor-control-panel").animate({
			marginLeft:"1%"
		},100);
		$("#sponsor-control-panel").animate({
			marginLeft:"-1%"
		},100);
		$("#sponsor-control-panel").animate({
			marginLeft:"1%"
		},100);
		$("#sponsor-control-panel").animate({
			marginLeft:"-1%"
		},100);
		$("#sponsor-control-panel").animate({
			marginLeft:"0%"
		},50);
		$("#desc"+lastchar).delay(2000).removeClass('sponsor-hide-panel');
	});

	/** cross click -- closes all sponsor panels **/
	$(".cross").bind("click",function(event){
		for(i=0;i<=10;++i){
			$("#desc"+i).addClass('sponsor-hide-panel');
		}
		$("#sponsor-control-panel").animate({
			marginTop:"3%"
		});
	});
});

function setInvisible(){
	$("#desc"+i).addClass('sponsor-hide-panel');
}
