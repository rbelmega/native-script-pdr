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
.sign-image {
    display: inline-block;
    width: 50px;
    margin-right: 30px;
}
  `],
  template: `
<ScrollView orientation="vertical">
    <WrapLayout class="list-group">
      <WrapLayout 
        *ngFor="let list of lists; let i = index"
        class="list-group-item" 
        textWrap="true"
        [nsRouterLink]="['/signs', list.id]" 
        >
        <Image src=" {{ list.img }}" class="sign-image"></Image>
        <Label 
        text="{{list.desc}}"
        textWrap="true"
        ></Label>
             
    </WrapLayout>
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
          {id: '1', desc: 'Попереджувальні знаки', img: '~/images/sign/1/main.jpg'},
          {id: '2', desc: 'Знаки пріоритету', img: '~/images/sign/2/main.gif'},
          {id: '3', desc: 'Заборонні знаки', img: '~/images/sign/3/main.gif'},
          {id: '4', desc: 'Наказові знаки', img: '~/images/sign/4/main.gif'},
          {id: '5', desc: 'Інформаційно-вказівні знаки', img: '~/images/sign/5/main.gif'},
          {id: '6', desc: 'Знаки сервісу', img: '~/images/sign/6/main.gif'},
          {id: '7', desc: 'Таблички до дорожніх знаків', img: '~/images/sign/7/main.gif'}
      ];
  }
}
