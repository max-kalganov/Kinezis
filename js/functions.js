jQuery(document).ready(function($) {
	a=parseFloat(0);// valor inccial para el background 1
	b=parseFloat(0);// valor inccial para el background 1
	c=parseFloat(400);// valor inccial para el background 2
	d=parseFloat(0);// valor inccial para el background 2
	var scrollTop = $(window).scrollTop();			
	var scroll_actually= new Array();// identifica los valoares del background X y  Y
	
	$(window).scroll(function(){//this is not the cleanest way to do this, I'm just keeping it short.
		if(scrollTop>$(this).scrollTop()) // desplazamiento hacia arriba
		{
			
			if (getScrollTop()<=900 && getScrollTop()>=0)// identyifica cuando la posicion del background_1 esta en scroll
			{
					a=getScrollTop()*3/4;// posicion del background1 decrementa en 35 pixeles
					// posicion de background1 decrementa en 15 pizeles 
					$('#first_space').css('backgroundPosition', '0% '+a+'px');	
			}
			if (getScrollTop()>=440 && getScrollTop()<=1900)// identyifica cuando la posicion del background_1 esta en scroll
			{
					a=(getScrollTop()-1145)*3/4;// posicion del background1 decrementa en 35 pixeles
					//1010
					$('#second_space').css('backgroundPosition', '0% '+a+'px');	
			}
			if (getScrollTop()>=880 && getScrollTop()<=3600)// identyifica cuando la posicion del background_1 esta en scroll
			{
					a=(getScrollTop()-2200)*3/4;// posicion del background1 decrementa en 35 pixeles
					//2100
					$('#third_space').css('backgroundPosition', '0% '+a+'px');	
			}
			if (getScrollTop()>=1320 && getScrollTop()<=5400)// identyifica cuando la posicion del background_1 esta en scroll
			{
					a=(getScrollTop()-4000)*3/4;// posicion del background1 decrementa en 35 pixeles
					//3900
					$('#forth_space').css('backgroundPosition', '0% '+a+'px');	
			}
			
		}
		else
		{// desplazamiento hacia  abajo
			if (getScrollTop()>=0 && getScrollTop()<=900)			
			{
				  a=getScrollTop()*3/4;// posicion del background1 incrementa en 35 pixeles
				  // posicion del background1 incrementa en 35 pixeles
				  $('#first_space').css('backgroundPosition', '0% '+a+'px');
				  $('.bk_0').css('backgroundPosition', '0 '+b+'px');				
		    }
			if (getScrollTop()>=300 && getScrollTop()<=1900)// identyifica cuando la posicion del background_1 esta en scroll
			{
					a=(getScrollTop()-1145)*3/4;// posicion del background1 decrementa en 35 pixeles
					// 1145 
					$('#second_space').css('backgroundPosition', '0% '+a+'px');	
			}
			if (getScrollTop()>=880 && getScrollTop()<=3600)// identyifica cuando la posicion del background_1 esta en scroll
			{
					a=(getScrollTop()-2200)*3/4;// posicion del background1 decrementa en 35 pixeles
					// 2232 
					$('#third_space').css('backgroundPosition', '0% '+a+'px');	
			}
			if (getScrollTop()>=1320 && getScrollTop()<=5400)// identyifica cuando la posicion del background_1 esta en scroll
			{
					a=(getScrollTop()-4000)*3/4;// posicion del background1 decrementa en 35 pixeles
					// 3389 
					
					$('#forth_space').css('backgroundPosition', '0% '+a+'px');	
			}
			
			
			/// 1145
				
	 	}
		if (getScrollTop()==0)// ajusta la posiciones y las reseatea en cero cuando hace scroll havciaa arriba
		{
			a=parseFloat(0);
			b=parseFloat(0);
			c=parseFloat(400);
			d=parseFloat(0);
			$('.bk_0').css('backgroundPosition', '0 0');	
			$('.bk_1').css('backgroundPosition', '0 0');				
   		    $('.img_2').css('backgroundPosition', '0% '+400+'px');			
   		    $('#first_space').css('backgroundPosition', '0% '+0+'px');						
		}
		if (getScrollTop()==900){
			b = -100;	
		}
	  scrollTop = $(this).scrollTop();		
	});
});
function getScrollTop(){ ///  verifica el calculo total en pixeles de toda la pagina

    if(typeof pageYOffset!= 'undefined'){
        //most browsers
        return pageYOffset;
    }
    else{
        var B= document.body; //IE 'quirks'
        var D= document.documentElement; //IE with doctype
        D= (D.clientHeight)? D: B;
        return D.scrollTop;
    }
}
