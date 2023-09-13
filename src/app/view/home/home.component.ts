import { trigger, transition, style, animate } from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es';
import { Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [
      transition('void <=> *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    anime({
      targets: '.main-section',
      translateY: [100, 0],
      duration: 1000,
      easing: 'easeOutSine',
    });
  }

  ngOnInit(): void {}
}
