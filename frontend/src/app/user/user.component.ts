import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import {MenuItem, MessageService} from 'primeng/api';
import { User } from '../model/user';
import { AuthenticationService } from '../service/authentication.service';
import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
//import { NotificationType } from './enum/notification-type.enum';


import { FileUploadStatus } from '../model/file-upload-status';
import { Role } from '../model/role';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  private titleSubject =new BehaviorSubject <string>('Users');
  public titleAction$ = this.titleSubject.asObservable();
  public user: any;
  public users: any;
  
  public refreshing = false;
  public selectedUser: any;
  public fileName: any;
  public profileImage:any;
  private subscriptions: Subscription[] = [];
  public editUser = new User();
  private currentUsername: any;  
  
  public fileStatus = new FileUploadStatus();
  items: any;
    
  activeIndex: number = 0;
  clickButton: any;
ProfileImage:any;
onProfileImageChange: any;
  userService: any;

  sendNotification: any;  
  

  
  getUsers: any;
  
  isAdmin: any;
  

  constructor(private authenticationService:AuthenticationService, private messageService: MessageService, private router: Router) { }

  public changeTitle(title: string): void {
    this.titleSubject.next(title);
  }

  getStock(){

  alert('do something');

  }
  public onAddNewUser(userForm: NgForm): void {
    const formData = this.userService.createUserFormDate(null, userForm.value, this.profileImage);
    this.subscriptions.push(
      this.userService.addUser(formData).subscribe(
        (response: User) => {
          this.clickButton('new-user-close');
          this.getUsers(false);
          this.fileName = null;
          this.profileImage = null;
          userForm.reset();
          this.messageService.add({severity:'success', summary: 'Success', detail:  `${response.firstName} ${response.lastName} added successfully`});
        },
        (errorResponse: HttpErrorResponse) => {
        //  this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
          this.profileImage = null;
        }
      )
      );
  }

  
  public onUpdateCurrentUser(user: User): void {
    this.refreshing = true;
   // this.currentUsername = this.authenticationService.getUserFromLocalCache().username;
   this.currentUsername ='yk';
    const formData = this.userService.createUserFormDate(this.currentUsername, user, this.profileImage);
    this.subscriptions.push(
      this.userService.updateUser(formData).subscribe(
        (response: User) => {
          this.authenticationService.addUserToLocalCache(response);
          this.getUsers(false);
          this.fileName = null;
          this.profileImage = null;
          this.messageService.add({severity:'success', summary: 'Success', detail:  `${response.firstName} ${response.lastName} updated successfully`});

        },
        (errorResponse: HttpErrorResponse) => {
       //   this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
          this.refreshing = false;
          this.profileImage = null;
        }
      )
      );
  }


  public onUpdateProfileImage(): void {
    const formData = new FormData();
    formData.append('username', this.user.username);
    formData.append('profileImage', this.profileImage);
    this.subscriptions.push(
      this.userService.updateProfileImage(formData).subscribe(
        (event: HttpEvent<any>) => {
          this.reportUploadProgress(event);
        },
        (errorResponse: HttpErrorResponse) => {
        //  this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
          this.fileStatus.status = 'done';
        }
      )
    );
  }
  private reportUploadProgress(event: HttpEvent<any>): void {
    switch (event.type) {
      case HttpEventType.UploadProgress:
        //this.fileStatus.percentage = Math.round(100 * event.loaded / event.total);
        this.fileStatus.status = 'progress';
        break;
      case HttpEventType.Response:
        if (event.status === 200) {
          this.user.profileImageUrl = `${event.body.profileImageUrl}?time=${new Date().getTime()}`;
          this.messageService.add({severity:'success', summary: 'Success', detail:  `${event.body.firstName}\'s profile image updated successfully`});


          this.fileStatus.status = 'done';
          break;
        } else {
       //   this.sendNotification(NotificationType.ERROR, `Unable to upload image. Please try again`);
          break;
        }
      default:
        `Finished all processes`;
    }
  }

  
  public get isAdminOrManager(): boolean {
    return this.isAdmin || this.isManager;
  }




  public get isManager(): boolean {
    const role = this.getUserRole();

    
    return  (this.isAdmin ||role) === Role.MANAGER;
 


  }

  
 
 
  public onLogOut(): void {
    this.authenticationService.logOut();
    this.router.navigate(['login']);
   // this.sendNotification(NotificationType.SUCCESS, `You've been successfully logged out`);
  }
 


  private getUserRole(): string {
    return 'Admin';
  }



  public updateProfileImage(): void{


this.clickButton('onProfileImageChange');

  }

  onResetPassword(val:any){}
  ngOnInit(): void {

    this.user=this.authenticationService.getUserFromLocalCache();



  
    this.items = [{
      label: 'Purchase Requarst Sent To Manager',
      command: (event: any) => {
          this.activeIndex = 0;
          this.messageService.add({severity:'info', summary:'First Step', detail: event.item.label});
      }
  },
  {
      label: 'Seat',
      command: (event: any) => {
          this.activeIndex = 1;
          this.messageService.add({severity:'info', summary:'Seat Selection', detail: event.item.label});
      }
  },
  {
      label: 'Payment',
      command: (event: any) => {
          this.activeIndex = 2;
          this.messageService.add({severity:'info', summary:'Pay with CC', detail: event.item.label});
      }
  },
  {
      label: 'Confirmation',
      command: (event: any) => {
          this.activeIndex = 3;
          this.messageService.add({severity:'info', summary:'Last Step', detail: event.item.label});
      }
  }
];
  }
  complete(){}
  prevPage() {
    this.activeIndex--;
  }

  nextPage() {
    this.activeIndex++;
  }
  saveNewUser(){}
  searchUsers(){

  }
  onUpdateUser(){}
  

}
