import { Component } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { environment } from '../../../../environments/environment';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers:[ApiService]
})
export class LoginComponent {
  authFrom = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  constructor(
    private api: ApiService,
    private toastr: ToastrService,
    private router: Router
  ){}

  login(){
    console.log(this.authFrom.value)
    this.api.post(`${environment.apiUrl}/login`, this.authFrom.value).subscribe({
        next: (data: any) => {
          console.log(data);
          this.toastr.success('Login success', 'Success')
          this.router.navigate(['/'])
        },
        error:(error: any) => {
          this.toastr.error(error.error.message, 'Error');
          console.error(error);
        } 
      }
    )
  }
}
