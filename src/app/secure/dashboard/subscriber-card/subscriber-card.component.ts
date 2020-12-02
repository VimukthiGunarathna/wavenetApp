import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SubscriberService } from '../../services/subscriber.service';
import { VoicemailService } from '../../services/voicemail.service';

@Component({
  selector: 'app-subscriber-card',
  templateUrl: './subscriber-card.component.html',
  styleUrls: ['./subscriber-card.component.scss']
})
export class SubscriberCardComponent implements OnInit {

  @Input() type;
  public subscribersList = []; // which holds all the subscribers
  public issubscribersListEmpty = true;

  constructor(
    private subService: SubscriberService
  ) { }

  ngOnInit(): void {
    this.subService.getAllSubscribers().subscribe(data => {
      console.log(data);
      this.subscribersList = data;
      this.issubscribersListEmpty = false
    });
  }

}
