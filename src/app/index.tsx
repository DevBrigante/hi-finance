import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { lightColors, darkColors } from '@/theme/colors';

export default function IndexRoute() {
    const colorScheme = useColorScheme();
    const colors = colorScheme === 'dark' ? darkColors : lightColors;

    return (
        <View style={[
            styles.container,
            { backgroundColor : colors.background}]}
            >
            <Text accessibilityRole="header" style={[styles.title, { color: colors.text}]}>
                hi-finance
            </Text>
            <Text style={{ color: colors.textSecondary }}>Fundação do aplicativo configurado.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        padding: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
    }
})