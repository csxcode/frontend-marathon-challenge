import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import { SharedComponentsModule } from '@shared/shared-components.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './components/view/view.component';

@NgModule({
  declarations: [
    IndexComponent,
    ViewComponent,
  ],
  exports: [
    IndexComponent,
    ViewComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedComponentsModule,
    TooltipModule,
  ],
  providers: [
    BsModalService
  ]
})
export class PersonModule { }
