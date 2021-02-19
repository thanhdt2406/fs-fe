import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#hero-slider').owlCarousel({
      items: 1,
      autoplayTimeout: 8000,
      loop: true,
      margin: -1,
      dots: false,
      smartSpeed: 1500,
      rewind: false, // Go backwards when the boundary has reached
      nav: false,
      responsive: {
        992: {
          dots: true
        }
      }
    })
  }

}
