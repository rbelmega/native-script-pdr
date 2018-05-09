import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { DataService } from '../../services/data.service';

@Component({
  moduleId: module.id,
  selector: 'pdr-topic',
  styleUrls: ['sign.component.scss'],
  templateUrl: 'sign.component.html',
})
export class SignComponent implements OnInit {
  public sub: any;
  public topic: any;
  public signCategory: any;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.forEach(params => {
      this.signCategory = params.id;
      this.dataService.getSignById(params.id).subscribe(
        data => {
          this.topic = data;
        },
        err => {
          console.log(JSON.stringify(err));
        }
      );
    });
  }
}
