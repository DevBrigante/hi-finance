import { StyleSheet, Text, View } from 'react-native';

export default function IndexRoute() {
    return (
        <View style={styles.container}>
            <Text accessibilityRole="header" style={styles.title}>
                hi-finance
            </Text>
            <Text>Fundação do aplicativo configurado.</Text>
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
    },
})