import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UI_TEXT } from '../../core/i18n/ui-text';
import { AppLanguage } from '../../core/services/language.service';
import { AppTheme } from '../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  @Input() activeSection = 'home';
  @Input() currentLanguage: AppLanguage = 'en';
  @Input() currentTheme: AppTheme = 'light';

  @Output() sectionChange = new EventEmitter<string>();
  @Output() languageToggle = new EventEmitter<void>();
  @Output() themeToggle = new EventEmitter<void>();

  text = UI_TEXT;
  isMenuOpen = false;

  setActiveSection(sectionId: string): void {
    this.sectionChange.emit(sectionId);
    this.isMenuOpen = false;
  }

  toggleLanguage(): void {
    this.languageToggle.emit();
  }

  toggleTheme(): void {
    this.themeToggle.emit();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}