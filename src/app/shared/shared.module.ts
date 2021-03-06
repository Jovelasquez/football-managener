import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ElementListComponent } from './element-list/element-list.component';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ElementModalComponent } from './element-modal/element-modal.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule  } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  declarations: [ElementListComponent, ElementModalComponent],
  entryComponents: [ElementModalComponent],
  exports: [ElementListComponent]
})
export class SharedModule { }
