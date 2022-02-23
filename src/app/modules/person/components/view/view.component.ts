import { Component, EventEmitter, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-view-person',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent {
  model: any;
  public eventClosed: EventEmitter<any> = new EventEmitter();

  constructor(public bsModalRef: BsModalRef) {}
}
