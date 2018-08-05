
; (function () {
	'use strict';

	var nc = {};
	var package_ver = 'v1.0';

	

	/*----------  ELEMENT CHECK  ----------*/
	nc.dmod = false;
	nc.elcheck = function (el) {
		'use strict';
		if ($(el).length > 0) {
			return true;
		} else {
			return false;
		};
	}

	nc.window = $(window);
	
	nc.uid = function () {
		'use strict';
		var uid = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		for (var i = 0; i < 3; i++)
			uid += possible.charAt(Math.floor(Math.random() * possible.length));
		return 'rg' + uid;
		//return ("0000" + (Math.random()*Math.pow(36,4) << 0).toString(36)).slice(-4);
	}

	nc.demo = function () { if (nc.dmod) { return ncNotice(); } else { return true; }; }

	nc.setId = function (obj, prefix, n) {
		'use strict';

		n++;
		var a = prefix + n;
		$(obj).css({ opacity: 0 });
		$(obj).attr("id", a);
		$(obj).addClass(a);

		// Accordion setup
		if ($(obj).is(".accordion-widget")) {
			$(obj).find(".acc-block").each(function (index, el) {
				var id = a + "-acc-block-" + index;
				$(this).find(".acc-hd").attr("data-accid", "#" + id);
				$(this).find(".acc-content").attr("id", id);
				$(this).find(".acc-hd").append('<i class="acc-open ' + $(obj).attr("data-acc-openclass") + ' "></i><i class="acc-close ' + $(obj).attr("data-acc-closeclass") + '"></i>');
			});
		}
	}

	nc.getMultiScripts = function (arr, path) {
		'use strict';

		var _arr = $.map(arr, function (scr) {
			return $.getScript((path || "") + scr);
		});

		_arr.push($.Deferred(function (deferred) {
			$(deferred.resolve);
		}));

		return $.when.apply($, _arr);
	}

	nc.mobmenu = function (el) {
		'use strict';
		
		$(el).on("click", function (e) {
			var nav = $(this).attr('data-nav');
			var c = $(this).attr('data-navclose');
			var o = $(this).attr('data-navopen');
			if ($(nav).hasClass('open')) {
				$(nav).removeClass('open');
				//$(this).find('i').removeClass($(this).attr('data-navclose')).addClass($(this).attr('data-navopen'));
				$(this).find('i').removeClass(c).addClass(o);
			} else {
				$(nav).addClass('open m-nav');
				//$(this).find('i').removeClass($(this).attr('data-navopen')).addClass($(this).attr('data-navclose'));

				$(this).find('i').removeClass(o).addClass(c);
			};
		});

	}

	

	/*----------  FULL HEIGHT AND WIDTH  ----------*/
	nc.fullwh = function (obj) {
		'use strict';
		// global vars
		var winWidth = $(window).width();
		var winHeight = $(window).height();
		// set initial div height / width
		$(obj).css({
			'width': winWidth,
			'height': winHeight,
		});
	}
	nc.fullh = function (obj, wrp) {
		'use strict';

		if (wrp) {
			var winHeight = $(obj).closest(wrp).height();
		} else {
			var winHeight = $(window).height();
		}

		// set initial div height / width
		$(obj).css({
			'height': winHeight,
		});
	}

	
	/*----------  POPUP  ----------*/
	nc.videoPopup = function (obj) {
		'use strict';
		$(obj).magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	};

	nc.inlinePopup = function (obj) {
		'use strict';
		$('body').off('click').on('click', obj, function (e) {
			$(this).magnificPopup({
				type: 'inline',
				preloader: false
			}).click();
		});
	}

	
	/*----------  LINKSCROLL  ----------*/
	nc.linkscroll = function (obj) {
		'use strict';
		$(document).on('click', obj, function (e) {
			e.preventDefault();
			if ($(this).closest('.nav-links').hasClass('nav-links') == false && $(this).attr('href').indexOf("popup") === -1) {
				// target element id
				var id = $(this).attr('href');
				// target element
				var $id = $(id);
				if ($id.length === 0) { return; }
				// top position relative to the document
				var pos = $(id).offset().top;
				// animated top scrolling
				$('body, html').animate({ scrollTop: pos }, 1200);
			};
		});
	}

	
	/*----------  ANIMATION OUT  ----------*/
	nc.animationOut = function(obj) {
		'use strict';

		var newO = $(obj+" .animated");

		for (var i = 0; i < newO.length; i++) {
			var animateobj = $(newO[i]), 
				animateOut = animateobj.attr('data-animOut'),
				animateIn = animateobj.attr('data-animIn');

			if (animateOut || animateIn) {
				if (animateOut){
					var animatearrout = animateOut.indexOf('|') > -1 ? animateOut.split('|') : animateOut,
					animateclassout = typeof animatearrout == 'object' ? animatearrout[0] : animatearrout,
					animatedelayout = typeof animatearrout == 'object' ? animatearrout[1] : 0;
				}
				if (animateIn){
					var	animatearrin = animateIn.indexOf('|') > -1 ? animateIn.split('|') : animateIn,
					animateclassin = typeof animatearrin == 'object' ? animatearrin[0] : animatearrin,
					animatedelayin = typeof animatearrin == 'object' ? animatearrin[1] : 0;
				}

				
				animateobj.css({
					'-webkit-animation-delay' : animatedelayout+'s',
					'animation-delay' : animatedelayout+'s'
				});
				
				animateobj.removeClass(animateclassout).removeClass(animateclassin).addClass(animateclassout);
			}

		}
	}

	/*----------  ANIMATION IN  ----------*/
	nc.animationIn = function(obj) {
		'use strict';

		var newO = $(obj+" .animated");
		
		for (var i = 0; i < newO.length; i++) {
			var animateobj = $(newO[i]), 
				animateOut = animateobj.attr('data-animOut'),
				animateIn = animateobj.attr('data-animIn');
			
			if (animateOut || animateIn) {
				if(animateOut){
					var animatearrout = animateOut.indexOf('|') > -1 ? animateOut.split('|') : animateOut,
					animateclassout = typeof animatearrout == 'object' ? animatearrout[0] : animatearrout,
					animatedelayout = typeof animatearrout == 'object' ? animatearrout[1] : 0;	
				}

				if(animateIn){
					var	animatearrin = animateIn.indexOf('|') > -1 ? animateIn.split('|') : animatearrouteIn,
					animateclassin = typeof animatearrin == 'object' ? animatearrin[0] : animatearrin,
					animatedelayin = typeof animatearrin == 'object' ? animatearrin[1] : 0;	
				}

				animateobj.css({
					'-webkit-animation-delay' : animatedelayin+'s',
					'animation-delay' : animatedelayin+'s'
				});
				
				animateobj.removeClass(animateclassin).removeClass(animateclassout).addClass(animateclassin);
			}

		}
	}

	/*----------  BG-EFFECT  ----------*/
	nc.ncBgEffect = function(obj) {
		'use strict';

		if ($(".nc-bgeffect").length > 0) {
			var bgheight = $(".ncsection.active").height();
			$(".nc-bgeffect").css("height",bgheight);			
		}
	}
	

	nc.init = function() {
		'use strict';

		var $o = {};
		$o.r = !nc.demo ? false : nc.demo();
		$o.tooltip = $o.r ? $('[data-toggle="tooltip"]') : false;
		$o.fullwh = $("[data-fullwh='y']").length > 0 && $o.r ? $("[data-fullwh='y']") : false;
		$o.fullh = $("[data-fullh='y']").length > 0 && $o.r ? $("[data-fullh='y']") : false;
		$o.bg = $("[data-bg]").length > 0 && $o.r ? $("[data-bg]") : false;
		$o.shadow = $("[data-shadow]").length > 0 && $o.r ? $("[data-shadow]") : false;
		$o.hoverclass = $("[data-hover-class]").length > 0 && $o.r ? $("[data-hover-class]") : false;
		$o.bgcolor = $("[data-bgcolor]").length > 0 && $o.r ? $("[data-bgcolor]") : false;
		$o.txtcolor = $("[data-txtcolor]").length > 0 && $o.r ? $("[data-txtcolor]") : false;
		$o.gradient = $("[data-gradient]").length > 0 && $o.r ? $("[data-gradient]") : false;
		$o.rgradient = $("[data-rgradient]").length > 0 && $o.r ? $("[data-rgradient]") : false;
		$o.tabwidget = $(".tab-widget").length > 0 && $o.r ? $(".tab-widget") : false;
		$o.tabsauto = $(".tabs-auto").length > 0 && $o.r ? $(".tabs-auto") : false;		
		$o.othersection1 = $(".other-section-1").length > 0 && $o.r ? $(".other-section-1") : false;		
		$o.elanimate = $("[data-animate-in]").length > 0 && $o.r ? $("[data-animate-in]") : false;
		$o.bLazy = $(".b-lazy").length > 0 && $o.r ? $(".b-lazy") : false;
		$o.ncbgeffect = $(".nc-bgeffect").length > 0 && $o.r ? $(".nc-bgeffect") : false;
		$o.styleid = $("[data-style-id]").length > 0 && $o.r ? $("[data-style-id]") : false;


		/*----------  LINK SCROLL  ----------*/
		if (nc.elcheck("#page[data-linkscroll='y']")) {
			nc.linkscroll('a[href^="#"]:not(.nav-links)');
		};

		

		
			

		/* Apply ID on each sections
		********************************************/
		if (nc.elcheck(".main-container section")) {
			$(".main-container section").each(function (index, el) {
				$(this).attr('id', nc.uid());
			});
		}

		/*----------  FULL HEIGHT AND WIDTH  ----------*/
		if ($o.fullwh) {
			for (var i = 0; i < $o.fullwh.length; i++) {
				nc.fullwh($o.fullwh[i]);
				var fullwhSection = $o.fullwh[i];
				$(window).resize(function () {
					nc.fullwh(fullwhSection);
				});
			}
		}
		if ($o.fullh) {
			for (var i = 0; i < $o.fullh.length; i++) {
				if ($($o.fullh[i]).attr('data-fullh-wrp')) {
					nc.fullh($o.fullh[i], $($o.fullh[i]).attr('data-fullh-wrp'));

					$(window).resize(function () {
						nc.fullh($o.fullh[i], $($o.fullh[i]).attr('data-fullh-wrp'));
					});
				} else {
					nc.fullh($o.fullh[i]);

					$(window).resize(function () {
						nc.fullh($o.fullh[i]);
					});
				}

			}
		}

		/*----------  SHADOW  ----------*/
		if ($o.shadow) {
			for (var i = 0; i < $o.shadow.length; i++) {
				console.log("yes");
				$($o.shadow[i]).css({ boxShadow: $($o.shadow[i]).attr("data-shadow") });
			}
		}

		/*----------  BACKGROUND  ----------*/
		if ($o.bg) {
			for (var i = 0; i < $o.bg.length; i++) {
				$($o.bg[i]).css({ backgroundImage: "url(" + $($o.bg[i]).attr("data-bg") + ")" });
			}
		}
		if ($o.bgcolor) {
			for (var i = 0; i < $o.bgcolor.length; i++) {
				$($o.bgcolor[i]).css({ backgroundColor: $($o.bgcolor[i]).attr("data-bgcolor") });
			}
		}
		if ($o.txtcolor) {
			for (var i = 0; i < $o.txtcolor.length; i++) {
				$($o.txtcolor[i]).css({ color: $($o.txtcolor[i]).attr("data-txtcolor") });
			}
		}
		if ($o.hoverclass) {
			for (var i = 0; i < $o.hoverclass.length; i++) {
				var hov_class = $($o.hoverclass[i]).attr('data-hover-class');
				$($o.hoverclass[i]).hover(
					function() {
						$(this).addClass(hov_class);
					}, function() {
						$(this).removeClass(hov_class);
					}
				);
			}
		}
		if ($o.gradient) {
			for (var i = 0; i < $o.gradient.length; i++) {
				$o.gradient[i]

				var grd_colors = $($o.gradient[i]).attr('data-g-colors'),
					grd_to = $($o.gradient[i]).attr('data-gradient'),
					grd_color = grd_colors.split('|');

				if (grd_to == 'y') {
					$($o.gradient[i]).css({
						//background: grd_color[0],
						//background: "-moz-linear-gradient(top, " + grd_color[0] + " 0%, " + grd_color[1] + " 100%)",
						//background: "-webkit-linear-gradient(top, " + grd_color[0] + " 0%, " + grd_color[1] + " 100%)",
						background: "linear-gradient(to bottom, " + grd_color[0] + " 0%, " + grd_color[1] + " 100%)",
						//filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='" + grd_color[0] + "', endColorstr='" + grd_color[1] + "',GradientType=0 )"
					});
				} 
				else {
					$($o.gradient[i]).css({
						//background: grd_color[0],
						//background: "-moz-linear-gradient(top, " + grd_color[0] + " 0%, " + grd_color[1] + " 100%)",
						//background: "-webkit-linear-gradient(top, " + grd_color[0] + " 0%, " + grd_color[1] + " 100%)",
						background: "linear-gradient(to right, " + grd_color[0] + " 0%, " + grd_color[1] + " 100%)",
						//filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='" + grd_color[0] + "', endColorstr='" + grd_color[1] + "',GradientType=0 )"
					});
				}
			}
		}

		if ($o.rgradient) {
			for (var i = 0; i < $o.rgradient.length; i++) {
				$o.rgradient[i]

				var rgrd_colors = $($o.rgradient[i]).attr('data-rg-colors'),
					rgrd_to = $($o.rgradient[i]).attr('data-rgradient'),
					rgrd_color = rgrd_colors.split('|');

				if (rgrd_to == 'y') {
					$($o.rgradient[i]).css({
						//background: grd_color[0],
						//background: "-moz-linear-gradient(top, " + grd_color[0] + " 0%, " + grd_color[1] + " 100%)",
						//background: "-webkit-linear-gradient(top, " + grd_color[0] + " 0%, " + grd_color[1] + " 100%)",
						background: "radial-gradient(ellipse at center, " + rgrd_color[0] + " 0%, " + rgrd_color[1] + " 100%)",
						//filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='" + grd_color[0] + "', endColorstr='" + grd_color[1] + "',GradientType=0 )"
					});
				} 
			}
		}

		/*----------  PARALLAX  ----------*/
		if ($o.stellar) {

			for (var i = 0; i < $o.stellar.length; i++) {
				$($o.stellar[i]).parent().css({ overflow: 'hidden' });
			}
			
			/*
			data-stellar-horizontal-offset="40"
 			data-stellar-vertical-offset="150"*/
			$.stellar({
				positionProperty: 'transform',
				horizontalScrolling: false,
				hideDistantElements: false
			});
		}
		
		/*----------  ANIMATION  ----------*/
		if ($o.elanimate) {
			for (var i = 0; i < $o.elanimate.length; i++) {

				var animateobj = $($o.elanimate[i]),
					animatein = animateobj.attr('data-animate-in'),
					animatearr = animatein.indexOf('|') > -1 ? animatein.split('|') : animatein,
					animateclass = typeof animatearr == 'object' ? animatearr[0] : animatearr,
					animatedelay = typeof animatearr == 'object' ? animatearr[1] : 0;

				animateobj.css({
					'-webkit-animation-delay': animatedelay + 's',
					'animation-delay': animatedelay + 's'
				});

				animateobj.viewportChecker({
					classToAdd: 'animated ' + animateclass,
					offset: 100
				});
			}
		}

		
		
		/*----------  RESPONSIVE  ----------*/
		enquire.register("screen and (min-width: 992px)", {
			match : function() {
				nc.device = 'd';
				$("html").addClass('desktop');
			},  
			unmatch : function() { 
				$("html").removeClass('desktop');
			}
		}).register("(min-width: 200px) and (max-width: 991px)", {
			match : function() {
				nc.device = 'm';
				$("html").addClass('mobile');
			},  
			unmatch : function() {
				$("html").removeClass('mobile');
			}
		});

		return $o;
	}


	jQuery(document).ready(function ($) {

		var $o = nc.init();

		if ($o.r) {

			$('html').before('<!-- ' + package_ver + ' -->');

			$o.tooltip.tooltip({
				container: 'body'
			});

			$(".copyright-year").text(new Date().getFullYear());
			
			if ($o.bLazy) {
				nc.blazyload();
			}

			/*----------  LOADER  ----------*/
			Pace.on('done', function(){
				nc.animationIn(".mainwrapper--nclayer2 .active");
			});

		} else {
			$o.r ? nc.demo() : $('html').html('');
		}
	});

})();
