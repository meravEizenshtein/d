import { Injectable,Output,EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class SortService {

    constructor() {}

    //private columnSortedSource = new Subject<ColumnSortedEvent>();

    //columnSorted$ = this.columnSortedSource.asObservable();

    @Output() 
    change: EventEmitter<any> = new EventEmitter();

    columnSorted(event: ColumnSortedEvent) {
      debugger;
        this.change.emit(event);
    }

}

export interface ColumnSortedEvent {
    sortColumn: string;
    sortDirection: string;
}