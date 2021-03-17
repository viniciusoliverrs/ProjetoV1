import { PhonenNumberTypeComponent } from './phonen-number-type/phonen-number-type.component';
import { PersonPhoneComponent } from './person-phone/person-phone.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'person-phone', 
    pathMatch: 'full' 
  },
  {
    path: 'person-phone',
    component: PersonPhoneComponent,
    loadChildren: () => import('../app/person-phone/person-phone.component').then(m => m.PersonPhoneComponent)
  },
  {
    path: 'phone-number-type-component',
    component: PhonenNumberTypeComponent,
    loadChildren: () => import('../app/phonen-number-type/phonen-number-type.component').then(m => m.PhonenNumberTypeComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
