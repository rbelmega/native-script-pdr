import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

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
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.forEach(params => {
      console.log(params.id);
      if (+params.id === 33) {
        console.log(params.id);

        return this.router.navigate(['/home/signs']);
      }

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
