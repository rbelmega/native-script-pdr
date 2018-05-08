import { Component, OnInit } from '@angular/core';
import { SearchBar } from 'ui/search-bar';
import { DataService } from '../../services/data.service';

@Component({
  moduleId: module.id,
  selector: 'pdr-sings',
  styleUrls: ['search.component.scss'],
  templateUrl: 'search.component.html',
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
