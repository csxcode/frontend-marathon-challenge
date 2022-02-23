import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PersonService } from '../../services/person.service';
import { Loader } from '@shared/utils/loader';
import { ViewComponent } from '../../components/view/view.component';
import { Utils } from '../../../../shared/utils/utils';
import { SunatService } from '../../../../core/services/sunat.service';
import { AlertService } from '../../../../core/services/alert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  loader: Loader;
  data: any[];

  sunatFilter: any = {
    ruc: ''
  };

  filter: any = {
    page: 1,
    limit: 12,
    id: null,
    search: null
  };
  pagination: any = {
      itemsPerPage: 1,
      currentPage: 1,
      totalItems: 0,
      totalPages: 0,
  };

  constructor(
    private personService: PersonService,
    private sunatService: SunatService,
    private modalService: BsModalService,
    private alertService: AlertService
  ) {
    this.loader = new Loader();
  }

  ngOnInit() {
    this.getData();
  }

  getData(page?: number) {
    this.data = [];

    this.filter = Utils.removeEmpty(this.filter);
    this.filter.page = page ? page : 1;
    this.loader.show();

    this.personService.search(this.filter).then(
      (response: any) => {
        let {items, meta} = response.data;

        this.data = items;
        this.setMetaPagination(meta);
        this.loader.hide()
      },
      (err) => {
        this.loader.hide()
      }
    );
  }

  setMetaPagination(meta) {
    this.pagination = {
      itemsPerPage: meta.items_per_page,
      currentPage: meta.current_page,
      totalItems: meta.total_items,
      totalPages: meta.total_pages,
    };
  }

  pageChanged(e) {
    this.pagination.currentPage = e;
    this.getData(e);
  }

  clearForm() {
    this.sunatFilter.ruc = null;
  }

  showForm(model?: any) {
    const initialState = {
      model,
    };
    this.modalService.show(ViewComponent, {
      class: 'modal-lg modal-dialog-centered',
      backdrop: 'static',
      keyboard: false,
      initialState,
    });
  }

  searchRuc(){
    this.alertService.startLoading();
    this.sunatService.findRuc(this.sunatFilter.ruc).then(
      (response: any) => {

        this.alertService.confirm('Would you like to add this ruc found to our records?', 'Ruc Found').then((result) => {

          if (result.isConfirmed) {
            this.personService.create(response.data).then((createResponse: any) => {
              this.alertService.success(`Ruc ${createResponse.data.ruc} was added successfully`);
              this.getData();
              this.clearForm();
            },
            (err) => {
                this.alertService.infoAlert('Error', err.error.message);
                console.log(err);
            });
          }
        })

      },
      (err) => {
          this.alertService.infoAlert('Not Found', err.error.message);
          console.log(err);
      }
    );
  }
}
