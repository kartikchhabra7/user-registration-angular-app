import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-note-manager',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './note-manager.component.html',
  styleUrl: './note-manager.component.scss',
})
export class NoteManagerComponent {
  constructor(private userService: UserService) {}
  userSchema = this.userService.userSchema;

  userData: any = [];
  editId: number | null = null;
  isUpdateActive: boolean = false;
  addUserData(): any {
    const addedDate: any = new Date();
    const createUserId: any = new Date().getTime();
    const existedData = this.userData.find((item: any) => {
      return item.email === this.userSchema.email;
    });
    const hasPasswordMatch =
      this.userSchema.password === this.userSchema.confirmPassWord;

    if (this.userService.isEmptyField()) {
      this.userService.alertNotification('Please fill in all fields');
      return;
    }
    if (existedData) {
      this.userService.alertNotification('Email Already Registered');
      return;
    }
    if (!hasPasswordMatch) {
      this.userService.alertNotification(
        'Password and confirm Password has not matched'
      );
      return;
    } else {
      this.userData.push({
        id: createUserId,
        ...this.userSchema,
        addedDate: addedDate,
      });
    }
    this.userService.clearAllInputFields();
    console.log(this.userData);
  }

  removeData(id: number) {
    this.userService.removeData(this.userData, id);
  }

  deleteAllData() {
    this.userData = [];
  }

  editData(user: any) {
    this.isUpdateActive = true;
    this.editId = user.id;
    this.userSchema = { ...user };
    console.log(this.editId);
  }

  updateData() {
    const updatedItem = {
      id: this.editId,
      ...this.userSchema,
    };

    const findIndex = this.userData.findIndex(
      (item: any) => item.id === this.editId
    );

    if (findIndex !== -1) {
      this.userData[findIndex] = updatedItem;
    }

    this.isUpdateActive = false;
    this.resetForm();
  }

  private resetForm(): void {
    this.userSchema = {
      firstName: '',
      lastName: '',
      email: '',
      profile: '',
      password: '',
      confirmPassWord: '',
    };
  }
}
