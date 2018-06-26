import { Component, OnInit } from '@angular/core';
import { Field } from '../entities/field';
import { FieldsService } from '../services/fields.service'
import { Router} from '@angular/router';
import { SortService } from '../services/sort.service'


@Component({
  selector: 'app-field-search',
  templateUrl: './field-search.component.html',
  styleUrls: ['./field-search.component.css']
})
export class FieldSearchComponent implements OnInit {


  fields: Field[] = null;
  inEditModeFields: Field[] = null;
  isNewItemLineOpen: boolean=false;
  newField: Field;
  editRowId: number = null;
  newFieldname: string;
  newFieldType: string;
  newFieldLength: number;
  newFieldIsDomain: boolean;
  newFieldBasedOn: string;




  constructor(private fieldsService: FieldsService,
    private router: Router,
    private sortService : SortService  ) {
    console.log("cons");
  }

  ngOnInit() {
    console.log("onInit")
    this.getFields();
    this.sortService.change.subscribe(event=>{
      debugger;
      this.sort(event);
    });
  }

  getFields(): void {
    this.fieldsService.getFields().subscribe(
      fields => this.fields = fields);
  }

  changeToEditMode(id: number) {
    this.editRowId = id;
  }

  chanageToNotEditable(field: Field) {
    this.editRowId = null;
  }

  deleteRow(field: Field) {
    debugger;
    alert("האם ברצונך למחוק?")
    var index = this.fields.indexOf(field, 0);
    if (index > -1) {
      this.fields.splice(index, 1);
    }
    if (this.inEditModeFields != null) {
      var index = this.inEditModeFields.indexOf(field, 0);
      if (index > -1) {
        this.inEditModeFields.splice(index, 1);
      }
    }
  }

  save()
  /*name:string,type:string,length:number,basedOn:string,isDomain:boolean)*/
  {
    debugger;
    this.fieldsService.addField(this.newField)
    .subscribe(()=>this.closeNewItemLine())
  }

  update(field): void {
    this.fieldsService.updateField(field)
      .subscribe(() => this.chanageToNotEditable(
        this.newField))
  }

  openNewItemLine(){
    this.isNewItemLineOpen= true;
  }

  closeNewItemLine(){
    this.isNewItemLineOpen= false;
    this.newField=null;
  }

  showDetail(field: Field){
    this.router.navigate(['/fieldDetail',field.id])
  }

  sort($event){
    debugger;
    this.fields.sort((n1:any,n2:any)=>{
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
