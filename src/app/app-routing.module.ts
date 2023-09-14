import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/components/home/home.component';
import { SinglePageComponent } from './view/single-page/single-page.component';

const routes: Routes = [
  {
    path: '',
    component: SinglePageComponent,
    
  },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
