import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { WeatherService } from './services/weather.service';
import { weatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  cityName:string = "Lagos";
  weatherData?: weatherData;

  constructor(private weatherService: WeatherService){}
  
  // title = 'weatherApp';
  // api = environment.apiEndpoint

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = "";
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // this.weatherService.getWeatherData('Lagos')
    // .subscribe({
    //   next: (response) => {
    //     this.weatherData = response;
    //     console.log(response)
    //   }
    // });
    this.getWeatherData(this.cityName);
    this.cityName = "";
  }

  private getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response)
      }
    });
  }
}
