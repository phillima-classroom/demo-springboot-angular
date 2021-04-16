import {Component, OnInit} from '@angular/core';
import {MessageService} from './service/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  message = 'No response :(';

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.messageService.getWelcomeMessage().subscribe(resposta => this.message = resposta.message);
  }
}
