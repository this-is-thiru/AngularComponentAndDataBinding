import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Test Account',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
      
      constructor(private loggingService: LoggingService){}

      addAccount(name: string, status: string){
        this.accounts.push({name:name, status:status});
        this.loggingService.onServerChanged(status);
      }
    
      updateStatus(id: number, newStatus: string){
        this.accounts[id].status = newStatus;
        this.loggingService.onServerChanged(newStatus);
      }
}