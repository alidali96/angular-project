import { ElementRef, HostListener, Input } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appHoverStyle]',
})
export class HoverStyleDirective {
  constructor(private elm: ElementRef) {}
  @Input() fontWeight?: string;
  @Input() borderColor?: string;

  @HostListener('mouseenter') onMouseEnter(btn) {
    this.mouseEnterEffect(this.borderColor, this.fontWeight);
  }
  @HostListener('mouseleave') onMouseLeave(btn) {
    this.mouseLeaveEffect(this.borderColor, this.fontWeight);
  }

  private mouseEnterEffect(color, fontWeight) {
    if (color) {
      this.elm.nativeElement.style.borderBottom = `4px solid ${color}`;
    }
    if (fontWeight) {
      this.elm.nativeElement.style.fontWeight = fontWeight;
    }
  }
  private mouseLeaveEffect(colour, fontWeight) {
    if (colour) {
      this.elm.nativeElement.style.borderBottom = '';
    }
    if (fontWeight) {
      this.elm.nativeElement.style.fontWeight = 'normal';
    }
  }
}
