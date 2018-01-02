import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'pdr-sings',
  styles: [`
.list-group {
	background: #fff;
}

.list-group-item {
	display: block;
	width: 100%;
	padding-top: 20px;
	padding-bottom: 20px;
	padding-right: 40px;
	padding-left: 40px;
	background: #fff;
	color: #000000;
	border: 0;
	margin-bottom: 10px;
	border-bottom-color: #ececec;
	border-bottom-width: 1px;
	border-bottom-style: solid;
	line-height: 16px;
}

.list-group-item:last-of-type {
	border-bottom: none;
	margin-bottom: 1px;
	box-shadow: none;
}
  `],
  template: `
<ScrollView orientation="vertical">
    <WrapLayout class="list-group">
      <Label 
        *ngFor="let list of lists; let i = index"
        class="list-group-item" 
        text="{{i+1}}. {{list.name}}"
        textWrap="true"
        [nsRouterLink]="['/topic', list.id]" 
        >
    </Label>
    </WrapLayout>
</ScrollView>
`,
})
export class SingsComponent implements OnInit {
  public lists: any = [];
  constructor(
      private dataService: DataService
  ) {}

  ngOnInit() {
      this.lists = [
          {id: '1', desc: 'Попереджувальні знаки', img: 'img/sign/1/main.jpg'},
          {id: '2', desc: 'Знаки пріоритету', img: 'img/sign/2/main.gif'},
          {id: '3', desc: 'Заборонні знаки', img: 'img/sign/3/main.gif'},
          {id: '4', desc: 'Наказові знаки', img: 'img/sign/4/main.gif'},
          {id: '5', desc: 'Інформаційно-вказівні знаки', img: 'img/sign/5/main.gif'},
          {id: '6', desc: 'Знаки сервісу', img: 'img/sign/6/main.gif'},
          {id: '7', desc: 'Таблички до дорожніх знаків', img: 'img/sign/7/main.gif'}
      ];
  }
}
