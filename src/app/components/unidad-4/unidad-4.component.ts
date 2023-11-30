import { Component, ElementRef,OnInit } from '@angular/core';

@Component({
  selector: 'app-unidad-4',
  templateUrl: './unidad-4.component.html',
  styleUrls: ['./unidad-4.component.css']
})
export class Unidad4Component implements OnInit {
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
