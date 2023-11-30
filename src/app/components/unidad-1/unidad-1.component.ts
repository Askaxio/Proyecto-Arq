import { Component, ElementRef, OnInit } from '@angular/core';
@Component({
  selector: 'app-unidad-1',
  templateUrl: './unidad-1.component.html',
  styleUrls: ['./unidad-1.component.css']
})
export class Unidad1Component implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToSection(sectionId: string): void {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
