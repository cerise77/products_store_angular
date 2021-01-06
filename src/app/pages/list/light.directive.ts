import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
	selector: '[clickColor]'
})
export class BoldDirective{

	private backgroundColor = "";

	@HostBinding("style.backgroundColor") get getFontWeight(){

		return this.backgroundColor;
	}

	@HostListener("mouseenter") onMouseEnter() {
		this.backgroundColor = "#c9a4b9";
	}

	@HostListener("mouseleave") onMouseLeave() {

    this.backgroundColor ="";
	}
}
