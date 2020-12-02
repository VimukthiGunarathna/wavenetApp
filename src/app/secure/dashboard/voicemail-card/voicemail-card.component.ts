import { Component, OnInit } from '@angular/core';
import { VoicemailService } from '../../services/voicemail.service';

@Component({
  selector: 'app-voicemail-card',
  templateUrl: './voicemail-card.component.html',
  styleUrls: ['./voicemail-card.component.scss']
})
export class VoicemailCardComponent implements OnInit {


  public voiceMailList;

  constructor(
    private voiceMailService: VoicemailService,
  ) { }

  ngOnInit(): void {
    // Get all the availabe products pricing    
    this.voiceMailService.getAllMails().subscribe(data => {
      this.voiceMailList = data;
    });
  }

}
