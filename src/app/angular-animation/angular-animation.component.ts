import { animate, animateChild, AnimationEvent, group, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-animation',
  templateUrl: './angular-animation.component.html',
  styleUrls: ['./angular-animation.component.scss'],
  animations: [
    trigger('caseInOut', [
      transition('* => init', [
        query(':enter', [style({ transform: 'translateX(100%)' }), animate(300)], {
          optional: true
        })
      ]),
      transition('init => *', [
        query(':leave', [animate(300), style({ transform: 'translateX(100%)' })], {
          optional: true
        })
      ])
    ]),
    trigger('CloseOpen', [
      state('init', style({
        height: '100px',
        opacity: 1,
        backgroundColor: 'red'
      })),
      state('open', style({
        width: '400px',
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '10px',
        width: '10px',
        opacity: 0.2,
        backgroundColor: 'blue'
      })),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
      transition('* => init', [
        animate('0.5s')
      ]),
    ]),
    trigger('ItemAnimation', [
      transition(':enter, void => init', [
        style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
        group([
          animate('0.3s 0.1s ease', style({
            transform: 'translateX(0)',
            width: '*'
          })),
          animate('0.3s cubic-bezier(1, 0.04, 1, 0.08)', style({
            opacity: 1
          }))
        ])
      ]),
      transition(':leave, * => void', [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(50px)',
            height: 0,
            width: 10
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ]),
    trigger('ListAnimation', [
      transition(':increment', [ // each time the binding value changes
        group([
          query(':leave', animateChild(), { optional: true }),
          query(':enter', [
            group([
              style({ opacity: 0 }),
              stagger(200, [
                animateChild(),
                animate('0.5s', style({ opacity: 1 }))
              ])
            ]),
          ], { optional: true }),
        ]),
      ]),
      transition(':decrement', [ // each time the binding value changes
        query(':leave', animateChild(), { optional: true })
      ]),
      transition('* => void',[
        query(':leave', 
          group([
            style({ height: '*', opacity: 1 }),
            animate(300, style({ height: 0, opacity: 0 })),
            animateChild(),
          ])
        ,{ optional: true })
      ])
    ])
  ]
})
export class AngularAnimationComponent implements OnInit {

  constructor() { }

  animationState = 'init'

  showList = true;

  currentAnimation = 'caseInOut'

  ngOnInit(): void {
  }

  setState(state: string){
    this.animationState = state;
  }

  itemList = [
    {
      name: '我是第1项' 
    },
    {
      name: '我是第2项' 
    },
    {
      name: '我是第3项' 
    },
    {
      name: '我是第4项' 
    }
  ]

  addItem(){
    this.itemList.push({
      name: `我是第${this.itemList.length + 1}项`
    })
  }

  deleteItem(index: number){
    this.itemList.splice(index, 1)
  }

  initList(){
    this.setState('init');
    this.itemList = [
      {
        name: '我是第1项' 
      },
      {
        name: '我是第2项' 
      },
      {
        name: '我是第3项' 
      },
      {
        name: '我是第4项' 
      }
    ]
  }

  ListAnimationDone(event: AnimationEvent){
    // console.log(event);
  }
  ItemAnimationDone(event: AnimationEvent){
    // console.log(event);
  }
}
