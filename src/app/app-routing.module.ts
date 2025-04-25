import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './visitor/home/home.page.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent,
    title:'productivity planner'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
