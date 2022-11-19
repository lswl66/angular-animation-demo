import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-animation',
  templateUrl: './css-animation.component.html',
  styleUrls: ['./css-animation.component.scss']
})
export class CssAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  state = 'init';

  showList = true;

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

  deleteItem(event: Event, index: number){
    const currentTarget = event.currentTarget as HTMLElement;
    currentTarget.classList.add('delete');
    currentTarget.addEventListener("animationend", () => {
      this.itemList.splice(index, 1)
    }, false);
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

  setState(state: string){
    this.state = state;
  }
}
