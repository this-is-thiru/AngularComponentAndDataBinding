import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() account!: {name: string, status: string};
  @Input() id!:number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
  }

  onSetTo(status: string){
    this.accountsService.updateStatus(this.id, status);
  }
}
