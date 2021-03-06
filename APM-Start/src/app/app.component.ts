import {Component} from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
  
    <pm-products></pm-products>
    <pm-left-nav></pm-left-nav>
  </div>
  `
})

export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}