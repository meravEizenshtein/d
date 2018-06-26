import { Component, OnInit } from '@angular/core';
import { SortService } from '../services/sort.service'


@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.css']
})
export class EntitiesComponent implements OnInit {

  
  entities:Entity[] =[{
    id :1,
    "name":"entity1"
  },
  {
    id :2,
    "name":"entity2"
  },
  {
    id :3,
    "name":"entity3"
  }
];
  constructor(
    private sortService : SortService
  ) { }

  ngOnInit() {
    debugger;
    this.sortService.change.subscribe(event=>{
      debugger;
      this.onSorted(event);
    });

   }

  onSorted($event){
    debugger;
    this.entities.sort((n1:any,n2:any)=>{
      if($event.sortDirection === 'desc'){
        if(n1[$event.sortColumn]< n2[$event.sortColumn])
          return 1;
      }else{
        if( n1[$event.sortColumn]> n2[$event.sortColumn])
        return 1;
      }
    });
  }

}

export class Entity {
  id: number;
  name: string;
}