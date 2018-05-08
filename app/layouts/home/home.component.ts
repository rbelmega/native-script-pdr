import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  moduleId: module.id,
  selector: 'pdr-home',
  styleUrls: ['home.component.scss'],
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
  public lists: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getList().subscribe(data => {
      this.lists = data;
    });
  }
}
