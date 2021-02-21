import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../service/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageResponse} from "../../../model/message-response";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // messageResponse: MessageResponse = {};
  isUserLoggedIn = false;
  returnUrl: string = '';

  constructor(private authService: AuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.authService.currentUserValue) {
      this.isUserLoggedIn = true;
    }
  }

  logout() {
    if (confirm('Are you sure to continue?')) {
      alert('User logout successfully!');
      this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
      this.authService.logout().subscribe(data => {
        // this.messageResponse = data;
        // alert(this.messageResponse.message);
      });
      this.isUserLoggedIn = false;
      this.router.navigate([this.returnUrl]);
      window.location.reload();
    }
  }

}
