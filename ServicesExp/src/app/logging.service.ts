import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'}) // This is exactly the same as @NgModule({..., providers:[LoggingService]}) use is lazy-loading
export class LoggingService{
    onServerChanged(status:string){
        console.log('A server status changed, new status: '+status);
    }
}