import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import "rxjs/add/operator/switchMap";

import {DataService} from '../../services/data.service';

@Component({
  selector: 'pdr-topic',
  styles: [`
    .full-width {
        width: 100%;
    }
  `],
  template: `
<ScrollView orientation="vertical">
    <WrapLayout>
        <HtmlView [html]="topic.text" ></HtmlView>
    </WrapLayout>
</ScrollView>
`,
})
export class TopicComponent implements OnInit {
  public sub: any;
  public topic: any;

  constructor(
      private dataService: DataService,
      private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
      this.activatedRoute.params
          .forEach((params) => {
              this.dataService.getTopicById(params.id).subscribe(data => {
                  this.topic = data;
              }, err => {
                  console.log(JSON.stringify(err));
              })
          });
  }
}
