import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  stars = new Array();
  constellations = new Array();
  photo = '';
    
  ngOnInit() {
    for (let i = 0; i<100; i++) {
        let x = 10000*Math.random();
        let y = 10000*Math.random();
        let r = 10*Math.random();
        let c = r * 25;
        let gray = `rgba(${c},${c},${c},1)`;
        let blue = `rgba(0,0,${c},1)`;

        this.stars.push({ x: x, y: y, radius: r*1.2, color:blue});
        this.stars.push({ x: x, y: y, radius: r, color:gray});
    }
    let white = `rgba(255,255,255,1)`;
    this.constellations.push({
        x: 300,
        y: 300,
        radius: 20,
        color:white});
  }
    
  starClick(star) {
    // change bg
    if (this.photo == '')
      this.photo = 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Ursa_Major_constellation_detail_map.PNG';
    else
        this.photo = '';

  }
}
