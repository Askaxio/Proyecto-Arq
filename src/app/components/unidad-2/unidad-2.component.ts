import { Component, ElementRef,OnInit } from '@angular/core';

@Component({
  selector: 'app-unidad-2',
  templateUrl: './unidad-2.component.html',
  styleUrls: ['./unidad-2.component.css']
})
export class Unidad2Component implements OnInit {
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
