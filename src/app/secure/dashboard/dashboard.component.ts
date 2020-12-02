import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SubscriberService } from '../services/subscriber.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() type;
  public addSubscriberForm;

  constructor(
    private subService: SubscriberService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.addSubscriberForm = this.fb.group({
      msisdn: ['', [Validators.required,]],
      pin: ['', [Validators.required,]],
      acc_status: ['', [Validators.required,]],
    });
  }

  /**
  * Adding subscriber to 
  */
  public addSubscriber() {
    let temp = this.addSubscriberForm.getRawValue();
    let subscriber = {
      msisdn: temp.msisdn,
      pin: temp.pin,
      acc_status: "UNLOCKED",
    }
    // this.addToCartList.push(newItem);
    this.subService.addSubscriber(subscriber).subscribe(data => {
      console.log(data);
    });
  }

}
