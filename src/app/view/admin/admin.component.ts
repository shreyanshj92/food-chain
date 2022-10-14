import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  loading = false;
    users: User[] = [];

    constructor() { }

    ngOnInit() {
        this.loading = true;
    }

}
