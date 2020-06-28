import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-triggermails',
  templateUrl: './triggermails.component.html',
  styleUrls: ['./triggermails.component.scss']
})
export class TriggermailsComponent implements OnInit {
  displayTriggerMail = false;
  triggerMailForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  get f() { return this.triggerMailForm.controls}; 

  ngOnInit(): void {
    this.triggerMailForm= this.formBuilder.group({mailType: ['', Validators.required],
    mailFrom: ['', Validators.required]});
  }

  displayscreen(): void{
    this.displayTriggerMail = true;
  }

}
