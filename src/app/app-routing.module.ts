import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MapComponent} from './map/map.component';

const routes: Routes = [
  { path: 'map', component: MapComponent }
];
@NgModule({
  imports: [
    CommonModule
    ,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }



