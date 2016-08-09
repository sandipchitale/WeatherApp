import { Component } from '@angular/core';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'weather-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ MD_SIDENAV_DIRECTIVES, MD_LIST_DIRECTIVES, MdToolbar, MdButton, MdIcon, MD_CARD_DIRECTIVES ],
  providers: [ MdIconRegistry ]
})
export class AppComponent {
  title = 'Weather App';
  weekDays = ['Mon' , 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  places = [
    {city: 'Pleasanton', stateAndCountry: 'California, USA', forecast: {}},
    {city: 'Nagpur', stateAndCountry: 'Maharashtra, India', forecast: {}},
    {city: 'San Diego', stateAndCountry: 'California, USA', forecast: {}}
  ];

  ngOnInit() {
    for (let place of this.places) {
      for (let weekDay of this.weekDays) {
        place.forecast[weekDay] = this.randomTemperature();
      }
    }
  }

  private randomTemperature(): string {
    return (20 + (Math.random() * 100)).toFixed(0);
  }

  exit() {
    (<any>window).remote.getCurrentWindow().close();
  }

  get electronic() {
    return !!(window && (<any>window).process);
  }
}
