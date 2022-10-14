import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/shared/authentication.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  loading = false;
    
    userFromApi: User = new User();

    constructor(
        private authenticationService: AuthenticationService
    ) {
    }

    ngOnInit() {
        this.loading = true;
    }

}
