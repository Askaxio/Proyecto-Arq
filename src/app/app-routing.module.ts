import { Unidad1Component } from './components/unidad-1/unidad-1.component';
import { Unidad2Component } from './components/unidad-2/unidad-2.component';
import { Unidad3Component } from './components/unidad-3/unidad-3.component';
import { Unidad4Component } from './components/unidad-4/unidad-4.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Scroll } from '@angular/router';


const routes: Routes = [
  {path:"unidad1",component:Unidad1Component},
  {path:"unidad2",component:Unidad2Component},
  {path:"unidad3",component:Unidad3Component},
  {path:"unidad4",component:Unidad4Component},
  {path:"",redirectTo:"unidad1",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64], // Ajusta según sea necesario
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
