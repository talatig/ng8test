import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import {AboutComponent} from './components/about/about.component'
import {ContactComponent} from './components/contact/contact.component'
import { TfComponent } from './components/tf/tf.component';
import { RfComponent } from './components/rf/rf.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'tf',component:TfComponent},
  {path:'rf',component:RfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
