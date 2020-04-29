import { NgModule } from '@angular/core';
import {MatButtonModule, MatBadgeModule, MatToolbarModule, MatCardModule, MatSidenavModule, MatListModule, MatIconModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

const MaterialComponents = [
  MatButtonModule,
  MatBadgeModule,
  MatToolbarModule,
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  FormsModule
];


@NgModule({ 
  imports: [MaterialComponents],
  exports:[MaterialComponents] 
})
export class MaterialModule { }
