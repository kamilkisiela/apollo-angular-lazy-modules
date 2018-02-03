import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './author/author.component';

@NgModule({
  imports: [CommonModule],
  exports: [AuthorComponent],
  declarations: [AuthorComponent],
})
export class SharedModule {}
