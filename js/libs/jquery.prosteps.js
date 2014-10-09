
$.fn.attrVal=function(attr){
var v,i,c=$(this).attr('class').split(' ');
for(i=0;i<c.length;i++){
if(c[i].indexOf(attr)==0){
v=c[i].replace(attr,'');
break;
}
}
return v;
};
$.fn.fakeClick=function(f){
return $(this).attr('hrefold',$(this).attr('href')).removeAttr('href').css('cursor','pointer').click(f);
};
