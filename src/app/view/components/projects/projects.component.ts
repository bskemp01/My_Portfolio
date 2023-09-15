import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  angularMaterialsProjectLink = 'https://angular-material-examples.vercel.app/';

  openAngularMaterialsProject() {
    window.open(this.angularMaterialsProjectLink)
  }
}
