import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { EditNameComponent } from './pages/edit-name/edit-name.component';
import { EditPhoneComponent } from './pages/edit-phone/edit-phone.component';
import { PhoneListComponent } from './pages/phone-list/phone-list.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'phoneList',
    component: PhoneListComponent
  },
  {
    path: 'editPhone',
    component: EditPhoneComponent
  },
  {
    path: 'editName',
    component: EditNameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
