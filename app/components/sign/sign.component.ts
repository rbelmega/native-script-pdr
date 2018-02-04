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
.sign-image {
    display: inline-block;
    width: 50px;
    margin-right: 30px;
}
  `],
  template: `
<ScrollView orientation="vertical" class="panel">
    <WrapLayout >
        <WrapLayout *ngFor="let list of topic; let i = index">
            <WrapLayout class="list-item">
               <WrapLayout *ngFor="let hh of list.images">
                   <Image class="sign-image" src="{{ '~/assets/images/sign/' + signCategory + '/' + hh.src }}" class="sign-image"></Image>
                   <Label text="{{ hh.desc }}"></Label>
               </WrapLayout>
               <HtmlView [html]="list.desc"></HtmlView>
               </WrapLayout>
        </WrapLayout>
    </WrapLayout>
</ScrollView>
`,
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
      this.activatedRoute.params
          .forEach((params) => {
              this.signCategory = params.id;
              this.dataService.getSignById(params.id).subscribe(data => {
                  this.topic = data;
              }, err => {
                  console.log(JSON.stringify(err));
              })
          });
  }
}
