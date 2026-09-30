import { Stack, DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import { useThemeColors } from '@/theme/useThemeColors';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { 
    Gabarito_500Medium,
    Gabarito_600SemiBold,
    Gabarito_700Bold,
    Gabarito_800ExtraBold,
    useFonts, 
} from '@expo-google-fonts/gabarito';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const { colors, isDark } = useThemeColors();
    const [fontsLoaded, fontError] = useFonts({
        Gabarito_500Medium,
        Gabarito_600SemiBold,
        Gabarito_700Bold,
        Gabarito_800ExtraBold,
    });

    useEffect(() => {
        if (fontsLoaded || fontError) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    const baseTheme = isDark ? DarkTheme : DefaultTheme;

    const navigationTheme = {
        ...baseTheme,
        colors: {
            ...baseTheme.colors,
            primary: colors.text,
            background: colors.background,
            card: colors.surface,
            text: colors.text,
            border: colors.border,
        },
    };

    return (
        <ThemeProvider value={navigationTheme}>
            <Stack screenOptions={{ headerShown: false }}/>
            <StatusBar style="auto" />
        </ThemeProvider>
    )


}