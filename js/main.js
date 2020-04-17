jQuery(document).ready(function( $ ) {


    


         $('svg.radial-progress').each(function( index, value ) { 
        $(this).find($('circle.complete')).removeAttr( 'style' );
    });

    // Activate progress animation on scroll
    $(window).scroll(function(){
        $('svg.radial-progress').each(function( index, value ) { 
            // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
            if ( 
                $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
                $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
            ) {
                // Get percentage of progress
                percent = $(value).data('percentage');
                // Get radius of the svg's circle.complete
                radius = $(this).find($('circle.complete')).attr('r');
                // Get circumference (2πr)
                circumference = 2 * Math.PI * radius;
                // Get stroke-dashoffset value based on the percentage of the circumference
                strokeDashOffset = circumference - ((percent * circumference) / 100);
                // Transition progress for 1.25 seconds
                $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
            }
        });
    }).trigger('scroll');




    // For smoth scroll
	var scrollLink = $('.scroll');
    	scrollLink.click(function(e) {
    		e.preventDefault();
    		$('body,html').animate({
    			scrollTop: $(this.hash).offset().top
    		}, 1000);
    	});



    //banner parallax
    $('.banner').parallax('50%', .4);

        //For counter
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });


        var myVar;

        function myFunction() {
            myVar = setTimeout(showPage, 3000);
        }

        function showPage() {
          document.getElementById("loader").style.display = "none";
          document.getElementById("myDiv").style.display = "block";
        };


        // For baner rimple
        $('.banner').ripples({
            resolution: 512,
            dropRadius: 20,
            perturbance: 0.06,
        });

        //for preloader
        $("#loaderr").fadeOut(2000);
        $("#load").delay(3000).fadeOut("slow");




    });