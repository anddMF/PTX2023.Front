import { PositionsContainerComponent } from './home/components/positions-container/positions-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeHubComponent } from './home/components/home-hub/home-hub.component';

const routes: Routes = [
  // { path: 'home', component: HomeHubComponent},
  { path: '', component: PositionsContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
