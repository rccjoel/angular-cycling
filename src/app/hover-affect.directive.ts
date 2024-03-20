import { Directive, ElementRef, Input, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
  standalone: true
})
export class HoverAffectDirective {
  @Input () type: string = '';
  @Input () tag: string = '';

  constructor(private elm: ElementRef, private renderer: Renderer2) { }

    @HostListener('mouseenter') onMouseEnter() {
      if(this.type === 'underline') {
        this.renderer.setStyle(this.elm.nativeElement, 'text-decoration', 'underline');
      }

      if(this.tag === 'bold') {
        this.renderer.setStyle(this.elm.nativeElement, 'font-weight', 'bold');
      }
    }
  
    @HostListener('mouseleave') onMouseLeave() {
      if(this.type === 'underline') {
        this.renderer.setStyle(this.elm.nativeElement, 'text-decoration', 'none');
      }

      if(this.tag === 'bold') {
        this.renderer.setStyle(this.elm.nativeElement, 'font-weight', 'normal');
      }
    }

}