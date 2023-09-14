import { AfterViewInit, Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit, AfterViewInit {
  private readonly fileUrl = '/assets/Resume_Brian_Kemp.pdf'
  private readonly gitHubURL =
    'https://github.com/bskemp01';

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

  navigateToGitHub() {
    window.open(this.gitHubURL);
  }

  navigateToLinkedIn() {
    window.open(this.linkedInURL);
  }

  openResume() {
    window.open(this.fileUrl, '_blank');
  }

  ngOnInit(): void {}
}
