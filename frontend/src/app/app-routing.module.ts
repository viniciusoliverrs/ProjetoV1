import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { EditPhoneComponent } from './pages/edit-phone/edit-phone.component';
import { PhoneListComponent } from './pages/phone-list/phone-list.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'phone-list',
    component: PhoneListComponent
  },
  {
    path: 'edit-phone',
    component: EditPhoneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
