$(function(){

	$('.coingemsPanel').each(function(){

		var tab1 = $(this).find('.molmenu1');
		var tab2 = $(this).find('.molmenu2');

		tab1.addClass('active');

		var subPanel = $(this).find('.molist');

		console.log($(this));

		subPanel.eq(0).show();
		subPanel.eq(1).hide();

		tab1.click(function(){

			console.log(subPanel);

			subPanel.eq(1).hide();
			subPanel.eq(0).fadeIn(500);
		});
		tab2.click(function(){
			subPanel.eq(0).hide();
			subPanel.eq(1).fadeIn(500);
		});

	});

    $('.payWayListWrapper').each(function(){

        fat = $(this);
        var ulSlider = $(this).find('ul') ;
        ulSlider.css('display','none');
        ulSlider.eq(0).css('display','block');
        ulSlider.eq(0).addClass('current');
        if (ulSlider.length<2) return ;

        pImg = $('<img />').attr('src','../static/images/icon_arrowleft.png');
        nImg = $('<img />').attr('src','../static/images/icon_arrowright.png');
        prev = $('<div />').addClass('control-prev-btn');
        next = $('<div />').addClass('control-next-btn');

        btnControl = $('<div />').addClass('blk_btn');
        btnControl.append(prev.append(pImg));
        btnControl.append(next.append(nImg));
        $(this).append(btnControl);

        pImg.click(function(){
            var index = 0 ;
            for(var i=0;i<ulSlider.length;i++) {
                if ( $(ulSlider[i]).attr('class').indexOf('current')>=0){
                    $(ulSlider[i]).removeClass('current');
                    index = i ;
                    break;
                }
            }

            if (index==0){
                $(ulSlider[index]).addClass('current');
                return false ;
            }

            index = index - 1 ;

            $(ulSlider).css("display", "none");
            $(ulSlider[index]).addClass('current');
            $(ulSlider[index]).fadeIn(600);

        });

        nImg.click(function(){
            var index = 0 ;
            for(var i=0;i<ulSlider.length;i++) {
                if ($(ulSlider[i]).attr('class').indexOf('current')>=0){
                    $(ulSlider[i]).removeClass('current');
                    index = i ;
                    break;
                }
            }

            if (index==ulSlider.length-1){
                $(ulSlider[index]).addClass('current');
                return false ;
            }

            index = index + 1 ;

            $(ulSlider).css("display", "none");
            $(ulSlider[index]).addClass('current');
            $(ulSlider[index]).fadeIn(600);

        });


    });
});
