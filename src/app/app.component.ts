import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs/Observable';
import { BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _isHandset: Observable<BreakpointState> = this._breakpointObserver.observe(Breakpoints.Handset);
  constructor(private _breakpointObserver: BreakpointObserver) {}
}
