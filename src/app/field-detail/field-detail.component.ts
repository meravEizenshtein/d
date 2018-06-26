import { Component, OnInit } from '@angular/core';
import { Field } from '../entities/field';
import{ Router,ActivatedRoute,ParamMap } from '@angular/router'
import 'rxjs/add/operator/switchMap';
import { FieldsService } from '../services/fields.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-field-detail',
  templateUrl: './field-detail.component.html',
  styleUrls: ['./field-detail.component.css']
})
export class FieldDetailComponent implements OnInit {
  field: Field;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fieldService: FieldsService,
    private location:Location
  ) { }

  ngOnInit() {
    this.getField();
  }

  getField():void {
    const id= +this.route.snapshot.paramMap.get('id');
       this.fieldService.getField(id).subscribe(
         field=> this.field=field);
  }

  goBack(){
    this.location.back();
  }

}
