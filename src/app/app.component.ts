import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHandset: boolean;
  constructor(breakpointObserver: BreakpointObserver) {
    this.isHandset = breakpointObserver.isMatched(Breakpoints.Handset);
  }
}
