import { Component } from '@angular/core';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'weather-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ MdToolbar, MD_CARD_DIRECTIVES, MdIcon ],
  providers: [ MdIconRegistry ]
})
export class AppComponent {
  title = 'Weather App';
  weekDays = ['Mon' , 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  places = [
    {city: 'Pleasanton', stateAndCountry: 'California, USA'},
    {city: 'Nagpur', stateAndCountry: 'Maharashtra, India'},
    {city: 'San Diego', stateAndCountry: 'California, USA'}
  ];

  private randomTemperature(): string {
    return (20 + (Math.random() * 100)).toFixed(0);
  }
}
