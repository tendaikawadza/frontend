import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHideForRoles]'
})
export class HideForRolesDirective {

  constructor(

    private viewContainerRef: ViewContainerRef,
    private templateRef:TemplateRef<any>



  ) { }

  @Input()set(HideForRoles:Array<string>){

    const hideFor=HideForRoles ||[];

    if(hideFor.length > 0){

      
    }


  }

}
