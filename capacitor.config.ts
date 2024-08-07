import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'cs.dark.light',
  appName: 'cs-dark-light',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      backgroundColor: '#FF0000',
      splashFullScreen: false,
      splashImmersive: false,
      launchAutoHide: false,
    }
  }
};

export default config;
