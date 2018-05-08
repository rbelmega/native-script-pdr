import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  moduleId: module.id,
  selector: 'pdr-sings',
  styleUrls: ['signs.component.scss'],
  templateUrl: 'signs.component.html',
})
export class SingsComponent implements OnInit {
  public lists: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.lists = [
      {
        id: '1',
        desc: 'Попереджувальні знаки',
        img: '~/assets/images/sign/1/main.jpg',
      },
      {
        id: '2',
        desc: 'Знаки пріоритету',
        img: '~/assets/images/sign/2/main.gif',
      },
      {
        id: '3',
        desc: 'Заборонні знаки',
        img: '~/assets/images/sign/3/main.gif',
      },
      {
        id: '4',
        desc: 'Наказові знаки',
        img: '~/assets/images/sign/4/main.gif',
      },
      {
        id: '5',
        desc: 'Інформаційно-вказівні знаки',
        img: '~/assets/images/sign/5/main.gif',
      },
      {
        id: '6',
        desc: 'Знаки сервісу',
        img: '~/assets/images/sign/6/main.gif',
      },
      {
        id: '7',
        desc: 'Таблички до дорожніх знаків',
        img: '~/assets/images/sign/7/main.gif',
      },
    ];
  }
}
