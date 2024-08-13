import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { NavigationBar } from '@hugotomazi/capacitor-navigation-bar';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  constructor() { }

  async ngOnInit() {
    const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const color = darkMode ? '#003300' : '#00FF00';
    NavigationBar.setColor({ color: color, darkButtons: true });

    this.styleStatusBar(darkMode);
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', ({ matches }) => {
        this.styleStatusBar(matches);
      });
  }

  private async styleStatusBar(darkMode: boolean) {
    StatusBar.setStyle({ style: darkMode ? Style.Dark : Style.Light });
    if (Capacitor.getPlatform() === 'android') {
      await StatusBar.setBackgroundColor({ color: darkMode ? '#000000' : '#FFFFFF' });
    }
  }
}
