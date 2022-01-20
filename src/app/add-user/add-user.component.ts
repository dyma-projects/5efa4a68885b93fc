import { Component, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  @ViewChild('input') public el: ElementRef;

  constructor(
    private userService : UserService
  ) { }

  addUser() {
    const username = this.el.nativeElement.value;
    if (username) {
      this.userService.addUser(username);
      this.el.nativeElement.value = '';
    }
  }

}
