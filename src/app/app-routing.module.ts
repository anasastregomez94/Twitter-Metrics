import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsViewComponent } from './cards-view/cards-view.component';
import { FirstViewComponent } from './first-view/first-view.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: '', component: FirstViewComponent},
  { path: 'metrics', component: CardsViewComponent},
  { path: 'map', component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
