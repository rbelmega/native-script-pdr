import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {
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
        console.log(data);
        return Observable.of(data);
    }

    getSignById(id) {
        const data = require(`../assets/data/signs/${id}.json`);
        return Observable.of(data);
    }
}
