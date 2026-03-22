import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  @Input() activeSection = 'home';
  @Output() sectionChange = new EventEmitter<string>();

  setActiveSection(sectionId: string): void {
    this.sectionChange.emit(sectionId);
  }
}