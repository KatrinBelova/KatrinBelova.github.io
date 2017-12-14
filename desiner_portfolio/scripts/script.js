$(function(){
	



/******************** responsive menu*/

$('.responsive-menu').on('click', function(){
	$('.nav').toggleClass('active-menu');
	$(this).toggleClass('active-button-menu');
})

/********************** clickble NAV */
var lastId,
        topMenu = $(".nav"),
        topMenuHeight = topMenu.outerHeight()+55, 
        menuItems = topMenu.find("a"), 
        scrollItems = menuItems.map(function(){    
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });


    menuItems.click(function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 1000);
        e.preventDefault();
    });


$(window).scroll(function(){
        // Получить позицию прокрутки контейнера
        var fromTop = $(this).scrollTop()+topMenuHeight;
        // Получить идентификатор текущего элемента прокрутки
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Получить идентификатор текущего элемента
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Установить / удалить активный класс
            menuItems
                .parent().removeClass("current")
                .end().filter("[href="+'\"'+"#"+id+'\"'+"]").parent().addClass("current");
        }
/********************** sticky nav */


	if($(document).scrollTop() > 70) {

			$('.header').addClass('header-top');
		} else {

			$('.header').removeClass('header-top');
		}

		if($(document).scrollTop() > 170) {

			$('.header').addClass('fixed-header');
		} else {

			$('.header').removeClass('fixed-header');
		}

	});

/********************** load more button */
	
	$(function(){
		$(".portfolio__item").slice(0,3).show();
		$(".load-more").on('click', function(e){
			e.preventDefault();
			$(".portfolio__item:hidden").slice(0,1).slideDown("linear");
			if ($('.portfolio__item:hidden').length == 0) {
				$(this).fadeOut('slow');
			}

		})
	});

});
