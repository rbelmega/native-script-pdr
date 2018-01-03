import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import "rxjs/add/operator/switchMap";

import {DataService} from '../../services/data.service';

@Component({
  selector: 'pdr-topic',
  styles: [`
.panel {
	background-color: #f2f2f2;
	color: rgb(66, 94, 106);
	font-size: 14px;
	line-height: 20px;
	text-shadow: 0px 1px rgb(255, 255, 255);
}

.list-item {
    margin-top: 20px;
	margin-bottom: 20px;
	border-radius: 2px;
	padding-top: 20px;
	padding-bottom: 20px;
	padding-right: 15px;
	padding-left: 15px;
	color: #000000;
	background: #ffffff;
	border: 0;
	border-bottom-width: 1px;
	border-bottom-style: solid;
	border-bottom-color: rgb(204, 204, 204);
	box-shadow: 0 4px 4px #e2e2e2;
	width: 100%;
}
  `],
  template: `
<ScrollView orientation="vertical" class="panel">
    <WrapLayout >
        <WrapLayout *ngFor="let list of topic; let i = index">
           <Label
            *ngIf="list.type == 'html'"
            class="list-item" 
            text="{{list.desc}}"
            textWrap="true"
            >
            </Label>
               <HtmlView
                 [html]="list.desc"
                 class="list-item"
               ></HtmlView>
        </WrapLayout>
    </WrapLayout>
</ScrollView>
`,
})
export class SignComponent implements OnInit {
  public sub: any;
  public topic: any;

  constructor(
      private dataService: DataService,
      private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
      this.activatedRoute.params
          .forEach((params) => {
              this.dataService.getSignById(params.id).subscribe(data => {
                  this.topic = data;
              }, err => {
                  console.log(JSON.stringify(err));
              })
          });
  }
}
