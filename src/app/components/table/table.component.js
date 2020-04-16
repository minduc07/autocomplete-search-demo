var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ViewChild, } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { merge } from 'rxjs/observable/merge';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { switchMap } from 'rxjs/operators/switchMap';
import { catchError } from 'rxjs/operators/catchError';
import { TsTableDataSource, TsSortDirective, TsPaginatorComponent, } from '@terminus/ui';
var DATA_MOCK = [
    {
        username: 'foo',
        age: 12,
        title: 'foo title',
        active: true,
        visible: true,
    },
    {
        username: 'bar',
        age: 34,
        title: 'bar title',
        active: true,
        visible: false,
    },
    {
        username: 'baz',
        age: 22,
        title: 'baz title',
        active: true,
        visible: true,
    },
    {
        username: 'bing',
        age: 47,
        title: 'bing title',
        active: false,
        visible: true,
    },
    {
        username: 'boom',
        age: 111,
        title: 'boom title',
        active: false,
        visible: false,
    },
    {
        username: 'bang',
        age: 61,
        title: 'bang title',
        active: true,
        visible: false,
    },
];
var COLUMNS_SOURCE = [
    {
        name: 'Username',
        value: 'username',
    },
    {
        name: 'Age',
        value: 'age',
    },
    {
        name: 'Title',
        value: 'title',
    },
    {
        name: 'Is Active',
        value: 'active',
    },
    {
        name: 'Is Visible',
        value: 'visible',
    },
];
var COLUMNS_SOURCE_GITHUB = [
    {
        name: 'Created',
        value: 'created',
    },
    {
        name: 'Title',
        value: 'title',
    },
    {
        name: 'Comments',
        value: 'comments',
    },
    {
        name: 'State',
        value: 'state',
    },
    {
        name: 'Number',
        value: 'number',
    },
];
var TableComponent = /** @class */ (function () {
    function TableComponent(http) {
        this.http = http;
        this.allColumns = COLUMNS_SOURCE_GITHUB.slice(0);
        this.displayedColumns = [
            'created',
            'number',
            'title',
            'state',
            'comments',
        ];
        this.dataSource = new TsTableDataSource();
        this.resultsLength = 0;
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
    }
    TableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.exampleDatabase = new ExampleHttpDao(this.http);
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(function () {
            console.log('in sortChange subscribe');
            _this.paginator.currentPageIndex = 0;
        });
        merge(this.sort.sortChange, this.paginator.pageSelect, this.paginator.recordsPerPageChange)
            .pipe(startWith({}), switchMap(function () {
            _this.isLoadingResults = true;
            return _this.exampleDatabase.getRepoIssues(_this.sort.active, _this.sort.direction, _this.paginator.currentPageIndex, _this.paginator.recordsPerPage);
        }), map(function (data) {
            console.log('Demo: fetched data: ', data);
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            _this.isRateLimitReached = false;
            _this.resultsLength = data.total_count;
            return data.items;
        }), catchError(function () {
            _this.isLoadingResults = false;
            // Catch if the GitHub API has reached its rate limit. Return empty data.
            _this.isRateLimitReached = true;
            return of([]);
        })).subscribe(function (data) {
            _this.dataSource.data = data;
        });
    };
    /*
     *{
     *  search_term: 'foo',
     *  s: [
     *    {
     *      name: 'name',
     *      dir: 'asc',
     *    },
     *    {
     *      name: 'id',
     *      dir: 'desc',
     *    },
     *  ],
     *}
     */
    TableComponent.prototype.perPageChange = function (e) {
        console.log('DEMO records per page changed: ', e);
    };
    TableComponent.prototype.onPageSelect = function (e) {
        console.log('DEMO page selected: ', e);
    };
    TableComponent.prototype.first = function (e) {
        console.log('DEMO first: ', e);
    };
    TableComponent.prototype.previous = function (e) {
        console.log('DEMO previous: ', e);
    };
    TableComponent.prototype.next = function (e) {
        console.log('DEMO next: ', e);
    };
    TableComponent.prototype.last = function (e) {
        console.log('DEMO last: ', e);
    };
    __decorate([
        ViewChild(TsSortDirective)
    ], TableComponent.prototype, "sort", void 0);
    __decorate([
        ViewChild(TsPaginatorComponent)
    ], TableComponent.prototype, "paginator", void 0);
    TableComponent = __decorate([
        Component({
            selector: 'demo-table',
            templateUrl: './table.component.html',
        })
    ], TableComponent);
    return TableComponent;
}());
export { TableComponent };
/** An example database that the data source uses to retrieve data for the table. */
var ExampleHttpDao = /** @class */ (function () {
    function ExampleHttpDao(http) {
        this.http = http;
    }
    ExampleHttpDao.prototype.getRepoIssues = function (sort, order, page, perPage) {
        var href = 'https://api.github.com/search/issues';
        var requestUrl = href + "?q=repo:GetTerminus/terminus-ui";
        var requestQuery = "&sort=" + sort + "&order=" + order + "&page=" + (page + 1) + "&per_page=" + perPage;
        return this.http.get("" + requestUrl + requestQuery);
    };
    return ExampleHttpDao;
}());
export { ExampleHttpDao };
//# sourceMappingURL=table.component.js.map