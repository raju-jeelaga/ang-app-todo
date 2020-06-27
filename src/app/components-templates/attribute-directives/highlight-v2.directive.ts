import { Directive, ElementRef, Input, HostListener } from "@angular/core";

@Directive({
  selector: "[appHighlightV2]",
})
export class HighlightV2Directive {
  constructor(private el: ElementRef) {}

  @Input() highlightColor: string;

  @HostListener("mouseenter") onmouseenter() {
    this.highlight(this.highlightColor || "yellow");
  }

  @HostListener("mouseleave") onmouseleave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.background = color;
  }
}
