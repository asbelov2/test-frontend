import { Component } from '@angular/core';

@Component({
  selector: 'app-cta-section',
  templateUrl: './cta-section.component.html',
  styleUrls: ['./cta-section.component.scss']
})
export class CTASectionComponent {
  moveToRegBlock() {
    document.getElementById('registration')?.scrollIntoView({behavior:'smooth', block:'center', inline:'start'})
  }
}
