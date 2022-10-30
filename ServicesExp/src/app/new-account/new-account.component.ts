import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
  }

  onCreateAccount(name:string, status:string){
    this.accountsService.addAccount(name, status);
  }

}
