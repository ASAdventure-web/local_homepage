$.fn.attrVal=function(r){var t,e,f=$(this).attr("class").split(" ");for(e=0;e<f.length;e++)if(0==f[e].indexOf(r)){t=f[e].replace(r,"");break}return t},$.fn.fakeClick=function(r){return $(this).attr("hrefold",$(this).attr("href")).removeAttr("href").css("cursor","pointer").click(r)};