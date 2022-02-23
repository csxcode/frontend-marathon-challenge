import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

interface ErrorTypeMessageInterface {
    required?: string;
    email?: string;
    pattern?: string;
    minlength?: string;
}

interface ErrorValueInterface {
    requiredLength?: string;
    size?: string;
    type?: string;
    email?: string;
}

@Component({
  selector: 'app-control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.scss']
})

export class ControlMessagesComponent implements OnInit {

  @Input() control!: AbstractControl | null;
  @Input() customMessages!: ErrorTypeMessageInterface;
  @Input() showMessage = true;
  @Input() showBorder = true;
  @Input() messageClass = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  get message(): string {
      let message = '';
      if ( this.control ) {
          for ( const errorName in this.control.errors ) {
              if ( this.control.errors.hasOwnProperty( errorName ) && this.control.touched ) {
                  message = this.customMessages && this.getValue( errorName ) ? this.getValue( errorName ) : this.getMessage( errorName, this.control.errors[ errorName ] );
              }
          }
      }
      return message;
  }

  getValue( errorName: string ): string {
      const error = Object.entries( this.customMessages ).find( x => x[ 0 ] === errorName );
      return error ? error[ 1 ] : null;
  }


  isInvalid( control: AbstractControl | null ): boolean | null {
      return control && control.errors && control.touched;
  }

  getMessage( errorName: string, errorValue: ErrorValueInterface ): string {
      let msg = '';
      switch ( errorName ) {
          case 'required':
              msg = 'Field is required*';
              break;
          case 'email':
              msg = 'Email does not valid';
              break;
          case 'pattern':
              msg = 'Format does not valid';
              break;
          case 'minlength':
              msg = `It must be at least ${errorValue.requiredLength} characters`;
              break;
          case 'maxlength':
              msg = `Only ${errorValue.requiredLength} characters allowed`;
              break;
          default:
              return '';
      }

      return msg;
  }

}
