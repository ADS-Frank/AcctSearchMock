import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-account-search',
  templateUrl: './account-search.component.html',
  styleUrls: ['./account-search.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: []
})
export class AccountSearchComponent implements OnInit {

    private showResults: boolean = false;
    private _loading: boolean = false;

    constructor() { }

    public loading() {
        return !this.showResults && this._loading;
    }

    ngOnInit() {
    }

    public fakeSearch() {
        this._loading = true;
        setTimeout(() => {
            this._loading = false;
            this.showResults = true;
        }, 1000);
    }

    public clear() {
        this.showResults = false;
    }

}
