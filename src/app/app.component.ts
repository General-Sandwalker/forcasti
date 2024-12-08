import {Component, OnInit} from '@angular/core';
import {WeatherComponent} from "./components/weather/weather.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
