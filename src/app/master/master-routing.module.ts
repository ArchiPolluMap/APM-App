import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: 'register', loadChildren: './register/register.module#RegisterPageModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }