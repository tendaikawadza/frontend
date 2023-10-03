import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideForRolesDirective } from './directives/hide-for-roles.directive';



@NgModule({
  declarations: [
    HideForRolesDirective
  ],
  imports: [
    CommonModule
  ],

   exports:[

    HideForRolesDirective
   ]

})




export class SharedModule {



 }
