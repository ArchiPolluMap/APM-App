import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule'},
  { path: 'rpi', loadChildren: './rpi/rpi.module#RPiPageModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
