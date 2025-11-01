import { Component, signal, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-bloom');

  @ViewChild('navLinks', { static: true }) navLinks!: ElementRef;

  toggleMenu() {
    this.navLinks.nativeElement.classList.toggle('active');
  }
}
