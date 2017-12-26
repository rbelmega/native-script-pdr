import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'pdr-home',
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
export class HomeComponent implements OnInit {
  public lists: any = [];
  constructor(
      private dataService: DataService
  ) {}

  ngOnInit() {
      this.dataService.getList().subscribe(data => {
          this.lists = data;
      })
  }
}
