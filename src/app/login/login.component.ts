import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-login',
  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  loading = false;
    submitted = false;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    if( this.f.username.value == "admin"){
      console.log("admin user");
      this.returnUrl = "/admin"
      this.router.navigate([this.returnUrl]);
      
    }
    else if (this.f.username.value == "user") {
      this.returnUrl = "/user"
      this.router.navigate([this.returnUrl]);
      
    } else if(this.f.username.value == "sme"){
      this.returnUrl = "/sme"
      this.router.navigate([this.returnUrl]);
    }
   
  }

}
