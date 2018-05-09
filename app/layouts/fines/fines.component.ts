import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { DataService } from '../../services/data.service';

@Component({
  moduleId: module.id,
  selector: 'pdr-fines',
  styleUrls: ['fines.component.scss'],
  templateUrl: 'fines.component.html',
})
export class FinesComponent implements OnInit {
  public sub: any;
  public fines: any;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.forEach(params => {
      this.dataService.getFines().subscribe(
        data => {
          this.fines = data;
        },
        err => {
          console.log(JSON.stringify(err));
        }
      );
    });
  }
}
