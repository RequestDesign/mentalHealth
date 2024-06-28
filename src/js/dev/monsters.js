import $ from "jquery";
import { rem } from '../utils/constants';
if (window.innerWidth <= 768) {

    $('.psychologists-det__box-met--item').each(function (i) {
        const topScreen =  $(this).offset().top - $('.psychologists-det__box-met').offset().top + rem(7)
        $(this).find('.psychologists-det__box-met--item-info').css("top", topScreen)
    })
}

$(document).on('scroll', function() {
    var stickyMob = $('.psychologists-det__sidebar-box');
    fixedH (stickyMob)
});

function fixedH (item) {
	const sideHeight = item.height()
	const containerHeight = item.closest('.container').height()
	if ($(document).scrollTop() >= containerHeight-sideHeight) {
		item.removeClass('active')
		item.addClass('active__bottom')
	} else {
		item.removeClass('active__bottom')
		item.addClass('active')
	}
}