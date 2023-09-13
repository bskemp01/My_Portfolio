import { AfterViewInit, Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent implements OnInit, AfterViewInit {
  private readonly linkedInURL =
    'https://www.linkedin.com/in/brian-kemp-94036723a/';

  ngAfterViewInit(): void {
    anime({
      targets: '.tool-bar',
      translateY: [-50, 0],
      duration: 1000,
      easing: 'easeOutSine',
    });
  }

  navigateToLinkedIn() {
    window.open(this.linkedInURL);
  }

  ngOnInit(): void {}
}
