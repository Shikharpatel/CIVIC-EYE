import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.civiceye.app',
  appName: 'CivicEye',
  webDir: 'public',
  server: {
    // Replace this with your deployed Vercel URL before building the Android app.
    url: 'https://YOUR-VERCEL-DEPLOYMENT.vercel.app',
    cleartext: false,
  },
  android: {
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: true,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#fbfcfd',
      showSpinner: false,
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#fbfcfd',
    },
  },
};

export default config;
