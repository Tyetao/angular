import { Component, OnInit } from '@angular/core';
import {Stock} from '../stock-manage/stock-manage.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  stock: Stock;
  private stockId: number;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.stockId = this.router.snapshot.params['id'];
    console.log(this.stockId);
    this.stock = new Stock(1, '第一隻股票', 1.99, 1.5, '暗殺神杰卡斯', ['IT', '互联网']);
  }

}
