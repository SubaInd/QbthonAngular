import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators  } from '@angular/forms';
import {EventsInfoService} from '../user/events-info/events-info.service';
import {EventsService} from './events.service';
import {MessageComponent} from '../message/message.component';
import { MatDialog, MatDialogRef } from  '@angular/material/dialog';
import { JitEvaluator } from '@angular/compiler';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  displayCreateEvent = false;
  eventCreationForm: FormGroup;
  selectedSkills:any;
  public selected : any = '';
  eventSkills: any;
  selectedAssocs:any;
  assocs:any;
  startTime: string;
  endTime: string;
  slot: string;
  
  constructor(private formBuilder: FormBuilder,private eventsInfoService : EventsInfoService,private eventsService : EventsService,private  dialog:  MatDialog) { 
    this.selected='';
    this.getSkills();
       this.reset();
  }
  get f() { return this.eventCreationForm.controls}; 

  getSkills() {
    this.eventsInfoService.getSkills().subscribe((data)=>{
      console.log('Data =>'+data);
      this.eventSkills = data;
      this.selectedSkills = this.eventSkills;
    });
  }

  getAssocIds() {
    console.log('Selected Skills',this.selectedSkills)
    this.eventsService.getAssocIds(this.selectedSkills).subscribe((data)=>{
      console.log('Data =>'+data);
      this.assocs = data;
      this.selectedAssocs = this.assocs;
    });
  }

  reset() {
    this.getSkills();
    this.selected = "10";      
  }

  submit() {
    
     
      console.log("inside component");   
      console.log("EventName",this.eventCreationForm.get('eventName').value);
      this.slot= this.eventCreationForm.get('eventSlot').value;
      if(this.slot == "Morning") {
        this.startTime = "10:00 AM";
        this.endTime = "1:00 PM";
      }
      if(this.slot == "Noon") {
        this.startTime = "3:00 PM";
        this.endTime = "6:00 PM";
      }
      console.log("EventStartTime",this.startTime);
      const postData = {
        eventName: this.eventCreationForm.get('eventName').value,
        eventDate: this.eventCreationForm.get('eventDate').value,
        eventSlot: this.eventCreationForm.get('eventSlot').value,
        eventSkills: this.selectedSkills,
        associateList: this.selectedAssocs,
        eventstartTime: this.startTime,
        eventEndTime: this.endTime
        
      }
      console.log(postData);
      this.eventsService.createEvent(postData).subscribe((data)=>{
      console.log("Event Creation Submitted");
      this.dialog.open(MessageComponent,{ data: {
        message:  "Event Created Successfully!!!"
        }});
      });
    }
  
  

  clear() {
    console.log('clear');
    this.reset();
  }
  
  ngOnInit(): void {
    this.eventCreationForm= this.formBuilder.group({eventName: ['', Validators.required],
    eventDate: ['', Validators.required],
    eventSlot: ['', Validators.required],
    });
            this.getSkills();
  }
  displayscreen(): void{
    this.displayCreateEvent = true;
  }

}

export interface EventDetails {
  eventName: string;
  eventDate: string;
  eventSlot: string;
  eventSkills: string[];
  associateList: string[];
  eventstartTime: string;
  eventEndTime: string;
  
}
