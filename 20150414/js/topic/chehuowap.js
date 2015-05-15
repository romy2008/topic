$(document).ready(function() {

var swiperHeight = $("body").width()*1.776;
$(".swiper-container").css('height',swiperHeight);

$(".crumbs").css('height',$(".swiper-container").height()*0.0664);
$(".crumbs").css('border-bottom-width',$(".swiper-container").height()*0.0039);

$(".p2-1").css('top',$(".swiper-container").height()*0.202);
$(".p3-1").css('top',$(".swiper-container").height()*0.202);
$(".p4-1").css('top',$(".swiper-container").height()*0.202);

$(".p8 ul").css('top',$(".swiper-container").height()*0.345);

$(".p10 ul.votePlugin").css('top',$(".swiper-container").height()*0.505);

  });

var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	paginationClickable: false,
	direction: 'vertical',
		    onSlideChangeEnd:function(swiper) {
		      var index = swiper.activeIndex;
			  var page = $(".p"+(index+1));
		      var obj = $(".swiper-slide");
			  
		      obj.find(".aniClassBinL").removeClass("animated bounceInLeft");
		      page.find(".aniClassBinL").addClass('animated bounceInLeft');

		      obj.find(".aniClassBinU").removeClass("animated bounceInUp");
		      page.find(".aniClassBinU").addClass('animated bounceInUp');
			  
		      obj.find(".aniClassShake").removeClass("animated shake");
		      page.find(".aniClassShake").addClass('animated shake');
			  
		      obj.find(".aniClassBinD").removeClass("animated bounceInDown");
		      page.find(".aniClassBinD").addClass('animated bounceInDown');

		  	} 
});
