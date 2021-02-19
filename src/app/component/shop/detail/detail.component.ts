import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var ELEVATE_ZOOM_OBJ = {
      borderSize: 1,
      autoWidth:true,
      zoomWindowWidth: 540,
      zoomWindowHeight: 540,
      zoomWindowOffetx: 10,
      borderColour: '#e9e9e9',
      cursor: 'pointer'
    };
    var $productDetailElement = $('#pd-o-initiate');
    var $productDetailElementThumbnail = $('#pd-o-thumbnail');

    $productDetailElement.on('init', () => {
      $(this).closest('.slider-fouc').removeClass('slider-fouc');
    });

    $productDetailElement.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite:false,
      arrows: false,
      dots: false,
      fade: true,
      asNavFor: $productDetailElementThumbnail
    });

    $('#pd-o-initiate .slick-current img').elevateZoom(ELEVATE_ZOOM_OBJ);

    $productDetailElement.on('beforeChange',(event: any , slick: any, currentSlide: any, nextSlide: any) => {
      // Get the next slide image
      var $img = $(slick.$slides[nextSlide]).find('img');
      // Remove old zoom elements
      $('.zoomWindowContainer,.zoomContainer').remove();
      // Reinit elevate zoom plugin to the next slide image
      $($img).elevateZoom(ELEVATE_ZOOM_OBJ);
    });

    $productDetailElement.lightGallery({
      selector: '.pd-o-img-wrap',// lightgallery-core
      download: false,// lightgallery-core
      thumbnail: false,// Thumbnails
      autoplayControls: false,// Autoplay-plugin
      actualSize: false,// Zoom-plugin: Enable actual pixel icon
      hash: false, // Hash-plugin
      share: false// shareShop-plugin
    });

    $productDetailElementThumbnail.on('init', () => {
      $(this).closest('.slider-fouc').removeAttr('class');
    });

    $productDetailElementThumbnail.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite:false,
      arrows: true,
      dots: false,
      focusOnSelect: true,
      asNavFor: $productDetailElement,
      prevArrow:'<div class="pt-prev"><i class="fas fa-angle-left"></i>',
      nextArrow:'<div class="pt-next"><i class="fas fa-angle-right"></i>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });

    $('.product-slider').on('initialize.owl.carousel', () => {
      $(this).closest('.slider-fouc').removeAttr('class');
    }).each(() => {
      var thisInstance = $(this);
      var itemPerLine = thisInstance.data('item');
      thisInstance.owlCarousel({
        autoplay: false,
        loop: false,
        dots: false,
        rewind: true,
        smartSpeed: 1500,
        nav: true,
        navElement: 'div',
        navClass: ['p-prev', 'p-next'],
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: itemPerLine - 2
          },
          991: {
            items: itemPerLine - 1
          },
          1200: {
            items: itemPerLine
          }
        }
      });
    });
  }

}
