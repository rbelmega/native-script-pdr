import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {
  public result: any;

  constructor(private http: HttpClient) {
    this.result = new Subject();
  }

  getList() {
    const data = require('../assets/data/topics/list.json');

    return Observable.of(data);
  }

  getFines() {
    const data = require('../assets/data/fines/fines.json');
    return Observable.of(data);
  }

  getTopicById(id) {
    const data = require(`../assets/data/topics/${id}.json`);
    return Observable.of(data);
  }

  getSignById(id) {
    const data = require(`../assets/data/signs/${id}.json`);
    return Observable.of(data);
  }

  getAllData() {
    const requests = Array.from(Array(34).keys()).map(i =>
      this.getTopicById(i + 1)
    );

    return Observable.forkJoin(requests);
  }

  search({ searchText, data$ }) {
    const search = searchText.toLowerCase();

    return data$.map(data =>
      data
        .map((item, index) => {
          const searched = (item.nodes || []).filter(node => {
            return ~node.value.toLowerCase().indexOf(search);
          });

          return {
            index,
            searched,
          };
        })
        .filter(item => item.searched.length)
    );
  }
}
