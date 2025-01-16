import { ApplicationRef, Component, effect } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { concat, interval } from 'rxjs';
import { first } from 'rxjs/operators';
// import { getMessaging, getToken, onMessage } from 'firebase/messaging';
// import { initializeApp } from 'firebase/app';

// local imports
import { MediaQueryService } from './core/services/media-query/media-query.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Fixed typo from `styleUrl` to `styleUrls`
})
export class AppComponent {
  title = 'pwa';
  token: string | null = null;

  constructor(
    private appRef: ApplicationRef, 
    private updates: SwUpdate,
    private router: Router,
    // private mediaQueryService: MediaQueryService,
  ) {
    // dynamically handle viewport display
    // effect(() => {
    //   this.handleMobileView();
    // })
  }

  ngOnInit() {

    
  }

  ngAfterViewInit() {
  }


  
  // handle mobile viewport
  // handleMobileView () {
  //   const isMobile = this.mediaQueryService.isMobile()
  //   if (!isMobile) {
  //     this.router.navigate(['/invalid-viewport'])
  //   } else if (isMobile) {
  //     this.router.navigate(['']);
  //   }

  // }
}
