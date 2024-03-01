import { Injectable } from '@angular/core';
import { UserInterFace } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userSchema: UserInterFace = {
    firstName: '',
    lastName: '',
    email: '',
    profile: '',
    password: '',
    confirmPassWord: '',
  };

  clearAllInputFields() {
    this.userSchema.firstName = '';
    this.userSchema.lastName = '';
    this.userSchema.email = '';
    this.userSchema.profile = '';
    this.userSchema.password = '';
    this.userSchema.confirmPassWord = '';
  }

  alertNotification(notification: string) {
    window.alert(notification);
  }

  isEmptyField(): boolean {
    return !(
      this.userSchema.firstName &&
      this.userSchema.lastName &&
      this.userSchema.email &&
      this.userSchema.profile &&
      this.userSchema.password &&
      this.userSchema.confirmPassWord
    );
  }

  removeData(item: any, id: number) {
    return item.splice(id, 1);
  }
}
