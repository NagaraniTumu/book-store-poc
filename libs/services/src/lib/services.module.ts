import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BooksService } from './books/books.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [BooksService],
})
export class ServicesModule {}
