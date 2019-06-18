import { Directive, ElementRef, HostListener, HostBinding, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[appDropdown]',
    outputs: ['appDropdown']
})
export class DropdownDirective {

    appDropdown = new EventEmitter<boolean>();

    @HostBinding('class.show') isOpen = false;

    constructor(private elementRef: ElementRef) {}

    @HostListener('click') onToogleClass() {
        this.isOpen = !this.isOpen;
        this.appDropdown.emit(this.isOpen);
    }
}
