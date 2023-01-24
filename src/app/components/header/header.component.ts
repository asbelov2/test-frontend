import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  moveToRegBlock() {
    document.getElementById('registration')?.scrollIntoView({behavior:'smooth', block:'center', inline:'start'})
  }
}
