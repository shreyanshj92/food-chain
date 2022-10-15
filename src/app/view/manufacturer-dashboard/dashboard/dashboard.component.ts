import { Component, OnInit } from '@angular/core';

import { KEY_VALUE } from 'src/app/shared/constants/constant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data = [{"id":"1","name":"Jasper V.","progress":"87","fruit":"lychee"},{"id":"2","name":"Cora M.","progress":"17","fruit":"lime"},{"id":"3","name":"Jasper O.","progress":"60","fruit":"mango"},{"id":"4","name":"Amelia A.","progress":"21","fruit":"pomegranate"},{"id":"5","name":"Theodore I.","progress":"79","fruit":"mango"},{"id":"6","name":"Theodore A.","progress":"21","fruit":"peach"},{"id":"7","name":"Charlotte A.","progress":"70","fruit":"kiwi"},{"id":"8","name":"Theodore A.","progress":"82","fruit":"pineapple"},{"id":"9","name":"Levi T.","progress":"98","fruit":"lime"},{"id":"10","name":"Elizabeth A.","progress":"51","fruit":"pomegranate"},{"id":"11","name":"Thomas M.","progress":"100","fruit":"pomegranate"},{"id":"12","name":"Charlotte M.","progress":"60","fruit":"lime"}];

 keyValuePairs = KEY_VALUE;
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  constructor() { }

  ngOnInit(): void {
  }

}
