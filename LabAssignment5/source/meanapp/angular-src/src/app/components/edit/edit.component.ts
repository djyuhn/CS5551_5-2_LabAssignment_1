import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user: Object;
  uname: String;
  emailadd: String;
  about: String;
  hobbies: String;
  likes: String;
  dislikes: String;

  constructor(
    private authservice: AuthService,
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.authservice.getProfile().subscribe((profile:any) => {
        this.user = profile.user;
      },
      err => {
        console.log(err);
        return false;
      });
  }

  onEditSubmit(){
    this.authservice.getProfile().subscribe((profile:any) => {
        this.user = profile.user;
      },
      err => {
        console.log(err);
        return false;
      });

    const user2 = {
      username: this.uname,
      email: this.emailadd,
      about: this.about,
      hobbies: this.hobbies,
      likes: this.likes,
      dislikes: this.dislikes
    }
      console.log("Got input");

    // Required Fields
    if(!this.validateService.validateEdit(user2)){
      this.flashMessage.show('Please fill in all fields' +user2.about+ " " +user2.username, {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }


    // Update the user details
    this.authservice.updateUser(user2).subscribe((data: any) => {
      if(data.success){
        this.flashMessage.show('Changes Saved', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/profile']);
      } else {
        this.flashMessage.show('Something went awry', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/edit']);
      }
    });

  }

}
