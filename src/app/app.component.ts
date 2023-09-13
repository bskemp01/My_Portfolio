import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy  {
  showLoader = true;

  private sub = new Subscription();
  private timer = new Observable<any>();

  constructor() {}

  ngOnInit(): void {
    this.setTimer();
  }

  setTimer() {
    this.showLoader = true;
    this.timer = timer(2000);
    this.sub = this.timer.subscribe(() => {
      this.showLoader = false;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
