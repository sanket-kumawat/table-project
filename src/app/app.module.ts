import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './table/header/header.component';
import { DataTableComponent } from './table/data-table/data-table.component';
import { DetailComponent } from './table/detail/detail.component';
import { TableSearchFilterPipe } from './pipes/table-search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeaderComponent,
    DataTableComponent,
    DetailComponent,
    TableSearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
