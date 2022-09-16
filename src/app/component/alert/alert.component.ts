import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  public text: string = '';
  public typeMessage: string = '';

  private _alertSubscription: Subscription = new Subscription();

  constructor(private _alertService: AlertService) {}

  ngOnInit(): void {
    this._alertSubscription = this._alertService
      .onAlert()
      .subscribe((alert) => {
        this.text = alert.text;
        setTimeout(() => (this.text = ''), 3000);
      });
  }

  ngOnDestroy(): void {
    if (this._alertSubscription) {
      this._alertSubscription.unsubscribe();
    }
  }
}
