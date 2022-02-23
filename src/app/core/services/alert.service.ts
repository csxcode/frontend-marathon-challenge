import { Injectable } from '@angular/core';
import {environment} from '@environments/environment';
import Swal, {SweetAlertIcon} from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  simpleAlert(icon: SweetAlertIcon, title: string, text: string) {
    return Swal.fire({icon, title, text});
  }

  success(element, customTitle = false) {
    return Swal.fire({
      title: customTitle ? customTitle : environment.messages.created.title,
      text: element,
      icon: 'success'
    });

  }

  infoAlert(title, text) {
    return Swal.fire({
      title,
      text,
      icon: 'info'
    });
  }

  errorAlert(message, customTitle = false) {
    return Swal.fire({
      title: customTitle ? customTitle : environment.messages.error.title,
      text: message,
      icon: 'error'
    });
  }

  warningAlert(message, customTitle = null, showCancelButton = false) {
    return Swal.fire({
      title: customTitle ? customTitle : environment.messages.error.title,
      text: message,
      icon: 'warning',
      showCancelButton,
      cancelButtonText: 'Cancel'
    });
  }

  deleteSuccess(element, customTitle = false, verb = true) {
    return Swal.fire({
      title: customTitle ? customTitle : environment.messages.created.title,
      text: `${element} was deleted `,
      icon: 'success'
    });
  }

  confirm(message: string | null = null, customTitle: string | null = null, buttonConfirm: string | null = null) {
    return Swal.fire({
      title: customTitle ? customTitle : environment.messages.deleteConfirmation.title,
      text: message ? message : environment.messages.deleteConfirmation.text,
      icon: 'warning',
      showConfirmButton: true,
      confirmButtonText: buttonConfirm ? buttonConfirm : 'Yes',
      cancelButtonText: 'Cancel',
      showCancelButton: true
    });
  }

  startLoading() {
    return Swal.fire({
      title: 'Loading...',
      text: 'Please wait',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  }

  closeLoading() {
    Swal.close();
  }
}
