import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FieldSearchComponent } from './field-search/field-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router/src/router_module';
import { FieldDetailComponent } from './field-detail/field-detail.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';
import { FieldsService } from './services/fields.service';
import { SearchFilterPipe } from './field-pipe';
import { SortableColumnComponent } from './sortable-column/sortable-column.component'
import { SortService } from './services/sort.service';
import { EntitiesComponent } from './entities/entities.component'

@NgModule({
  declarations: [
    AppComponent,
    FieldSearchComponent,
    NavbarComponent,
    FieldDetailComponent,
    SearchFilterPipe,
    SortableColumnComponent,
    EntitiesComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FieldsService,SortService],
  bootstrap: [AppComponent]
})
export class AppModule { }
