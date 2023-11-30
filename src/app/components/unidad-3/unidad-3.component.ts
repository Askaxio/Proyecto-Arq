import { Component, ElementRef,OnInit } from '@angular/core';

@Component({
  selector: 'app-unidad-3',
  templateUrl: './unidad-3.component.html',
  styleUrls: ['./unidad-3.component.css']
})
export class Unidad3Component implements OnInit {
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
