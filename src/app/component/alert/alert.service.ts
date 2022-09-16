import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

interface Alert {
  text: string;
  messageType: string;
}
@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private subject = new Subject<Alert>();

  public onAlert(): Observable<Alert> {
    return this.subject.asObservable();
  }

  public success(message: string) {
    this._alert({ text: message, messageType: 'success' });
  }

  private _alert(alert: Alert) {
    this.subject.next(alert);
  }
}
