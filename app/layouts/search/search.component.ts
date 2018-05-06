import { Component, OnInit } from '@angular/core';
import { SearchBar } from 'ui/search-bar';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'pdr-sings',
  styles: [
    `
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
  `,
  ],
  template: `
<ScrollView orientation="vertical">
  <WrapLayout>
    <SearchBar
        hint="Search hint"
        (textChange)="onTextChanged($event)" 
        color="black"
        textFieldHintColor="white">
    </SearchBar>
    <StackLayout *ngFor="let data of searchData" class="list-group"  [nsRouterLink]="['/topic', lists[data.index].id]" >
        <Label
            class="list-group-item" 
            text="{{lists[data.index].name}}"
            textWrap="true">
        </Label> 
        <StackLayout *ngFor="let topic of data.searched" class="list-item">
            <!--<Label-->
                <!--*ngIf="topic.type == 'p'"-->
                <!--class="list-item" -->
                <!--text="{{topic.value | searcher : searchText}}"-->
                <!--textWrap="true">-->
            <!--</Label>-->
            <HtmlView
                 [html]="topic.value | searcher : searchText"
                 class="list-item">
            </HtmlView>
        </StackLayout>
    </StackLayout>
  </WrapLayout>
</ScrollView>
`,
})
export class SearchComponent implements OnInit {
  public searchText: any;
  public lists: any = [];
  public searchData: any = [];
  public allData$: any;

  constructor(private dataService: DataService) {
    this.allData$ = this.dataService.getAllData();
  }

  ngOnInit() {
    this.dataService.getList().subscribe(list => {
      this.lists = list;
    });
  }

  public onTextChanged(args) {
    let searchBar = <SearchBar>args.object;
    this.searchText = searchBar.text.toLowerCase();

    if (!this.searchText) {
      this.searchData = [];
      return;
    }

    this.dataService
      .search({ searchText: this.searchText, data$: this.allData$ })
      .subscribe(data => {
        this.searchData = data;
      });
  }
}
