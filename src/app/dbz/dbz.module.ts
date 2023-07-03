import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './pages/main-page.components';
import { CharacterListComponent } from './components/character-list/character-list.component';



@NgModule({
  declarations: [
    DbzComponent,
    CharacterListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DbzComponent
  ]
})
export class DbzModule { }
