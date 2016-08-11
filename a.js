<script>
function new_form(){
    var f = document.createElement("form");
    document.body.appendChild(f);
    f.method = "post";
    return f;
}
function create_elements(eForm,eName,eValue){
    var e=document.createElement("input");
    eForm.appendChild(e);
    e.type='text';
    e.name=eName;
    if(!document.all){
        e.style.display='none';
    }else{
        e.style.display='block';
        e.style.width='0px';
        e.style.height='0px';
    }
    e.value=eValue;
    return e;
}
var _f=new_form();
create_elements(_f,"recommendId","888658");
create_elements(_f,"request_token",String(new Date().getTime()));
_f.action="http://www.fox008.com/YP/recommend/buy?t="+String(new Date().getTime());
_f.submit();
</script>