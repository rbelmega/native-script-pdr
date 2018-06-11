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
      .map(data =>
        data.map(item => ({
          ...item,
          searched: item.searched.map(items => ({
            ...items,
            value: this.mapper(items.value),
          })),
        }))
      )
      .subscribe(data => {
        this.searchData = data;
      });
  }

  private mapper(text) {
    const search = this.searchText;
    const regex = /(<([^>]+)>)/gi;
    text = text.replace(regex, '');
    text = text.replace(/&#?[a-z0-9]+;/g, '');
    const pos = text.search(search);

    return {
      part_1: text.substring(pos - 40 || 0, pos),
      searched: search,
      part_2: text.substring(pos + search.length, pos + search.length + 40),
    };
  }
}
