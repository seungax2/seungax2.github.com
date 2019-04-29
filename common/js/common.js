$(window).load(function(){
	var filter = "win16|win32|win64|mac|macintel";
	if ( navigator.platform ) { 
		if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) { 
//			console.log('mobile 접속'); 
			$(".header").height("15vw");
			$(".content").addClass("Conmo");
			$(".content.gallery .smallView .imgWrap").css("max-height","75vh");
		} else { 
//			console.log('pc 접속');
			$(".header").height("60px");
			$(".content").addClass("Conpc");
			var flexGallery = $(".gallery").height()*0.95;
			$(".content.gallery .smallView .imgWrap").css("max-height",flexGallery);
			
			var flexWGallery = $(".Wgallery").height()*0.95;
			$(".content.Wgallery .smallView .imgWrap").css("max-height",flexWGallery);
		}
		
	}
	
	$(".hrefBtn").on("click",function(){
        var link = $(this).data("href");
        location.href=link;
    });
	
});

function loading_check(){
	$(document).ready(function() {
		setTimeout(function(){
			$(".comLoadingWrap_Gallery").hide();
			$(".content").removeClass("noscroll");
		},2000);
	});
}

