import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkOption = {
    color: '#fff',
    borderColor: '1px rgba(255, 255, 255, 0.2) solid',
    shadow: '0px 0px 4px 1px #fff',
  }
}
