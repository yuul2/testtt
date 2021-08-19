$('.goust').click(function(){
  $('.m-menu').slideToggle(500)
});
$('.sec01').click(function(){
  $('.m-menu').slideUp(500);
})
$('.sec02').click(function(){
  $('.m-menu').slideUp(500);
})
$('.sec03').click(function(){
  $('.m-menu').slideUp(500);
})
$('.sec04').click(function(){
  $('.m-menu').slideUp(500);
})
$('.sec05').click(function(){
  $('.m-menu').slideUp(500);
})
//여기까지 반응형 header
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
    
  });
  // 여기까지 슬라이드

  var swiper = new Swiper(".mySwiper02", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
    breakpointsInverse: true,
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			480: {
				slidesPerView: 1,
				spaceBetween: 30
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 20
			}
		}
    
  });
    // 여기까지 반응형 슬라이드

// section02 슬라이드 끝!!!!!!!

let wave1 = document.getElementById('wave1');

        window.addEventListener('scroll',function(){
            let value = window.scrollY;

            wave1.style.backgroundPositionX = 400 + value * 4 + 'px';
        });
let wave2_1 = document.getElementById('wave2_1');

        window.addEventListener('scroll',function(){
            let value = window.scrollY;

            wave2_1.style.backgroundPositionX = 400 + value * 4 + 'px';
        });
// section03 wave

$(function(){
  $('.small-img01').click(function(){
    $('.big-01').css('display','flex');
    $('.big-02').css('display','none');
    $('.big-03').css('display','none');
    $('.big-04').css('display','none');
  });
});
$(function(){
  $('.small-img02').click(function(){
    $('.big-01').css('display','none');
    $('.big-02').css('display','flex');
    $('.big-03').css('display','none');
    $('.big-04').css('display','none');
  });
});
$(function(){
  $('.small-img03').click(function(){
    $('.big-01').css('display','none');
    $('.big-02').css('display','none');
    $('.big-03').css('display','flex');
    $('.big-04').css('display','none');
  });
});
$(function(){
  $('.small-img04').click(function(){
    $('.big-01').css('display','none');
    $('.big-02').css('display','none');
    $('.big-03').css('display','none');
    $('.big-04').css('display','flex');
  });
});

// 여기까지 section03 Tab (PC)

$(function(){
	$('.m-small-img01').hover(function(){
	  $('.m-big-01').css('display','flex');
	  $('.m-big-02').css('display','none');
	  $('.m-big-03').css('display','none');
	  $('.m-big-04').css('display','none');
	});
  });
  $(function(){
	$('.m-small-img02').click(function(){
	  $('.m-big-01').css('display','none');
	  $('.m-big-02').css('display','flex');
	  $('.m-big-03').css('display','none');
	  $('.m-big-04').css('display','none');
	});
  });
  $(function(){
	$('.m-small-img03').click(function(){
	  $('.m-big-01').css('display','none');
	  $('.m-big-02').css('display','none');
	  $('.m-big-03').css('display','flex');
	  $('.m-big-04').css('display','none');
	});
  });
  $(function(){
	$('.m-small-img04').click(function(){
	  $('.m-big-01').css('display','none');
	  $('.m-big-02').css('display','none');
	  $('.m-big-03').css('display','none');
	  $('.m-big-04').css('display','flex');
	});
  });

  // 여기까지 section03 Tab (반응형)

$(function(){
  $('.scale01').mouseover(function(){
    $('.opacity-img01').css('display','block');
  });
  $('.scale01').mouseout(function(){
    $('.opacity-img01').css('display','none');
  });
});
$(function(){
  $('.scale02').mouseover(function(){
    $('.opacity-img02').css('display','block');
  });
  $('.scale02').mouseout(function(){
    $('.opacity-img02').css('display','none');
  });
});
$(function(){
  $('.scale03').mouseover(function(){
    $('.opacity-img03').css('display','block');
  });
  $('.scale03').mouseout(function(){
    $('.opacity-img03').css('display','none');
  });
});
$(function(){
  $('.scale04').mouseover(function(){
    $('.opacity-img04').css('display','block');
  });
  $('.scale04').mouseout(function(){
    $('.opacity-img04').css('display','none');
  });
});

// section04-mouseover


var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
  mapOption = { 
        center: new kakao.maps.LatLng(37.511579530593615, 126.99650352510628), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption);

var imageSrc = "image/pin.png", // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.511579530593615, 126.99650352510628); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
  position: markerPosition,
  image: markerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);  

// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
var content = '<div class="customoverlay">' +
    '  <a href="http://kko.to/nmOfAgY4H" target="_blank">' +
    '    <span class="title">반포한강공원</span>' +
    '  </a>' +
    '</div>';

// 커스텀 오버레이가 표시될 위치입니다 
var position = new kakao.maps.LatLng(37.511579530593615, 126.99650352510628);  

// 커스텀 오버레이를 생성합니다
var customOverlay = new kakao.maps.CustomOverlay({
    map: map,
    position: position,
    content: content,
    yAnchor: 1 
});

// section05 지도

let wave3_1 = document.getElementById('wave3_1');

        window.addEventListener('scroll',function(){
            let value = window.scrollY;

            wave3_1.style.backgroundPositionX = 400 + value * 4 + 'px';
        });
      
// section05 wave