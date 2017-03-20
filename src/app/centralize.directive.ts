import {
  /**
   * Decorators
   */  
  Directive,
  HostBinding,
  HostListener,
  /**
   * Life cycle hooks
   */
  OnInit,
  /**
   * Others
   */
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[mygecoCentralize]'
})

export class CentralizeDirective implements OnInit {
  constructor(private el: ElementRef) {}
  @HostBinding('style.top') fromTop: string;
  @HostBinding('style.left') fromLeft: string;
  @HostListener('window:resize', []) onResize() {
    this.centralize();
  }
  ngOnInit() {
    this.centralize();
  }
  private centralize(): void {
    let dom = this.el.nativeElement;
    this.fromLeft = window.innerWidth/2 - dom.offsetWidth/2 + 'px';
    this.fromTop = window.innerHeight/2 - dom.offsetHeight/2 + 'px';
  }
}
