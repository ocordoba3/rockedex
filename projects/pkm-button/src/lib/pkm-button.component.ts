import { Component, OnInit, Input } from '@angular/core';

type PkmType = 'primary' | 'default';

@Component({
  selector: 'PkmButton',
  template: `
    <button 
      type="button" 
      [attr.pkmType]="pkmType" 
      [disabled]="disabled"
      [ngClass]="{'w-100': fullWidth}">
      {{text}}
    </button>
  `,
  styles: [
    `
    button {
        border: none;
        border-radius: 0.8rem;
        font-size: 1.6rem;
        font-weight: bolder;
        padding: 1rem 1.5rem;
    }

    button:hover {
      opacity: .8;
    }

    button:disabled {
        opacity: .5;
    }

    button[pkmType = 'primary'] {
        background-color: #EF4444;
        color: #fff;
        height: fit-content;
    }

    button[pkmType = 'default']{
        background-color: #E5E7EB;
        color: #000;
    }
    `
  ]
})
export class PkmButtonComponent implements OnInit {

  @Input() text: string = '';
  @Input() pkmType: PkmType = 'primary';
  @Input() disabled: boolean = false;
  @Input() fullWidth: boolean = false;

  constructor() { }

  ngOnInit(): void { }

}
