import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private activeTheme: 'light' | 'dark' = 'light';

  private applyTheme(theme: 'light' | 'dark'): void {
    document.documentElement.setAttribute('data-theme', theme);
  }

  toggleTheme(): void {
    this.activeTheme = this.activeTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(this.activeTheme);
    localStorage.setItem('theme', this.activeTheme);
  }
  
}
