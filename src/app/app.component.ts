import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { NavigationBar } from '@hugotomazi/capacitor-navigation-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const color = darkMode ? '#003300' : '#00FF00';
    NavigationBar.setColor({ color: color, darkButtons: true });
  }
}
