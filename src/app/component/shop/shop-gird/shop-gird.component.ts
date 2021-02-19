import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-shop-gird',
  templateUrl: './shop-gird.component.html',
  styleUrls: ['./shop-gird.component.scss']
})
export class ShopGirdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $('.js-shop-category-span').on('click', () => {
      $(this).toggleClass('is-expanded');
      $(this).next('ul').stop(true, true).slideToggle();
    });

    $('.js-shop-grid-target').on('click', () => {
      $(this).addClass('is-active');
      $('.js-shop-grid-target').removeClass('is-active');
      $('.shop-p__collection > div').removeClass('is-list-active');
      $('.shop-p__collection > div').addClass('is-grid-active');
    });

    $('.js-shop-list-target').on('click', () => {
      $(this).addClass('is-active');
      $('.js-shop-list-target').removeClass('is-active');
      $('.shop-p__collection > div').removeClass('is-grid-active');
      $('.shop-p__collection > div').addClass('is-list-active');
    });
  }

}
