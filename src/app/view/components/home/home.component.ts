import { trigger, transition, style, animate } from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate(1000, style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    anime({
      targets: '.component-container',
      translateY: [100, 0],
      duration: 1000,
      easing: 'easeOutSine',
    });
  }

  ngOnInit(): void {}
}
