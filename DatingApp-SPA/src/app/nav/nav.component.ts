import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.model).subscribe( next => {
      console.log('Logged succesfully');
       this.alertify.success('Logged in succesfully');
  }, error => {
      console.log('Error while logging..')
      // this.alertify.error(error);
    }, () => {
      this.router.navigate(['/members']);
    });
  }

  loggedIn() {
   return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    console.log('Logout successfuly.');
    this.router.navigate(['/home']);
    // this.alertify.message('logged out');
  }

}
