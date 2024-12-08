import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Location} from "../../models/location";
import {GeocoderApiService} from "../../services/geocoder-api.service";
import {DecimalPipe, NgForOf, NgIf} from "@angular/common";
import {Weather} from "../../models/weather";

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [
    NgForOf,
    DecimalPipe,
    NgIf,
  ],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {
  locations: Array<Location> = [];
  @Output() onLocationSelected: EventEmitter<Location> = new EventEmitter<Location>();
  @Input() weather: Weather = {} as Weather;

  constructor(private geocoder: GeocoderApiService) {}

  ngOnInit() {
    //this.searchLocation("Nefta");
  }

  searchLocation(locationName: string) {
    this.weather = {} as Weather;
    console.log(this.weather);

    this.geocoder.getLocation(locationName, 3, "a9f15ff70141e1cd8f5ae01238c5ad1e")
      .subscribe(response => {
        this.locations = response;
        console.log(this.locations);
      });
  }

  selectLocation(location: Location) {
    this.onLocationSelected.emit(location);
    console.log(location);
    this.locations = [];
  }
}
