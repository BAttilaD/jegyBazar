import { Component } from '@angular/core';

@Component({
  selector: 'app-belepes',
  templateUrl: './belepes.component.html',
  styleUrls: ['./belepes.component.css']
})
export class BelepesComponent {

  dismissible = true;
  alerts: any = [
    {
      type: 'info',
      msg: `Hello, itt tudsz belépni.`
    }
  ];

  reset(): void {
    this.alerts = this.alerts.map((alert: any) => Object.assign({}, alert));
  }

}
