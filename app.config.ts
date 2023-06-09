import { ExpoConfig } from 'expo/config';

import { darkOnLightSplash, lightOnDarkSplash } from './data.splash.json';
// In SDK 46 and lower, use the following import instead:
// import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
  name: 'mauroconte-app-start-issue',
  slug: 'mauroconte-app-start-issue',
  scheme: 'mauroconte-app-start-issue',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  splash: lightOnDarkSplash as ExpoConfig['splash'],
  assetBundlePatterns: ['**/*'],
  ios: {
    bundleIdentifier: 'com.mauroconte.mauroconteappstartissue',
    supportsTablet: true,
    splash: {
      ...(lightOnDarkSplash as ExpoConfig['ios']['splash']),
      dark: darkOnLightSplash as ExpoConfig['ios']['splash']['dark'],
    },
  },
  android: {
    package: 'com.mauroconte.mauroconteappstartissue',
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    splash: {
      ...(lightOnDarkSplash as ExpoConfig['android']['splash']),
      dark: darkOnLightSplash as ExpoConfig['android']['splash']['dark'],
    },
  },
  web: {
    bundler: 'metro',
  },
};

export default config;
