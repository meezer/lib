var appGetPermission = false;
$(document).ready(function() {
      //getRankWeb('/ranks/?zone=B','B');
      //getRankWeb('/ranks/?zone=C',"C");
      //getRankWeb('/ranks/?zone=D',"D");
});

function getRankWeb(apiurl,zone ,data) {
    var strURL = apiurl;
    var zoneInfo = zone
    $.ajax({
        url:strURL,
        type:'GET',
        dataType:'html',
        data: data,
        error: function(jqXHR, textStatus, errorThrown){
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    }).done(function(html){
        if (zoneInfo === 'B')
        {
            $('.nav_RankTypeWrapper, .nav_RankType').remove()
            $('#zoneA').after(html)
        }
        else if (zoneInfo === 'C')
        {
            $('.YourRankWrapper').remove()
            $('#zoneB').after(html)
        }
        else if (zoneInfo === 'D')
        {
            $('.BigThreeWrapper, .rankingWrapper').remove()
            $('#zoneC').after(html)
        }
    });
}

function getWeb(apiurl,type, data) {
	console.log(type)
    var strURL = apiurl;
    $.ajax({
        url:strURL,
        type:'GET',
        dataType:'html',
        data: data,
        error: function(jqXHR, textStatus, errorThrown){
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    }).done(function(html){
        if (type === 'act')
        {
        	$('#banner').hide();
            $('#newsContent').empty().append(html).show()
        }
        else if (type === 'rankContent')
        {
            $('#rankContent').empty().append(html).show()
        }
        else if (type === 'systemBoard')
        {
        	$('#banner').hide();
            $('#systemContent').empty().append(html).show()
        }
        else if (type === 'login')
        {
            $('body').empty().append(html)
        }
    });
}



function fbLogin(){
    if(!appGetPermission)
    {
        FB.login(function(response)
        {
            if(response.status=="not_authorized")
            {
                appGetPermission = false;
            }
            else if(response.status=="connected")
            {
                appGetPermission = true;
            }
        },{"scope":"email,publish_actions"})
    }
}

function getUrRank(){
    //1.判斷登入狀態
    //2.yes -> request server ,no -> pop login window -> 判斷登入狀態 -> request server
    //3.get rank data
    fbLogin();
    if (appGetPermission)
    {
        //1.取得FB id
        FB.api('/me', function(response) {
            var userFbId =  response.id
            alert('will send request to panda server');
            alert(userFbId);
         });
    }
    else
    {
        alert('Please Login FaceBook');
    }
}
