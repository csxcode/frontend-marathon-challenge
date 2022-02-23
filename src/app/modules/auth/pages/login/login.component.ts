import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Authentication, User } from '../../interfaces/auth.interface'
import { MESSAGES } from '@shared/utils/messages'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  error?: string;
  isLoading?: boolean = false;
  isTextFieldType: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      username: ["sysadmin", [Validators.required, Validators.minLength(1)]],
      password: ["sysadmin", [Validators.required, Validators.minLength(4)]],
    });
  }

  login() {
    this.form.markAllAsTouched();
    this.error = undefined;

    if (this.form.valid) {
      this.isLoading = true;
      this.authService.login(this.form.value)
        .then((res) => {

          setTimeout(()=>{

            let auth: Authentication = {
              access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
              token_type: 'Bearer',
              expires_in: 3600,
            };
            let user: User = res.data;
            this.authService.store(auth, user);
            this.router.navigate(['/']);

          }, 700)

        })
        .catch((err) => {
          console.log(err);
          let message = err.error?.error || MESSAGES.ERROR;
          this.error = message;
          this.isLoading = false;
        });
    }
  }
}
