import { SplashScreen, Stack } from 'expo-router';
import { useEffect, useState } from 'react';

import { useRobotoFonts } from '../src/hooks/useRobotoFonts';

export default function Layout() {
  // waiting is just to have a bit of time to see the splash screen in this debug project
  const [waiting, setWaiting] = useState(true);

  const { loaded } = useRobotoFonts();

  useEffect(() => {
    const t = setTimeout(() => {
      setWaiting(false);
    }, 1000);
    return () => clearTimeout(t);
  }, []);

  if (!loaded || waiting) {
    return <SplashScreen />;
  }

  return <Stack />;
}
