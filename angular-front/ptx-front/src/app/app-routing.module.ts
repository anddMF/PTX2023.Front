import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeHubComponent } from './home/components/home-hub/home-hub.component';

const routes: Routes = [
  { path: '', component: HomeHubComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
