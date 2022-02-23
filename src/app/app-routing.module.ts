import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './modules/auth/auth.routing';
import { PersonRoutingModule } from './modules/person/person.routing';
import { NotFoundComponent } from '@shared/pages/not-found/not-found.component'

const routes: Routes = [
  { path: '', redirectTo: '/persons', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PersonRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
