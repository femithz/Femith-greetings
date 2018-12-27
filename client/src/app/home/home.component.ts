import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { MatSnackBar} from '@angular/material';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  messageForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.email, Validators.required]),
    message: new FormControl(null, Validators.required),
  });
  constructor(private _router: Router, private _adminService: AdminService) {}
  ngOnInit() {}
  sendMessage() {
    if (!this.messageForm.valid) {
          console.log('Invalid Form'); return;
        }
        this._adminService.send(JSON.stringify(this.messageForm.value))
        .subscribe(
          data => {
            // this.snackBar.open('Message has been Successfully sent', 'success', {
            //   duration: 1000,
            // });
              this.messageForm.reset();
              this._router.navigate(['']);
        },
        // tslint:disable-next-line:no-shadowed-variable
        error => console.error(error)
        );
  }
}
