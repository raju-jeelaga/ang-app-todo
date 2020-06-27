import {
  Directive,
  ElementRef,
  Input,
  HostListener,
  HostBinding,
} from "@angular/core";

@Directive({
  selector: "[appHighlightV3]",
})
export class HighlightV3Directive {
  constructor(private el: ElementRef) {}

  @Input("appHighlightV3") highlightColor: string;

  @HostListener("mouseenter") onmouseenter() {
    this.highlight(this.highlightColor || "yellow");
  }

  @HostListener("mouseleave") onmouseleave() {
    this.highlight(null);
  }

  @HostBinding("class") someClass: string = "my-own-class";

  private highlight(color: string) {
    this.el.nativeElement.style.background = color;
  }
}
