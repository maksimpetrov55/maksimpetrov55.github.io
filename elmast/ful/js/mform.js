var visiteduuid = '-';	
var referrer = '-';
var reference = '-';

$(function(){
	setTimeout(function(){
		try {
		$.ajax({
			url: "ap_s/v.php",
			data: ('ref='+document.referrer),
			dataType: "jsonp",
		success: function (data, textStatus) {
			if (data.error=="0"){
			}
		else {
			//alert('Error!');
			}
		},
		error:
		function (request, status, error) {
			//alert('Error!');//alert(request.responseText);
			;
			}
		});
		}catch (e) {}
	},1000); 
});
		



		function field_focus(event){
    $(event).addClass('edit_f_te');
    if (event.value == $(event).attr('defval')) {
        if($(event).hasClass('phone-code')) {
            event.value = "+";
        } else {
            event.value = "";
        }
    }
}
function field_blur(event){

    if (event.value == '' || event.value == '+') {
        event.value = $(event).attr('defval');
        $(event).removeClass('edit_f_te');
    }

}

function _onfocus(event){
    field_focus(event);
}

function _onblur(event){
    field_blur(event);
}
		


	function pushmsg(event) {
                var str = 'p=1';
				var sform=null; var ft='';
				var v = 0;
				var errors = "";
				$(".form_errors").html('');
				$(event).parents('form').each(function(){
					sform =  this;
				});

				
                //sform =  $(event).parent();
var p = $(sform).find("[sf='phone']");

				if (!$(p).attr('sname'))

				$(sform).find("[sf='phone']").val(
					$(sform).find("[sname='Код страны']").val() +
					$(sform).find("[sname='Код оператора']").val() +  
					$(sform).find("[sname='Номер']").val() 
				);
				// vemail="true"
				$(sform).find("input[vemail*='true']").each(function(){
					if (validate($(this).val())==false){
						$(this).addClass('edit_f_error');
						v = 1;
						
					}
				});
				
				$(sform).find("input[vphone='true']").each(function(){
					if (validatephone($(this).val())==false){
						$(this).addClass('edit_f_error');
						v = 1;
					}
				});	
				
				
				
				
				
				
				$(sform).find("input[type='text'], textarea, select").each(function(){
                    if($(this).hasClass('upfname')) {
                        str +=  "&" + $(this).attr('id')+'='+encodeURIComponent(
                            (($(this).attr('sname')!=null)?$(this).attr('sname'):$(this).attr('defval'))
                            +':;:'+ document.location + 'uploads/' + $(this).val());
                    } else {
                        str +=  "&" + $(this).attr('id')+'='+encodeURIComponent(
                            (($(this).attr('sname')!=null)?$(this).attr('sname'):$(this).attr('defval'))
                            +':;:'+$(this).val());
                    }

					if (($(this).attr('defval')==$(this).val()) && ($(this).attr('require')!=null)){
						$(this).addClass('edit_f_error');
						errors += "<p>Заполните поле '"+$(this).attr('sname')+"'.</p>";
						v = 1;	
					}

					if(errors.length > 0) {

                        setTimeout(function () {

                            $(".form_errors").html(errors);
                        }, 1);
                        setTimeout(function () {

                            $(".form_errors").html('');
                        }, 10000);
                    }
				});


				$(sform).find("input[type='radio']:checked, input[type='checkbox']:checked").each(function(){
					str += "&" + $(this).attr('id')+'='+encodeURIComponent(
					(($(this).attr('sname')!=null)?$(this).attr('sname'):$(this).attr('defval'))
					+':;:'+$(this).val());
				}); 

				if (v==1) return;
				
				referrer = '';
				if (self==top) {
					referrer = document.referrer;

				if (referrer==null)
					referrer = '';
				}else{
					referrer = parent.document.referrer;
					if (referrer==null)
						referrer = '';
				}
				str+= '&referrer=referrer: '+encodeURIComponent(referrer);
				str+= '&url=url: '+encodeURIComponent(document.location);

				ft = $(sform).find('.label_to').text();
				
				$(sform).children().hide();
				$(sform).find(".progressimg").show();
				
				
				str +=  "&" + generateGuid()+'='+encodeURIComponent('Сайт:'+': '+location.hostname);

				str +=  "&tmes=" + encodeURIComponent(ft);
				

                $.ajax({
                    url: "ap_s/apushmsg.php",
                    data: str,
                    dataType: "jsonp",
                    success: function (data, textStatus) {
                      	 	if (data.error=="0"){

                       	 				$(sform).find(".progressimg").hide();
							$(sform).find('.label_sndok').show();
							$(sform).find('a[goal="true"]').click();
							putorder();
								}
                        	else {
								$(sform).find('.label_sndok').show();
                        	}		
                    },
                     error: 
					 function (request, status, error) {
        				alert('Error!');//alert(request.responseText);
    			}
				/*	 function () {
                        alert('Error!');
                    }*/
                });
}


	function validate(address) {
	   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	   if(reg.test(address) == false) {
		  return false;
	   }
	   return true;
	}
	

	function validatephone(phone) {
		var reg = /^\+?[+\-()\s\d]+$/;
		return reg.test(phone);
	}	

	
		
	function generateGuid() {
	    var result, i, j;
	    result = '';
	    for(j=0; j<32; j++) {
	        if( j == 8 || j == 12|| j == 16|| j == 20)
	            result = result + '-';
	        i = Math.floor(Math.random()*16).toString(16).toUpperCase();
	        result = result + i;
	    }
	    return result;
	}
	
	
	function bmf(){
	
		$("form").each(function(){
			$(this).find("input[type='text'], textarea").bind('focus', function() {
				_onfocus(this);
			});

			$(this).find("input[type='text'], textarea").bind('blur', function() {
				_onblur(this);
			});
			
			$(this).find('*').each(function(){
					if ($(this).attr('id')==null){
						$(this).attr('id',generateGuid() );
					} 
				});
			$(this).find("input[type='text'], textarea").each(function(){
						if ($(this).attr('sname')==null){
						$(this).attr('sname',$(this).attr('defval'));
					}
				});				
		});
	}
	
	function init_forms(){
		bmf();
	}
	
	$(function(){
               init_forms();


		if (document.cookie.indexOf("visiteduuid") >= 0) {
			visiteduuid = getCookie('visiteduuid');
		}
		else {
		  // set a new cookie
		  expiry = new Date();
		  expiry.setTime(expiry.getTime()+(360*24*60*60*1000)); 
		  visiteduuid = guid();
		  // Date()'s toGMTSting() method will format the date correctly for a cookie
		  document.cookie = "visiteduuid="+visiteduuid+"; expires=" + expiry.toGMTString();

		}


		referrer = '';
				if (self==top) {
					referrer = document.referrer;

				if (referrer==null)
					referrer = '';
				}else{
					referrer = parent.document.referrer;
					if (referrer==null)
						referrer = '';
				}
		referrer = encodeURIComponent(referrer); 
		reference = encodeURIComponent(document.location); 

		putvisit();	  
    });

function putvisit(){
var inv = {};
inv ={
	site:location.hostname,
	referrer:referrer,
	reference:reference,
	cookie:visiteduuid,
	visit:1,
	order:0
};
$.ajax({
	url: "http://landingpage.club/p/index.php",
	data: {data: JSON.stringify(inv)} ,
	dataType: "jsonp",
		success: function (data, textStatus) {
		
		 },
		error: 
		function (request, status, error) {
						
		}
});

}
function putorder(){
var inv = {};
inv ={
	site:location.hostname,
	referrer:referrer,
	reference:reference,
	cookie:visiteduuid,
	visit:0,
	order:1
};
$.ajax({
	url: "http://landingpage.club/p/index.php",
	data: {data: JSON.stringify(inv)} ,
	dataType: "jsonp",
		success: function (data, textStatus) {
		
		 },
		error: 
		function (request, status, error) {
						
		}
});

}

 function getCookie(name) { var re = new RegExp(name + "=([^;]+)"); var value = re.exec(document.cookie); return (value != null) ? unescape(value[1]) : null; }

var guid = (function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
  }
  return function() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
           s4() + '-' + s4() + s4() + s4();
  };
})();
