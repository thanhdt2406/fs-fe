import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $('.input-counter').find('.input-counter__plus').on('click', () => {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) + 1; // Number + Number
      $input.val(count).change();
    });
    // Attach Click event to minus button
    $('.input-counter').find('.input-counter__minus').on('click', () => {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1; // Number - Number
      $input.val(count).change();
    });
    // Fires when the value of the element is changed
    $('.input-counter').find('input').change( () => {
      var $this = $(this);
      var min = $this.data('min');
      var max = $this.data('max');
      var val = parseInt($this.val());// Current value
      // Restrictions check
      if (!val) {
        val = 1;
      }
      // The min() method returns the number with the lowest value
      val = Math.min(val,max);
      // The max() method returns the number with the highest value
      val = Math.max(val,min);
      // Sets the Value
      $this.val(val);
    });
  }

}
