import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-stock-manage',
    templateUrl: './stock-manage.component.html',
    styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
    private stocks: Array<Stock>;

    constructor(public router: Router) {
    }

    ngOnInit() {
        this.stocks = [
            new Stock(1, '第一隻股票', 1.99, 1.5, '暗殺神杰卡斯', ['IT', '互联网']),
            new Stock(2, '第二隻股票', 2.99, 2.5, '暗殺神杰卡斯', ['金融']),
            new Stock(3, '第三隻股票', 3.99, 3.5, '暗殺神杰卡斯', ['1', '2']),
            new Stock(4, '第四隻股票', 4.99, 3.5, '暗殺神杰卡斯', ['1', '2']),
            new Stock(5, '第五隻股票', 5.99, 3.5, '暗殺神杰卡斯', ['1', '2']),
            new Stock(6, '第六隻股票', 6.49, 2.5, '暗殺神杰卡斯', ['1', '2']),
            new Stock(7, '第七隻股票', 7.119, 3.5, '暗殺神杰卡斯', ['1', '2']),
            new Stock(8, '第八隻股票', 8.39, 3.5, '暗殺神杰卡斯', ['1', '2']),
            new Stock(9, '第九隻股票', 9.09, 3.6, '暗殺神杰卡斯', ['1', '2']),
            new Stock(10, '第十隻股票', 10.99, 4.5, '暗殺神杰卡斯', ['1', '2'])
        ];
    }

    create() {
      this.router.navigateByUrl('/stock/1');

    }

    update(stock: Stock) {
      this.router.navigateByUrl('/stock/' + stock.id);
    }
}

export class Stock {

    constructor(public id: number,
                public name: string,
                public price: number,
                public rating: number,
                public desc: string,
                public categories: Array<string>) {
    }
}
