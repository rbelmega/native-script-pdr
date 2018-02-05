import {Component, OnInit} from '@angular/core';
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
  <TextField
  #secondTx
  keyboardType="search"
  hint="Enter some text and click the button"
  autocorrect="false"
  returnKeyType="search"
  (returnPress)="submit(secondTx.text)"
  class="input input-border"></TextField>
</ScrollView>
`,
})
export class SearchComponent implements OnInit {
    public lists: any = [];

    constructor(private dataService: DataService) {
    }

    ngOnInit() {

    }
    public submit(result) {
        alert("Text: " + result);
    }
}
