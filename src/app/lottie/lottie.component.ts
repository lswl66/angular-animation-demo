import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lottie',
  templateUrl: './lottie.component.html',
  styleUrls: ['./lottie.component.scss']
})
export class LottieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const svgContainer = document.getElementById('svgContainer');
    // @ts-ignore
    window['bodymovin'].loadAnimation({
        wrapper: svgContainer,
        animType: 'svg',
        loop: true,
        path: '../../assets/markus.json'
    });
  }
}
