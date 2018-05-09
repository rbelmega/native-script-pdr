import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../services/data.service';

@Component({
  moduleId: module.id,
  selector: 'pdr-topic',
  styleUrls: ['topic.component.scss'],
  templateUrl: 'topic.component.html',
})
export class TopicComponent implements OnInit {
  public sub: any;
  public topic: any;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.forEach(params => {
      this.dataService.getTopicById(params.id).subscribe(
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
