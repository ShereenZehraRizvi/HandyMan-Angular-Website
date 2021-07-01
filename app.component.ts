import { Component } from '@angular/core';
import { SlimLoadingBarModule, SlimLoadingBarService } from 'ng2-slim-loading-bar';
import{
  NavigationStart,
  NavigationEnd,
  NavigationError,
  NavigationCancel,
  Router,
  Event,
} from '@angular/router';

import{
  FormGroup, 
  FormBuilder, 
  Validators,
}from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular9crud';
  constructor(
    private loadingbar:SlimLoadingBarService,
    private router:Router,
    
  ){
    this.router.events.subscribe((event:Event) => {
      this.navigationInterceptor(event);
    });
  }
  private navigationInterceptor(event:Event): void {
    if (event instanceof NavigationStart) {
      this.loadingbar.start();
    }
    if (event instanceof NavigationEnd) {
      this.loadingbar.complete();
    }
    if (event instanceof NavigationCancel) {
      this.loadingbar.stop();
    }
    if (event instanceof NavigationError) {
      this.loadingbar.stop();
    }
  }
}
