import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'pdr-home',
  styles: [`
    .full-width {
        width: 100%;
    }
  `],
  template: `
<ScrollView orientation="vertical">
    <WrapLayout>
      <Label 
        *ngFor="let list of lists"
        class="h3 p-15 full-width" 
        text="{{list.name}}"
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
