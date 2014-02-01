$(function() {

	$('#items').find('td').hover(function() {
		$(this).find('.count').addClass('hover');
	}, function() {
		$(this).find('.count').removeClass('hover');
	});

	$('.count').find('.minus').click(function() {
		var count = $(this).siblings('div').text();
		if (count != 0) {
			$(this).siblings('div').text(--count);
		}
		return false;
	});

	$('.count').find('.plus').click(function() {
		var count = $(this).siblings('div').text();
		$(this).siblings('div').text(++count);
		return false;
	});

	$('#order-page .payments').find('.payment').not('.radio-collection').click(function() {
		$('#order-page .payments').find('.payment').removeClass('active');
		$(this).addClass('active');
	});

	$('#order-page .payments .payment.radio-collection').find('input').click(function() {
		$('#order-page .payments').find('.payment').removeClass('active');
		$('#order-page .payments .payment.radio-collection').find('input').siblings().removeClass('current');
		$(this).siblings().addClass('current');
		$(this).parent().parent().parent().addClass('active');
	});

	$('.description .tabs .tab').find('.title a').toggle(function() {
		$(this).parent().siblings('.content').slideDown();
		$(this).parent().find('.icon_21').removeClass('icon_closed').addClass('icon_opened');
		return false;
	}, function() {
		$(this).parent().siblings('.content').slideUp();
		$(this).parent().find('.icon_21').removeClass('icon_opened').addClass('icon_closeed');
		return false;
	});

	$('.description .tabs .tab').find('.title .icon_21').toggle(function() {
		$(this).parent().siblings('.content').slideDown();
		$(this).parent().find('.icon_21').removeClass('icon_closed').addClass('icon_opened');
		return false;
	}, function() {
		$(this).parent().siblings('.content').slideUp();
		$(this).parent().find('.icon_21').removeClass('icon_opened').addClass('icon_closeed');
		return false;
	});

	$('.go-to-pay').find('.button').mousedown(function() {
		$(this).addClass('press');
	});

	$('.go-to-pay').find('.button').mouseup(function() {
		$(this).removeClass('press');
	});

	$('.go-to-pay').find('.button').click(function() {
		return false;
	});

	$('#header .call-me').find('a').mousedown(function() {
		$(this).addClass('press');
	});

	$('#header .call-me').find('a').mouseup(function() {
		$(this).removeClass('press');
	});

});