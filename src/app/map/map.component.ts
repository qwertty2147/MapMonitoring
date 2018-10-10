import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 13.736717;
  lng: number = 100.523186;
  constructor() { 

  }

  ngOnInit() {
    
  }
 
    
    }

