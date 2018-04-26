import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  circles = new Array();
    
  ngOnInit() {
    for (let i = 0; i<100; i++) {
        let x = 10000*Math.random();
        let y = 10000*Math.random();
        let r = 10*Math.random();
        let c = r * 25;
        let color = `rgba(${c},${c},${c},1)`;

        this.circles.push({ x: x, y: y, radius: r, color:color});
    }
  }
}
