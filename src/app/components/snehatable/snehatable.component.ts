import { Component, OnInit } from '@angular/core';
import { SnehaService } from '../../services/sneha.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { Sneha } from '../../models/sneha.model';

@Component({
  selector: 'snehatable',
  templateUrl: './snehatable.component.html',
  styleUrls: ['./snehatable.component.css']
})
export class SnehatableComponent implements OnInit {
  dataSource = new SnehaDataSource(this.snehaService);
  displayedColumns = ['username', 'email', 'website'];
  constructor(private snehaService: SnehaService) { }

  ngOnInit() {
  }

}
export class SnehaDataSource extends DataSource<any> {
  constructor(private snehaService: SnehaService) {
    super();
  }
  connect(): Observable<Sneha[]> {
    return this.snehaService.getSneha();
  }
  disconnect() {}
}