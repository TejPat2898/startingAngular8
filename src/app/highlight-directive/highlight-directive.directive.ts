import { Directive, OnInit, ElementRef, HostListener } from "@angular/core";


@Directive({
    selector : '[appHighlight]'
})

export class HighlightDirective implements OnInit{
    constructor(private elementRef: ElementRef){}

    ngOnInit(){
        //this.elementRef.nativeElement.style.backgroundColor = 'red';

    }


    @HostListener('mouseenter') mouseover(eventData: Event){
        this.elementRef.nativeElement.style.backgroundColor = 'red';
    }

    @HostListener('mouseleave') mouseleave(eventData: Event){
        this.elementRef.nativeElement.style.backgroundColor = 'transparent';
    }
    
}

