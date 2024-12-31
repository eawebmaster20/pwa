import { Injectable, signal } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class MediaQueryService {
  isMobile = signal<boolean>(false);

  constructor( private breakpointObserver: BreakpointObserver ) {
    this.breakpointObserver
      .observe(['(max-width: 600px)'])
      .subscribe((result) => this.isMobile.set(result.matches));
  }  
}
