import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import "rxjs/add/operator/switchMap";

import {DataService} from '../../services/data.service';

@Component({
    selector: 'pdr-fines',
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
.fine {
	display: block;
	border-top: 1px solid #cccccc;
	margin: 0 -15px;
	margin-bottom: -20px;
	padding: 0 20px;
	padding-bottom: 20px;
	padding-top: 10px;
	color: #737373;
}

.fine-desc {
	display: block;
	margin-bottom: 6px;
}
  `],
    template: `
<ScrollView orientation="vertical" class="panel">
    <WrapLayout >
        <WrapLayout *ngFor="let fine of fines; let i = index" class="list-item">
            <Label
            class="fine-desc" 
            text="{{fine.text}}"
            textWrap="true"
            >
            </Label> 
           <Label
            class="fine" 
            text="{{fine.fine}}"
            textWrap="true"
            >
            </Label> 
        </WrapLayout>
    </WrapLayout>
</ScrollView>
`,
})
export class FinesComponent implements OnInit {
    public sub: any;
    public fines: any;

    constructor(private dataService: DataService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.params
            .forEach((params) => {
                this.dataService.getFines().subscribe(data => {
                    this.fines = data;
                }, err => {
                    console.log(JSON.stringify(err));
                })
            });
    }
}
