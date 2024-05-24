import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  isFooterVisible: boolean = true;

  toggleFooter(): void {
    this.isFooterVisible = !this.isFooterVisible;
  }
}
