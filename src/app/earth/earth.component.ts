import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.scss']
})
export class EarthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const imageElement = document.getElementById('earthContainer') as HTMLElement;
    let index = 0;
    setInterval(() => {
        if (index >= 610) {
            index = 0
        }
        let imgName = `000${index}.png`.split('').reverse().splice(0, 8).reverse().join('');
        imageElement.setAttribute('src', `../../assets/img/${imgName}`);
        
        index += 1
    }, 60);
  }

}
