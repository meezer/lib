$(function(){
	$("#molmenu1").click( function(){
		$("#tab_content2").css("display", "none");
		$("#tab_content1").fadeIn(1200);
		$("#tab_content2").fadeOut(1200);
	});
	

	$("#molmenu2").click( function(){
		$("#tab_content1").css("display", "none");
		$("#tab_content1").fadeOut(1200);
		$("#tab_content2").fadeIn(1200);
		
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

$(function(){var _showTab=0;var $defaultLi=$('ul.moltab li').eq(_showTab).addClass('active');$($defaultLi.find('a').attr('href')).siblings().hide();$('ul.moltab li').click(function(){var $this=$(this),_clickTab=$this.find('a').attr('href');$this.addClass('active').siblings('.active').removeClass('active');$(_clickTab).stop(false,true).fadeIn().siblings().hide();return false;}).find('a').focus(function(){this.blur();});});$(function(){$("#molmenu1").click(function(){$("#tab_content2").css("display","none");$("#tab_content1").fadeIn(1200);$("#tab_content2").fadeOut(1200);});$("#molmenu2").click(function(){$("#tab_content1").css("display","none");$("#tab_content1").fadeOut(1200);$("#tab_content2").fadeIn(1200);});});
