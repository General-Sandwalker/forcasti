import {Component, Input, OnInit} from '@angular/core';
import {WeatherApiService} from "../../services/weather-api.service";
import {DecimalPipe, JsonPipe, NgIf} from "@angular/common";
import {Weather} from "../../models/weather";
import {LocationComponent} from "../location/location.component";
import {Location} from "../../models/location";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    JsonPipe,
    LocationComponent,
    NgIf,
    DecimalPipe
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit {
  @Input() weather: Weather = {} as Weather;
  selectedLocation: Location = {} as Location;
  selectLocation(location: Location) {
    this.selectedLocation = location;
    this.getWeather(this.selectedLocation.lat, this.selectedLocation.lon);
    console.log("onLocationSelected executed ", location);
  }

  constructor(private dataService: WeatherApiService) {}

  ngOnInit() {
    //this.getWeather(33.87207, 7.88068);
    
  }

  getWeather(latitude: number, longitude: number) {
    this.dataService.getWeatherLocation(latitude, longitude, "a9f15ff70141e1cd8f5ae01238c5ad1e", "metric", "english")
      .subscribe(response => {
        this.weather = response;
        console.log(this.weather);
      });
  }
}
