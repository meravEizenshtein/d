import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
 transform(items: any[], field: any, value: string): any[] {
    if (!items) return [];
    if (!value) return items;
   return items.filter(it => it[field].includes(value));
 }
}
