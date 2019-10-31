import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
 
export class AppDropDownDirective{

    @HostBinding('class.open') isOpen = false;
    @HostListener('click') toggle(){
        this.isOpen = !this.isOpen;
    }
    @HostListener('mouseleave') toggleDropdown(){
        this.isOpen = !this.isOpen;
    }

}