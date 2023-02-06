/* global jQuery */
/* global window */
(($) => {
	const COMMON = {
		init() {
			this.cacheDOM();

			$(window).on('resize', this.reCalcOnResize.bind(this));
		},
		cacheDOM() {
			this.$body = $('body');
			this.windowWidth = $(window).width();
		},
		reCalcOnResize() {
			this.windowWidth = $(window).width();
		},
	};

	const mainNavigation = {
		init() {
			this.$mainNavContainer = $('#site-navigation');
			this.$menuToggler = this.$mainNavContainer.find('.menu-toggle');
			this.$mainMenuContainer = this.$mainNavContainer.find('.menu-primary-container');
			this.$mainMenu = this.$mainNavContainer.find('#primary-menu');
			this.$menuToggler.on('click', this.toggleMenu.bind(this));
		},
		toggleMenu(e) {
			e.preventDefault();
			this.$mainMenuContainer.toggleClass('shown');
		},
	};

	$(() => {
		COMMON.init();
		mainNavigation.init();
	});

	// responsive navigation 

	let menuBtn = document.querySelector('.menu');
	let sliderMenu = document.querySelector('.slider-nav');
	let closeBtn = document.querySelector('.close-btn');
	let navMenu= document.querySelector('.nav-menu');
   
	menuBtn.addEventListener('click', () => {
	  sliderMenu.classList.add('show-menu');
	})
  
	closeBtn.addEventListener('click', ()=>{
	  sliderMenu.classList.remove('show-menu');
	})


  
	//toggle sub-menu
	$('.sub-btn').click(function(){
	  $(this).next().slideToggle();
  })
  
  
  // slick slider init
  
	$('.slider-container').slick({
	  infinite: false,
	  dots: false,
	  arrows: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  prevArrow: '<i class= "fa fa-angle-left prevArrow"></i>',
	  nextArrow: '<i class= "fa fa-angle-right nextArrow"></i>',
	  responsive:[
		{
		  breakpoint: 992,
			settings: {
				 arrows:false,
				 dots:true
				
			}
		},
	  ]
  
	});
  
	//automatic count on scroll
	var counted = 0;
	$(window).scroll(function () {
  
	  var oTop = $('.counter-box').offset().top - window.innerHeight;
	  if (counted == 0 && $(window).scrollTop() > oTop) {
		$('.counter').each(function () {
		  var $this = $(this),
			countTo = $this.attr('data-number');
		  $({
			countNum: $this.text()
		  }).animate({
			countNum: countTo
		  },
  
			{
  
			  duration: 5000,
			  easing: 'swing',
			  step: function () {
				$this.text(Math.floor(this.countNum));
			  },
			  complete: function () {
				$this.text(this.countNum);
				//alert('finished');
			  }
  
			});
		});
		counted = 1;
	  }
  
	});
  
	// init slider for qoutes
	$('.slider').slick({
	  infinite: true,
	  dots: true,
	  arrows: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
  
	});
  
	//card slider init
	$('.card-slider').slick({
	  infinite: false,
	  dots: false,
	  arrows: true,
	  slidesToScroll: 1,
	  slidesToShow: 4,
	  responsive:[
		{
		  breakpoint: 992,
			settings: {
				 slidesToShow: 3,
				
			}
		},
		{
		  breakpoint: 768,
			settings: {
				 slidesToShow: 2,
				 arrows:false,
				 dots:true,
			}
		},
		{
		  breakpoint: 567,
			settings: {
				 slidesToShow: 1,
				 arrows:false,
				 dots:true,
			}
		},
	  ]
	});
})(jQuery);
