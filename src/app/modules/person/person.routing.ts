import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IndexComponent } from './pages/index/index.component'
import { AuthenticatedGuard } from '@core/guards/authenticated.guard'
import { MainLayoutComponent } from '../../shared/layouts/main/main-layout.component';

const routes: Routes = [
  {
    path: 'persons',
    component: MainLayoutComponent,
    children: [
      { path: '', component: IndexComponent, canActivate: [AuthenticatedGuard] },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule {}
