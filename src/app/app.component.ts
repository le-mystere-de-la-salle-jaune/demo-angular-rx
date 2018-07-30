import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-gen></app-gen>
  <app-list></app-list>
  <app-form></app-form>
  <app-compteur></app-compteur>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
