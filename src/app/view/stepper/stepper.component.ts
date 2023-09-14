import { trigger, transition, style, animate } from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate(1000, style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class StepperComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    anime({
      targets: '.stepper-container',
      translateX: [100, 0],
      duration: 1000,
      easing: 'easeOutSine',
    });
  }

  ngOnInit(): void {}
}
