import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input() data: any;
  @Input() filter: any;
  @Input() isBusy: any;
  @Output() changePage = new EventEmitter();
  @Output() changePerPage = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.isBusy) {
      this.isBusy = changes.isBusy.currentValue;
    }
  }
}
